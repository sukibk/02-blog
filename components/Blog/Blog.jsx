import styles from './Blog.module.css';
import Button from "@/components/utils/Button";
import {useRouter} from "next/router";

export default function Blog(props){

    const router = useRouter();

    const homeLabel = '< BACK HOME';

    const handleNavigation = () => {
        router.push('/');
    }

    return <><div className={styles.main}>
        <h1>{props.blog.title}</h1>
        <h4>{props.blog.name}</h4>
        <hr/>
        <h3>{props.blog.date}</h3>
        <p>{props.blog.text}</p>
    </div>
        <Button type='button' className={styles.action} onClick={handleNavigation}>{homeLabel}</Button>
    </>
}

