"use client"
import Button from '@/components/button/button'
import { Product } from '@/interfaces/Product'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import TopNavLayout from '@/components/topNavLayout/topNavLayout'

const Shop = () => {
    const router = useRouter()
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        getProducts()
    }, [])
    
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
        if (response.status === 200) {
            window.location.reload()
        }
    }
    return (
        <TopNavLayout>
            <div className="w-full justify-center items-center flex flex-col space-y-8">
                <br className="border-2 border-tint-900" />
                <div className="overflow-y-auto overflow-x-hidden flex-wrap flex items-center justify-center">
                    {products && products.length > 0 && products.map((product, index) => (
                        <div key={index} className="text-center flex flex-col space-y-4 p-4 items-center justify-center">
                            <Image width={100} height={100} className="w-64 h-64 stretch flex flex-col p-8 flex-grow flex-shrink" src={product.images && product.images[0]} alt={product.name} />
                            <h1>{product.name}</h1>
                            <Button className="" onClick={() => {router.push(`/product-details?product_id=${product.id}`)}}>View Details</Button>
                        </div>

                    ))}
                </div>
                <Button className="" onClick={() => router.push('/checkout')}>Checkout</Button>
            </div>
        </TopNavLayout>
    )
}

export default Shop