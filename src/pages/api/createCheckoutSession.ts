// pages/api/createCheckoutSession.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '@/layout'
import { Product } from '@/interfaces/Product';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { cartItems } = req.body;

    try {
        // Create the Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: cartItems.map((item: Product) => ({
                price: item.default_price,
                quantity: item.quantity
            })),
            mode: 'payment',
            success_url: 'https://your-website.com/order-confirmation', // Replace with your success URL
            cancel_url: 'https://walden-designs.netlify.app/shop', // Replace with your cancel URL
            expires_at: Math.floor(Date.now() / 1000) + (3600 * 1), // Configured to expire after 1 hour
        });
        console.log(await session.id)
        res.status(200).json({ sessionId: session.id });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create checkout session.' });
    }
}
