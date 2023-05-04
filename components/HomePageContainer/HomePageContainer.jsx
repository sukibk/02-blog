import styles from './HomePage.module.css'
import AboutAuthor from "@/components/HomePageContainer/LeftSide/AboutAuthor";
import SideNav from "@/components/HomePageContainer/RightSide/SideNav";

export default function HomePageContainer(){
    return <section className={styles.main}>
        <div className={styles.context}>
            <AboutAuthor />
            <SideNav />
        </div>
    </section>
}