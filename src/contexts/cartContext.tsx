// contexts/CartContext.tsx
import { Product } from '@/interfaces/Product';
import { createContext, useContext, useEffect, useState } from 'react';

// Create the cart context
interface CartContextProps {
    cartItems: Product[];
    addToCart: (item: Product) => void;
    removeFromCart: (itemId: string) => void;
    addToCartArray: (items: Product[]) => void;
    fetchCartFromLocalStorage: () => void;
}

const CartContext = createContext<CartContextProps>({
    cartItems: [],
    addToCart: () => { },
    removeFromCart: () => { },
    addToCartArray: () => { },
    fetchCartFromLocalStorage: () => { }
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

    // Accepts a single Product
    const addToCart = (item: Product): void => {
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

    // Accepts an array of Products
    const addToCartArray = (items: Product[]): void => {
        fetchCartFromLocalStorage()
        items.forEach((item) => addToCart(item));
    };

    // Function to remove an item from the cart
    const removeFromCart = async (itemId: string) => {
        await fetchCartFromLocalStorage()
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === itemId);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    // If there is more than 1 of the item, reduce the quantity by 1
                    return prevItems.map((i) =>
                        i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
                    );
                } else {
                    // If there is only 1 of the item, remove it from the cart
                    return prevItems.filter((i) => i.id !== itemId);
                }
            } else {
                return prevItems;
            }
        });
    };

    const getLocalStorageCartItems = async () => {
        const localCartItems = await localStorage.getItem('cartItems');
        if (localCartItems) {
            return JSON.parse(localCartItems);
        } else {
            return [];
        }
    };

    useEffect(() => {
        const newCartItems = JSON.stringify([...cartItems]);
        localStorage.setItem('cartItems', newCartItems);
    }, [addToCart, removeFromCart]);

    const fetchCartFromLocalStorage = async () => {
        const localStorage = await getLocalStorageCartItems()
        if (localStorage) {
            setCartItems(localStorage);
        }
    }

    useEffect(() => {
        fetchCartFromLocalStorage();
    }, []);
    
    return (
        <CartContext.Provider value={{ 
            cartItems, 
            addToCart, 
            removeFromCart, 
            addToCartArray, 
            fetchCartFromLocalStorage 
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
