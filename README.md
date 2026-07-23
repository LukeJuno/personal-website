# Personal Portfolio

A clean, responsive one-page portfolio built with Next.js 15.5.21 and designed for Vercel.

## Requirements

- Node.js 20.9 or newer
- npm

## Preview locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Test a production build

```bash
npm run build
npm start
```

## Replace placeholder content

Most text and portfolio entries are in `app/page.js`.

- Change `Alex Morgan`, the introduction and About copy.
- Edit the `projects` array near the top to change project titles and descriptions.
- Replace `hello@example.com` with your email address.
- Replace the LinkedIn and Instagram links in the footer.
- Update the page title and description in `app/layout.js`.

## Replace placeholder images

The placeholder artwork is stored in `public/`:

- `project-one.svg`
- `project-two.svg`
- `project-three.svg`

You can overwrite these files, or add JPG/PNG/WebP images to `public/` and update each `image` path in the `projects` array in `app/page.js`.

## Deploy with GitHub and Vercel

1. Create a GitHub repository.
2. Upload all files from this project folder and commit them.
3. In Vercel, choose **Add New → Project**.
4. Import the GitHub repository.
5. Keep the detected Next.js settings and select **Deploy**.
6. In Vercel, open **Project Settings → Domains** and add your purchased domain.
7. Follow Vercel's DNS instructions at your domain registrar.
