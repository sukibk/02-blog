import HomePageContainer from "@/components/HomePageContainer/HomePageContainer";
import Form from "@/components/Form/Form";

import {useRouter} from "next/router";
import Head from "next/head";

export default function AddBlogPage(props){

    const router = useRouter();

    const handleAddBlog = async (currentBlog) => {
        const result = await fetch('/api/add-blog', {
            method: 'POST',
            body: JSON.stringify(currentBlog),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await result.json();

        console.log(data)

        router.push('/');
    }

    return <>
        <Head>
            <title>Add New Blog</title>
        </Head>
        <Form onClick={handleAddBlog}/>
    </>
}