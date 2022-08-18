import styles from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero(){
    return (
        <>
            <section className={styles.container}>
                <div className={styles.img}> 
                    <Image 
                        src="/images/thumbnail.jpeg" 
                        layout="fill"
                        objectFit='cover'
                        alt="thumbnail"
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
                    <Link href="https://paystack.com/pay/7bm1g1s5x8">
                        <a className={styles.purchaseBtn}>
                            Purchase
                        </a>
                    </Link>
                </div>
            </section>
        </>
    )
}