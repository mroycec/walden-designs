import Input from '../components/input/input'
import Button from '../components/button/button'
import { useRouter } from 'next/router'
import GradientModal from '@/components/gradientModal/gradientModal'

const ForgotPassword = () => {
    const router = useRouter()
    return (
        <GradientModal>
            <form className="self-stretch grow shrink basis-0 flex-col justify-center items-center gap-2.5 flex">
                <div className="self-stretch text-center text-5xl font-normal pb-14">🌀<br />Circadian Sync </div>
                <p className="text-tint-500 p-4">Send email to reset password</p>
                <div className="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 flex space-y-8 px-8 flex-col items-center justify-center">
                    <Input placeholder="Email" className="w-full" type="email" required/>
                    <Button className="w-3/5" type="submit">Send Email</Button>
                    <Button className="w-3/5" type="reset" variant="secondary" onClick={() => router.back()}>Back</Button>
                </div>
            </form>
        </GradientModal>
    )
}

export default ForgotPassword