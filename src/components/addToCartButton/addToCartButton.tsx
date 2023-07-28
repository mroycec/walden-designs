// components/CheckoutButton.tsx
import { useCart } from '@/contexts/cartContext';
import Button from '@/components/button/button';
import { Product } from '@/interfaces/Product';

interface AddToCartButtonProps {
    product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({product}) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
        console.log('added ' + product.name)
    }

    return (
        <Button onClick={handleAddToCart}>
            Add to cart
        </Button>
    );
};

export default AddToCartButton;