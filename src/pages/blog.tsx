import TopNavLayout from "@/components/topNavLayout/topNavLayout"
import { manifesto } from "@/copy"

const BlogHome = () => {
    return (
        <TopNavLayout>
            <div className="flex flex-col px-8">
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl border-primaryDark border-b w-full text-center p-4">Blog</h1>
                <p className="py-4 text-justify">{manifesto}</p>
            </div>
        </TopNavLayout>
    )
}

export default BlogHome