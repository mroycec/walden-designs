import { useCart } from '@/contexts/cartContext';
import Button, { ButtonProps } from '@/components/button/button';
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { stripePromise } from '@/layout';

const CheckoutButton: React.FC<ButtonProps> = ({variant, children, ...props}: ButtonProps) => {
    const { cartItems } = useCart();

    const handleCreateCheckoutSession = async () => {
        const res = await fetch('/api/createCheckoutSession', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cartItems: cartItems,
            }),
        });
        const data = await res.json();

        // Redirect to the Stripe checkout portal
        const stripe = await stripePromise;
        if (stripe) {
            const { error } = await stripe?.redirectToCheckout({
                sessionId: data.sessionId,
            });
            // Handle any errors during redirection
            if (error) {
                console.error('Error redirecting to checkout:', error);
            }
        }
    };

    return (
        <Button variant={variant} onClick={handleCreateCheckoutSession} disabled={cartItems.length === 0} {...props}>
            {children ?? "Check out"}
        </Button>
    );
};

export default CheckoutButton;
