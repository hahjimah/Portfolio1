import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elliot NextJS Portfolio',
  description: 'NextJS Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel='icon' type='image/svg+xml' href='favicon.svg' />
      <body>{children}</body>
    </html>
  )
}
