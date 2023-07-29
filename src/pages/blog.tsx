import TopNavLayout from "@/components/topNavLayout/topNavLayout"
import { manifesto } from "@/copy"

const BlogHome = () => {
    return (
        <TopNavLayout>
            <div className="flex flex-col p-8">
                <h1 className="text-center text-xl border-primaryDark border-b">Hello World</h1>
                <p className="py-4 text-justify">{manifesto}</p>
            </div>
        </TopNavLayout>
    )
}

export default BlogHome