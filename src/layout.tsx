import { loadStripe } from "@stripe/stripe-js";

export const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
export const stripePromise = loadStripe('pk_test_51NYDIgBpZbmyGQW3gnVA2XyV2Q33VIvW89mWLqfGBLNx02zrqnnfXnnfE8mRqNwzesri3Vlsm65SKElsYNd485E000s3fJPaBN');

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
