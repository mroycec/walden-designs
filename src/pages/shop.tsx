"use client"
import Button from '@/components/button/button'
import { Product } from '@/interfaces/Product'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import TopNavLayout from '@/components/topNavLayout/topNavLayout'
import CartProvider from '@/contexts/cartContext'
import CheckoutButton from '@/components/checkoutButton/checkoutButton'
import { useCart } from '@/contexts/cartContext'

const Shop = () => {
    const router = useRouter()
    const [products, setProducts] = useState<Product[]>([])
    const { fetchCartFromLocalStorage } = useCart()

    useEffect(() => {
        getProducts()
        fetchCartFromLocalStorage()
    }, [])
    
    const getProducts = async () => {
        const list = await fetch('/api/listProducts')
        setProducts(await list.json())
    }

    return (
        <TopNavLayout>
            <div className="w-full justify-center items-center flex flex-col">
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl border-primaryDark border-b w-full text-center p-4">Products</h1>
                <div className="overflow-y-auto overflow-x-hidden flex-wrap flex items-center justify-center">
                    {products && products.length > 0 && products.map((product, index) => (
                        <div key={index} className="text-center flex flex-col space-y-4 p-4 items-center justify-center">
                            <Image width={100} height={100} className="w-64 h-64 stretch flex flex-col p-8 flex-grow flex-shrink" src={product.images && product.images[0]} alt={product.name} />
                            <h1>{product.name}</h1>
                            <Button className="" onClick={() => {router.push(`/product-details?product_id=${product.id}`)}}>View Details</Button>
                        </div>

                    ))}
                </div>
            </div>
        </TopNavLayout>
    )
}

export default Shop