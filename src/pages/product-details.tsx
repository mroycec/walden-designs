import { useRouter } from 'next/router'
import GradientModal from '@/components/gradientModal/gradientModal'

const Login = () => {
    const router = useRouter()

    return (
        <GradientModal>
            <h1 className="text-4xl default p-8 text-center">Walden Designs</h1>
            <h2 className="">{}</h2>
        </GradientModal>
    )
}

export default Login