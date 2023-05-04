import '../styles/global.css';
import PageLayout from "@/components/Layout/PageLayout";

export default function BlogApp({Component, pageProps}) {
    return (
        <PageLayout>
            <Component {...pageProps} />
        </PageLayout>
    )
}