const SUBSTACK_URL = "https://alexandracolgan.substack.com";
const FEED_URL = `${SUBSTACK_URL}/feed`;

function decodeEntities(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function stripHtml(value) {
  return decodeEntities(value.replace(/<[^>]*>/g, "")).trim();
}

function extractTag(itemXml, tag) {
  const match = itemXml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  if (!match) return "";
  const raw = match[1].match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/);
  return (raw ? raw[1] : match[1]).trim();
}

function extractImage(itemXml) {
  const enclosure = itemXml.match(/<enclosure[^>]*url="([^"]+)"/);
  return enclosure ? enclosure[1] : null;
}

// Substack's RSS feed has no API key or auth — plain fetch + regex parsing,
// so this doesn't need an XML library for a handful of well-formed tags.
export async function getSubstackPosts(limit = 6) {
  try {
    const response = await fetch(FEED_URL, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) return [];

    const xml = await response.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];

    return items.slice(0, limit).map((itemXml) => {
      const description = stripHtml(extractTag(itemXml, "description"));
      return {
        title: stripHtml(extractTag(itemXml, "title")),
        link: extractTag(itemXml, "link"),
        pubDate: extractTag(itemXml, "pubDate"),
        excerpt: description,
        image: extractImage(itemXml),
      };
    });
  } catch {
    return [];
  }
}

export function formatPostDate(pubDate) {
  const date = new Date(pubDate);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export const SUBSTACK_HOME_URL = SUBSTACK_URL;
