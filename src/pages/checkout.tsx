"use client"
import Button from '@/components/button/button'
import { Product } from '@/interfaces/Product'
import { useEffect, useState } from 'react'

import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import GradientModal from '@/components/gradientModal/gradientModal';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('sk_test_51NYDIgBpZbmyGQW3G1yJhtIFlT4Xt6mSV1d5NoAY8xoddYq8hy7Qgn7gV6sowF62SXOle4czeuh5VqLgQqFcBxSa00DAspkhpf');


const Login = () => {
    const router = useRouter();
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        getProducts()
    }, [router])

    const getProducts = async () => {
        const list = await fetch('/api/listProducts')
        setProducts(await list.json())
    }

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
                <Button className="" onClick={() => handleCheckout(products)}>Checkout</Button>
            </GradientModal>
    )
}

export default Login