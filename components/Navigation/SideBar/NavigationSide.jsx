import styles from './NavigationSide.module.css';
import Button from "@/components/utils/Button";

export default function NavigationSide(props) {
    return <ul className={styles.nav}>
        {props.navElements.map(element =>(
        <li className={styles.navitem} key={element.title}>
            <Button href={element.id}>{element.title}</Button>
            {/*TO DO: Based of an eleemnt.id make new pages*/}
        </li>))}
    </ul>
}