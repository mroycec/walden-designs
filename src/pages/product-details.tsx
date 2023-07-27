import { useRouter } from 'next/router'
import GradientModal from '@/components/gradientModal/gradientModal'
import { Product } from '@/interfaces/Product';
import { useEffect, useState } from 'react';
import Button from '@/components/button/button';

const ProductDetails = () => {
    const router = useRouter();
    const [product, setProduct] = useState<Product | null>(null)
    const id = router.query.product_id as string;

    useEffect(() => {
        id && get(id)
    }, [id])

    const get = async (id: string) => {
        const res = await fetch(`/api/getProduct?id=${id}`)
        const res_json = await res.json()
        setProduct(res_json)
    }
    return (
        <GradientModal>
            <h1 className="text-4xl default p-8 text-center">Walden Designs</h1>
            <h2 className="text-2xl default pb-4 text-center">{product && product.name}</h2>
            {product && product.images.map((image, index) => (
                <img src={image} alt={product.name} key={index} className="w-60"/>
            ))}
            <Button className="" onClick={() => id && get(id)}>Add to cart</Button>
        </GradientModal>
    )
}

export default ProductDetails