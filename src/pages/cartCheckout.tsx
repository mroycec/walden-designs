"use client"
import { Product } from '@/interfaces/Product'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import GradientModal from '@/components/gradientModal/gradientModal';
import CheckoutButton from '@/components/checkoutButton/checkoutButton';

const Checkout = () => {
    const router = useRouter();
    {
        
    }
    return (
        <GradientModal>
            <CheckoutButton/>
        </GradientModal>
    )
}

export default Checkout