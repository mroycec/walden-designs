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
                            <div className="bg-tint-300 p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold mb-4">Methodology</h3>
                                <p className="text-tint-900 mb-4">Our platform follows agile
                                    methodologies and BDD/TDD principles to create sophisticated, data-driven software solutions that adhere to best
                                    practices for quality and allow developers to quickly test and refine ideas in the pursuit of continuous improvement. This
                                    allows developers to focus on creating innovative features and solving complex problems, rather than spending time on
                                    tedious tasks.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="bg-tint-300 p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold mb-4">Ideology</h3>
                                <p className="text-tint-900 mb-4">Our core product offering is subscription-based access to our platform’s continually evolving suite of AI-powered tools
                                    and services. We are also exploring new business models to further disrupt the traditional software development
                                    industry, including partnering with consulting firms and software development companies.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="bg-tint-300 p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold mb-4">NFTs</h3>
                                <p className="text-tint-900 mb-4">CheshireCat will be distributing NFTs allowing access to our beta program. Join the waitlist for more detail.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Landing