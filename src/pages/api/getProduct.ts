// pages/api/getProduct.ts

// Import your API response interface
import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '@/interfaces/Product'
import { stripe } from '@/layout'

// Define the API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse<Product>) {

  try {
    // Retrieve the 'id' from the query parameters
    const { id } = req.query;
    
    // Check if 'id' is provided in the request
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Invalid or missing "id" parameter.' } as any);
    }

    // Use the 'id' parameter in the Stripe API request
    const product = await stripe.products.retrieve(id);

    // Process the products data as needed
    return res.status(200).json(product);

  } catch (error: any) {
    // Handle errors
    console.error('Error listing products:', error.message);
    return res.status(400).json(error)
  }
}

