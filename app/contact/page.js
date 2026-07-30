import SiteShell from "../site-shell";
import { PageIntro } from "../site-sections";
import ContactForm from "../contact-form";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Alexandra Colgan about a brief, a project, or an idea.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Contact"
        title="Have a brief, a blank page, or an idea that's almost there?"
        intro="Fill in the form below and I'll get back to you as soon as I can."
      />

      <section className="section-frame section-frame-mustard">
        <ContactForm />
      </section>
    </SiteShell>
  );
}
