import NavigationSide from "@/components/Navigation/SideBar/NavigationSide";
import styles from './SideNav.module.css'
// I will load navigation items here

export default function SideNav() {
    return <div className={styles.wrapper}>
        <div className={styles.main}>
            <h1 className={styles.title}>Articles</h1>
            <NavigationSide navElements={''}/>
        </div>
    </div>
}