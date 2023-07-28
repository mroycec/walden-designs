import TopNavLayout from "@/components/topNavLayout/topNavLayout"
import { manifesto } from "@/copy"

const BlogHome = () => {
    return (
        <TopNavLayout>
            <h1>Hello World</h1>
            <p>{manifesto}</p>
        </TopNavLayout>
    )
}

export default BlogHome