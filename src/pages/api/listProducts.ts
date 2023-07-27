
// pages/api/products.ts

// Import your API response interface
import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '@/interfaces/Product'

// Simulated API response data (replace this with actual data from your database or Stripe)
const products: Product[] = [
  // Your product data here
];

// Define the API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  // Set appropriate headers if needed (e.g., CORS headers, content-type, etc.)
  res.setHeader('Content-Type', 'application/json');
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
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

