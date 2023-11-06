import Button from "@/components/button/button"
import Image from "next/image"

const HeroArea = () => {
    return (
        <header className="bg-fog bg-cover mt-12">
            <div className="container m-auto p-auto">
                <div className="flex flex-col md:flex-row items-center justify-center mt-16 p-8">
                    <div className="text-center md:text-left md:w-1/2 pt-8 md:pt-0">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-tint-600 leading-none mb-4">Fabrication for a sustainable future.</h1>
                        <p className="text-tint-900 text-lg lg:text-xl mb-8">Walden Designs envisions a solarWave future of regenerative ecology and collective action; we create equipment for the modern explorer.</p>
                        <div className="flex justify-center md:justify-start">
                            <form action="/shop" method="GET" className="w-full max-w-md">
                                <div className="flex justify-center md:justify-start">
                                    <div className="flex justify-center">
                                        <Button type="submit" className="px-4 py-3 md:px-6 lg:px-8">                                             
                                            View products
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4 pt-8 md:p-4 ">
                        <Image src="/images/wd-mood-board-1.jpg" alt="Cloud" className="mx-auto p-auto w-[80%]" width={100} height={100} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeroArea