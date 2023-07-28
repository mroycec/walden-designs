// contexts/CartContext.tsx
import { Product } from '@/interfaces/Product';
import { createContext, useContext, useState } from 'react';

// Create the cart context
interface CartContextProps {
    cartItems: Product[];
    addToCart: (item: Product) => void;
    removeFromCart: (itemId: string) => void;
}

const CartContext = createContext<CartContextProps>({
    cartItems: [],
    addToCart: () => { },
    removeFromCart: () => { },
});

// Cart context provider component
interface CartProviderProps {
    children: React.ReactNode; // Specify the type of the 'children' prop
}

// Create a custom hook to access the cart context
export const useCart = () => useContext(CartContext);

// Cart context provider component
const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    // Function to add an item to the cart
    const addToCart = (item: Product) => {
        setCartItems((prevItems) => {
            // Check if the item already exists in the cart
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemId: string) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== itemId)
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
