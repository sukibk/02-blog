import '../styles/global.css';
import PageLayout from "@/components/Layout/PageLayout";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Loader from "@/components/utils/Loader";

export default function BlogApp({Component, pageProps}) {
    const [isLoading, setIsLoading] = useState(false);
    const route = useRouter()

        const router = useRouter();

        const [loading, setLoading] = useState(false);

        useEffect(() => {
            const handleStart = (url) => (url !== router.asPath) && setLoading(true);
            const handleComplete = (url) => (url === router.asPath) && setLoading(false);

            router.events.on('routeChangeStart', handleStart)
            router.events.on('routeChangeComplete', handleComplete)
            router.events.on('routeChangeError', handleComplete)

            return () => {
                router.events.off('routeChangeStart', handleStart)
                router.events.off('routeChangeComplete', handleComplete)
                router.events.off('routeChangeError', handleComplete)
            }
        })

    return (
        <>
            {loading && <Loader/>}
            <PageLayout>
                <Component {...pageProps} />
            </PageLayout>
        </>
    )
}