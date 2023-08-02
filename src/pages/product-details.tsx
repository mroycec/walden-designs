import { useRouter } from 'next/router'
import { Product } from '@/interfaces/Product';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { StripePrice } from '@/interfaces/Price';
import AddToCartButton from '@/components/addToCartButton/addToCartButton';
import TopNavLayout from '@/components/topNavLayout/topNavLayout';

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
        <TopNavLayout>
            <div className="flex flex-col md:flex-row justify-center items-center w-full h-full space-y-4">
                <div className="flex h-full w-full py-8 px-4">
                    {product && product.images.map((image, index) => (
                        <div key={index} className="next-image-wrapper relative w-full h-full w-max-full h-max-full aspect-auto m-8">
                            <Image src={image} alt={product.name} key={index} fill={true} className="next-image object-contain" />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center items-center md:w-3/5 lg:w-2/5">
                    <h2 className="text-2xl default pb-4 text-center">{product?.name ?? ""}</h2>
                    <p className="text-center">{product?.description ?? ""}</p>
                    <p>{'Price: $' + ((price) ? (price.unit_amount / 100).toFixed(2) : "unavailable")}</p>
                    <div className="w-full justify-center items-center flex p-4">
                        {product && <AddToCartButton product={product} />}
                    </div>
                </div>
          </div>

        </TopNavLayout>
    )
}

export default ProductDetails