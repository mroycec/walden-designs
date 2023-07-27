
// pages/api/Products.ts

// Import your API response interface
import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '@/interfaces/Product'
import { stripe } from '@/layout'

// Define the API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
    // Set appropriate headers if needed (e.g., CORS headers, content-type, etc.)
    res.setHeader('Content-Type', 'application/json');
    try {
        const products = await stripe.products.list();
        console.log(products)
        // Process the products data as needed
        return res.status(200).json(products.data);

    } catch (error: any) {
        // Handle errors
        console.error('Error listing products:', error.message);
        return res.status(400).json(error)
    }
}