"use client"
import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Button from "../button/button"
import CheckoutButton from "../checkoutButton/checkoutButton"

const TopMenuBar = () => {
    const [mobileMenuHidden, setMobileMenuHidden] = useState(true)
    return (
        <>
            <header className="bg-tint-200 shadow-md fixed top-0 left-0 right-0 z-50 h-16" >
                <div className="w-screen h-full absolute items-center justify-center flex -z-50">
                    <h1 className="text-2xl text-center">Walden Designs</h1>
                </div>
                <div className="h-full w-full flex items-center justify-between p-4">
                    <Link href="/home" className="block">
                        <img src="/images/cloud.png" alt="Cloud"
                            className="h-8" />
                    </Link>
                    <div className="flex flex-row items-center">
                        <nav className="hidden md:block" id="navigationMenu">
                            <Link href="/home" className="px-3 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">Home</Link>
                            <Link href="/shop" className="px-3 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">Shop</Link>
                            <Link href="/blog" className="px-3 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">Blog</Link>
                        </nav>
                        <CheckoutButton variant='text' className="hidden md:block">
                            <img src={'/images/cart.svg'} width={20} height={20} alt="shopping cart"/>
                        </CheckoutButton>
                    </div>
                    <button className="md:hidden px-3 py-2 font-semibold text-tint-600 hover:text-gray-900" onClick={() => setMobileMenuHidden(!mobileMenuHidden)}>Menu</button>
                </div>
            </header >
            <div className={`${mobileMenuHidden ? "hidden" : ""} bg-tint-300 md:hidden shadow-md fixed top-16 left-0 right-0 z-40`} id="mobileMenu">
                <div className="container mx-auto h-full flex flex-col justify-between px-4 py-2">
                    <nav>
                        <Link href="/home" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">Home</Link>
                        <Link href="/shop" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">Shop</Link>
                        <Link href="/blog" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">Blog</Link>
                        <Link href="/pre-launch" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">List</Link>
                        <CheckoutButton variant='text' className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transitiona-all duration-200 ease-in-out">Cart</CheckoutButton>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default TopMenuBar
