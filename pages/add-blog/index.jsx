import HomePageContainer from "@/components/HomePageContainer/HomePageContainer";
import Form from "@/components/Form/Form";

import {useRouter} from "next/router";

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
        <Form onClick={handleAddBlog}/>
    </>
}