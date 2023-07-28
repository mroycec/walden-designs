import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-tint-200 py-8">
            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-bold mb-2 md:px-0">Contact Us</h4>
                        <p>Email: contact@waldendesigns.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                        <p>Address: 123 Main Street, City, Country</p>
                    </div>
                    <nav className="flex flex-col md:flex-row">
                        <div className="w-full -ml-4 md:ml-0 md:w-auto">
                            <Link href="/home" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">
                                Home
                            </Link>
                            <Link href="/shop" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">
                                Shop
                            </Link>
                            <Link href="/blog" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">
                                Blog
                            </Link>
                            <Link href="/pre-launch" className="px-4 py-2 font-semibold text-tint-600 hover:text-tint-900 transition-all duration-200 ease-in-out">
                                List
                            </Link>
                        </div>
                    </nav>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Walden Designs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;