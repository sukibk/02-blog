import styles from './NavigationTop.module.css';
import Button from "@/components/utils/Button";

export default function NavigationTop(){
    return <div className={styles.navbar}>
        <ul className={styles.nav}>
            <li className={styles.navitem1}>
                <h1>markosudarblog.com</h1>
            </li>
            <li className={styles.navitem2}>
                <Button href='/add-blog/'>Add Post</Button>
            </li>
        </ul>
    </div>
}