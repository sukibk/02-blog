import styles from './Loader.module.css'
import loader from './media/loading-gif.gif'

export default function Loader(){
    return <div className={styles.wrapper}>
        <div className={styles.media}>
            <img src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif'/>
        </div>
    </div>
}