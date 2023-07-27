import Input from '../components/input/input'
import Button from '../components/button/button'
import { useRouter } from 'next/router'
import GradientModal from '@/components/gradientModal/gradientModal'

const Login = () => {
    const router = useRouter()

    return (
        <GradientModal>
            <form className="self-stretch grow shrink basis-0 flex-col justify-center items-center gap-2.5 flex">
                <div className="text-center text-5xl pb-12">🐌<br />Walden Designs</div>
                <div className="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 flex space-y-8 px-8 flex-col items-center justify-center">
                    <Input placeholder="Email" className="w-full" type="email" required />
                    <Input placeholder="Password" type='password' required />
                    <Button className="w-3/5" type="submit">Log in</Button>
                    <Button variant="secondary" type="button" className="w-3/5" onClick={() => router.push('/forgot-password')}>Forgot password?</Button>
                </div>
            </form>
        </GradientModal>
    )
}

export default Login