import styles from './NavigationSide.module.css';
import Button from "@/components/utils/Button";

export default function NavigationSide() {
    return <ul className={styles.nav}>
        <li className={styles.navitem}>
            <Button href=''>article 1</Button>
        </li>
        <li className={styles.navitem}>
            <Button href=''>article 2</Button>
        </li>
        <li className={styles.navitem}>
            <Button href=''>article 3</Button>
        </li>
        <li className={styles.navitem}>
            <Button href=''>article 4</Button>
        </li>
    </ul>
}