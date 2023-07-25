const Landing = () => {
    return (
        <div className="bg-gray-100 h-screen">
            <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 h-16">
                <div className="h-full w-full flex items-center justify-between p-4">
                    <a href="#" className="block">
                        <img src="https://res.cloudinary.com/dy6gzqv4a/image/upload/v1671676173/CheshireCatTransparent_toaxs1.png" alt="CC logo"
                            className="h-24"/>
                    </a>
                    <nav className="hidden md:block" id="navigationMenu">
                        <a href="#" className="px-3 py-2 font-semibold text-gray-700 hover:text-gray-900">Home</a>
                        <a href="#" className="px-3 py-2 font-semibold text-gray-700 hover:text-gray-900">Features</a>
                        <a href="#" className="px-3 py-2 font-semibold text-gray-700 hover:text-gray-900">Pricing</a>
                    </nav>
                    <button className="md:hidden px-3 py-2 font-semibold text-gray-700 hover:text-gray-900">Menu</button>
                </div>
            </header>
            <div className="bg-white shadow-md absolute top-16 left-0 right-0 z-50 hidden" id="mobileMenu">
                <div className="container mx-auto h-full flex flex-col justify-between px-6 py-6">
                    <nav>
                        <a href="#" className="px-3 py-2 font-semibold text-gray-700 hover:text-gray-900">Home</a>
                        <a href="#" className="px-3 py-2 font-semibold text-gray-700 hover:text-gray-900">Features</a>
                        <a href="#" className="px-3 py-2 font-semibold text-gray-700 hover:text-gray-900">Pricing</a>
                    </nav>
                    <button className="px-3 py-2 font-semibold text-gray-700 hover:text-gray-900">Close</button>
                </div>
            </div>
            <header className="bg-gray-900 py-12 md:py-8 lg:py-8 mt-12">
                <div className="container mx-auto px-6 lg:px-0">
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className="text-center md:text-left md:w-1/2">
                            <h1 className="text-4xl font-bold text-white leading-none mb-6">Welcome to CheshireCat</h1>
                            <p className="text-gray-400 text-xl mb-8">An innovative software development platform that utilizes advanced AI
                                technologies to streamline and automate the process, resulting in faster and more efficient development cycles.
                                Join our waitlist to be notified when we launch.</p>
                            <div className="flex justify-center md:justify-start">
                                <form action="/sign_up" method="GET" className="w-full max-w-md">
                                    <div className="flex justify-center md:justify-start border-b border-gray-800 py-2">
                                        <div className="flex justify-center">
                                            <button type="submit"
                                                className="flex-shrink-0 bg-teal-500 hover:bg-purple-700 active:bg-puple-600 hover:border-teal-700 text-sm border-4 text-white py-1 px-4 rounded-full">Sign
                                                Up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src="https://res.cloudinary.com/dy6gzqv4a/image/upload/v1671676178/CheshireCatTransparent2_hdd6ao.png"
                                alt="CC logo" className="block mx-auto mb-4" width="100%" height="100"/>
                        </div>
                    </div>
                </div>
            </header>
            <section className="bg-white py-12 px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Product Overview</h2>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">About</h3>
                            <p className="text-gray-700 mb-4">Our platform follows agile
                                methodologies and BDD/TDD principles to create sophisticated, data-driven software solutions that adhere to best
                                practices for quality and allow developers to quickly test and refine ideas in the pursuit of continuous improvement. This
                                allows developers to focus on creating innovative features and solving complex problems, rather than spending time on
                                tedious tasks.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Access</h3>
                            <p className="text-gray-700 mb-4">Our core product offering is subscription-based access to our platform’s continually evolving suite of AI-powered tools
                                and services. We are also exploring new business models to further disrupt the traditional software development
                                industry, including partnering with consulting firms and software development companies.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">NFTs</h3>
                            <p className="text-gray-700 mb-4">CheshireCat will be distributing NFTs allowing access to our beta program. Join the waitlist for more detail.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing