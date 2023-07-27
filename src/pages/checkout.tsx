"use client"
import Button from '@/components/button/button'
import { Product } from '@/interfaces/Product'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import GradientModal from '@/components/gradientModal/gradientModal';

const Checkout = () => {
    const router = useRouter();
    const [products, setProduct] = useState<Product[]>([])

    const handleCheckout = async (cart: Product[]) => {
        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cart)
        })
        if (response.status === 200 && response.url) {
            router.push(response.url)
        }
    }
    
    return (
        <GradientModal>
            <h1></h1>
            <Button className="" onClick={() => products && handleCheckout(products)}>Checkout</Button>
        </GradientModal>
    )
}

export default Checkout