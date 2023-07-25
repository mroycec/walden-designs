import { useRouter } from 'next/router'

const handleSubmit = () => {
    const router = useRouter()
    router.push('/confirmation')
}