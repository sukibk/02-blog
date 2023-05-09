import '../styles/global.css';
import PageLayout from "@/components/Layout/PageLayout";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Loader from "@/components/utils/Loader";

function Loading(){
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    console.log(loading)

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);

        router.events.on('routeChangeStart', () => {handleStart(); console.log('started')})
        router.events.on('routeChangeComplete', () => {handleComplete(); console.log('completed')})
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })
    
    return <>{loading && <Loader/>}</>
}

export default function BlogApp({Component, pageProps}) {
        

    return (
        <>
            <Loading/>
            <PageLayout>
                <Component {...pageProps} />
            </PageLayout>
        </>
    )
}