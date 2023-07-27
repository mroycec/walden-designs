import { useRouter } from 'next/router'
import GradientModal from '@/components/gradientModal/gradientModal'
import { Product } from '@/interfaces/Product';
import { useEffect, useState } from 'react';
import Button from '@/components/button/button';

const ProductDetails = () => {
    const router = useRouter();
    const [product, setProduct] = useState<Product | null>(null)
    const id = router.query.id as string;

    useEffect(() => {
        id && getProduct(id)
    }, [id])

    const getProduct = async (id: string) => {
        try {
            const res = await fetch('/api/getProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            })
            setProduct(await res.json())
        } catch (error) {
            // Handle error here, e.g., setProduct(null) or display an error message
            console.error('Error fetching product:', error);
        }       
    }
    return (
        <GradientModal>
            <h1 className="text-4xl default p-8 text-center">Walden Designs</h1>
            <h2 className="text-2xl default p-8 text-center text-red-500">{product && product.name}</h2>
            <Button className="" onClick={() => id && getProduct(id)}>Get Product</Button>

        </GradientModal>
    )
}

export default ProductDetails