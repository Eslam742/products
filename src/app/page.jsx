import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/images/hero.svg"
export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.col}>
        <h1 className={styles.title}> Your best online shop destination!</h1>
        <p className={styles.description}>
          E-commerce is the buying and selling of goods or services over the internet.
          It has become an increasingly popular way to shop, as it is convenient and often cheaper than traditional
          brick-and-mortar stores. E-commerce also offers a wider selection of goods and services than most physical stores
        </p>
        <button className={styles.button}>shop Now</button>
      </div>

      <div className={styles.col}>
       <Image src={Hero} alt='Hexa Shop' />
      </div>

    </div>
  );
}
