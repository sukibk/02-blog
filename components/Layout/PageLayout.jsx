import NavigationTop from "@/components/Navigation/TopBar/NavigationTop";
import styles from './PageLayout.module.css';

export default function PageLayout(props){
    return (
        <>
            <NavigationTop />
            <main className={styles.main}>{props.children}</main>
        </>
    )
}