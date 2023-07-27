"use client"
import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

const TopMenuBar = () => {
    const router = useRouter()
    const [mobileMenuHidden, setMobileMenuHidden] = useState(true)

    return (
        <>
            <header className="bg-tint-200 shadow-md fixed top-0 left-0 right-0 z-50 h-16" >
                <div className="w-screen h-full absolute items-center justify-center flex -z-50">
                    <h1 className="text-2xl text-center">Walden Designs</h1>
                </div>
                <div className="h-full w-full flex items-center justify-between p-4">
                    <Link href="#" className="block">
                        <img src="/images/cloud.png" alt="Cloud"
                            className="h-8" />
                    </Link>
                    <nav className="hidden md:block" id="navigationMenu">
                        <Link href="/home" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">Home</Link>
                        <Link href="/shop" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">Shop</Link>
                        <Link href="#" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">Blog</Link>
                    </nav>
                    <button className="md:hidden px-3 py-2 font-semibold text-tint-600 hover:text-gray-900" onClick={() => setMobileMenuHidden(!mobileMenuHidden)}>Menu</button>
                </div>
            </header >
            <div className={`${mobileMenuHidden ? "hidden" : ""} bg-tint-300 md:hidden shadow-md absolute top-16 left-0 right-0 z-50" id="mobileMenu`}>
                <div className="container mx-auto h-full flex flex-col justify-between px-6 py-6">
                    <nav>
                        <Link href="/home" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">Home</Link>
                        <Link href="/shop" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">Shop</Link>
                        <Link href="#" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">Blog</Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default TopMenuBar
