// components/CheckoutButton.tsx
import { useCart } from '@/contexts/cartContext';
import Button from '@/components/button/button';
import { Product } from '@/interfaces/Product';
import { useEffect, useState } from 'react';

interface AddToCartButtonProps {
    product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({product}) => {
    const [quantity, setQuantity] = useState(0);
    const { cartItems, addToCart, removeFromCart } = useCart();

    const checkQuantity = () => {
        const item = cartItems.find((item) => item.id === product.id)
        setQuantity(item?.quantity || 0);
    }

    const handleAddToCart = () => {
        addToCart(product);
    }

    const handleRemoveFromCart = () => {
        removeFromCart(product.id);
    }

    useEffect(() => {
        checkQuantity();
    }, [handleAddToCart, handleRemoveFromCart])

    return (
        (quantity === 0) ? (
            <Button onClick={handleAddToCart}>
                Add to cart
            </Button>
        ) : ( 
                <div className="flex flex-row justify-items items-center">
                    <Button variant="secondary" onClick={handleRemoveFromCart}>
                        - 1
                    </Button>
                    <div className="font-bold text-tint-700 px-2">{quantity} in cart</div>
                    <Button variant="secondary" onClick={handleAddToCart}>
                        + 1
                    </Button>
                </div>
        )
    );
};

export default AddToCartButton;