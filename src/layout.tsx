import './globals.css'

export const stripe = require('stripe')(process.env.STRIPE_API_KEY);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
