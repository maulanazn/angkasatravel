import './global.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({weight: "700", preload: false})

export const metadata: Metadata = {
  title: 'Angkasa travel',
  description: 'Angkasa travel app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
