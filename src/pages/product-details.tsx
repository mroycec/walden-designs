import { useRouter } from 'next/router'
import GradientModal from '@/components/gradientModal/gradientModal'
import { Product } from '@/interfaces/Product';
import { useEffect, useState } from 'react';
import Button from '@/components/button/button';
import Image from 'next/image';
import { StripePrice } from '@/interfaces/Price';
import AddToCartButton from '@/components/addToCartButton/addToCartButton';
import CartProvider from '@/contexts/cartContext';

const ProductDetails = () => {
    const router = useRouter();
    const [product, setProduct] = useState<Product | null>(null)
    const [price, setPrice] = useState<StripePrice | null>(null)
    const id = router.query.product_id as string;

    useEffect(() => {
        id && get(id)
    }, [id])

    const get = async (id: string) => {
        const res = await fetch(`/api/getProduct?id=${id}`)
        const res_json = await res.json()
        setProduct(res_json)
    }

    const getPrice = async (id: string) => {
        const res = await fetch(`/api/getPrice?price_id=${id}`)
        const res_json = await res.json()
        setPrice(res_json)
    }

    useEffect(() => {
        id && product && getPrice(product.default_price)
    }, [id, product])

    return (
        <GradientModal>
            <h1 className="text-4xl default p-8 text-center">Walden Designs</h1>
            <h2 className="text-2xl default pb-4 text-center">{product && product.name}</h2>
            {product && product.images.map((image, index) => (
                <div key={index}>
                    <Image src={image} alt={product.name} key={index} className="w-60" width={100} height={100} />
                </div>
            ))}
            <p>{'Price: $' + ((price) ? (price.unit_amount / 100).toFixed(2) : "unavailable")}</p>
            {product && <AddToCartButton product={product} />}
        </GradientModal>
    )
}

export default ProductDetails