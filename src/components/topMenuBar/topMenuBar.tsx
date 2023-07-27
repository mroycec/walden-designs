"use client"
import { useState } from "react"
import { useRouter } from "next/router"

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
                    <a href="#" className="block">
                        <img src="/images/cloud.png" alt="Cloud"
                            className="h-8" />
                    </a>
                    <nav className="hidden md:block" id="navigationMenu">
                        <a href="/home" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">Home</a>
                        <a href="/shop" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">Shop</a>
                        <a href="#" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">Blog</a>
                    </nav>
                    <button className="md:hidden px-3 py-2 font-semibold text-tint-600 hover:text-gray-900" onClick={() => setMobileMenuHidden(!mobileMenuHidden)}>Menu</button>
                </div>
            </header >
            <div className={`${mobileMenuHidden ? "hidden" : ""} bg-tint-300 md:hidden shadow-md absolute top-16 left-0 right-0 z-50" id="mobileMenu`}>
                <div className="container mx-auto h-full flex flex-col justify-between px-6 py-6">
                    <nav>
                        <a href="/home" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">Home</a>
                        <a href="/shop" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">Shop</a>
                        <a href="#" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">Blog</a>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default TopMenuBar
