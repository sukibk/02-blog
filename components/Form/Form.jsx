import styles from './Form.module.css'
import Button from "@/components/utils/Button";
import { useRouter } from "next/router";
import { useRef} from "react";

export default function Form(props){
    const homeLabel = '< BACK HOME'
    const router = useRouter();

    const titleRef = useRef();
    const authorRef = useRef();
    const dateRef = useRef();
    const textRef = useRef();

    const handleNavigation = () => {
        router.push('/');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {
            title: titleRef.current.value,
            author: authorRef.current.value,
            date: dateRef.current.value,
            text: textRef.current.value
        }

        props.onClick(blog)
    }

    return <>
        <div className={styles.outer}>
            <h1>Add a New Blog</h1>
        </div>
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input ref={titleRef} className={styles.item} type='text' placeholder='Title' />
                <input ref={authorRef} className={styles.item} type='text' placeholder='Author' />
                <input ref={dateRef} className={styles.item} type='date' placeholder='Date' />
                <textarea ref={textRef} className={styles.item} rows='10' placeholder='Text'/>
                <div className={styles.actions}>
                    <Button type='submit'>ADD BLOG</Button>
                </div>
            </form>
        </div>
        <Button type='button' onClick={handleNavigation}>{homeLabel}</Button>
    </>
}