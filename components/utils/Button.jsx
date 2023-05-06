import styles from './Button.module.css';
import Link from "next/link";

export default function Button(props) {

    if (props.type === 'submit' || props.type === 'button') {
        if(props.onClick !== undefined)
        return <button className={styles.button} type={props.type} onClick={props.onClick}>
            {props.children}
        </button>
        else
            return <button className={styles.button} type={props.type}>
                {props.children}
            </button>
    } else {
        return <Link className={styles.button} href={props.href}>{props.children}</Link>
    }
}