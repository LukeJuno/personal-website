import './globals.css'

export const metadata = {
  title: 'Alex Morgan — Portfolio',
  description: 'A clean, modern personal portfolio built with Next.js.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
