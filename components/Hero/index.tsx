import styles from './index.module.css';
import Image from 'next/image';

export default function Hero(){
    return (
        <>
            <section className={styles.container}>
                <div className={styles.img}> 
                    <Image 
                        src="/images/thumbnail.jpeg" 
                        layout="fill"
                        objectFit='cover'
                        />
                </div>
                <div className={styles.description}>
                    <small className={styles.small}>Ooss Omobolaji Isreal</small>
                    <h2 className={styles.h2}>
                        The Game of Money
                    </h2>
                    <p className={styles.small}>
                        There are several mythical explanations on the subject called Money. Many 
                        defined money to be the root of all evil, some say money changes people and few 
                        say money gives happiness.
                    </p>

                    <button className={styles.purchaseBtn}>
                        Purchase
                    </button>
                </div>
            </section>
        </>
    )
}