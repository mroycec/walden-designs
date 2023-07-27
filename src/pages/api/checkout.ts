
// pages/api/checkout.ts

// Import your API response interface
import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '@/interfaces/Product'

// Define the API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
    // Set appropriate headers if needed (e.g., CORS headers, content-type, etc.)
    res.setHeader('Content-Type', 'application/json');
    
    const stripe = require('stripe')(process.env.STRIPE_API_KEY);
    try {
        const checkout = await stripe.checkout.sessions.list(req.body.cart)
        // Process the products data as needed
        return res.status(200).json(checkout);

    } catch (error: any) {
        // Handle errors
        console.error('Error listing products:', error.message);
        return res.status(400).json(error)
    }
}
