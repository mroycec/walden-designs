import HeroArea from "@/components/heroArea/heroArea"
import TopMenuBar from "@/components/topMenuBar/topMenuBar"

const Landing = () => {

    return (
        <div className="bg-tint-100 h-screen fixed overflow-auto" >
            <div className="overflow-y-auto">
                <TopMenuBar />
                <HeroArea />
                <section className="py-12 px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">About</h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="bg-tint-300 p-8 rounded-lg shadow-lg h-full">
                                <h3 className="text-2xl font-bold mb-4">Modular</h3>
                                <p className="text-tint-900 mb-4">Our products are designed to work as a system, allowing you to mix and match pieces according to your needs and preferences. We follow the principle of form = function, meaning that our products are practical, comfortable, and versatile. Whether you are hiking in the mountains or exploring the city, you can customize your outfit and gear to suit the occasion.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="bg-tint-300 p-8 rounded-lg shadow-lg h-full">
                                <h3 className="text-2xl font-bold mb-4">Customizable</h3>
                                <p className="text-tint-900 mb-4">We believe that you should have the freedom to express your creativity and personality through your clothing and gear. That’s why we offer patches, pockets, sew kits, and other accessories that let you add your own flair and functionality to our products. Got an idea? As a cottage company, we'll do what we can to accomodate custom and one-off designs.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="bg-tint-300 p-8 rounded-lg shadow-lg h-full">
                                <h3 className="text-2xl font-bold mb-4">Sustainable</h3>
                                <p className="text-tint-900 mb-4">We care about the environment and the impact of our products on it. That’s why we follow the leave-no-trace principle, which means that we minimize our footprint on nature and respect its beauty and diversity. We also use eco-friendly materials and practices, such as organic cotton, recycled polyester, natural dyes, biodegradable packaging, and carbon-neutral shipping.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Landing