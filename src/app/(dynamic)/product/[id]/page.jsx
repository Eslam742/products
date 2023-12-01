import Image from "next/image"
import styles from "./page.module.css"



async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)


  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function generateMetadata({ params }) {
  // read route params
  const id = params.id

  // fetch data
  const product = await getData(params.id)


  return {
    title: product.title,

     description:product.description

  }
}

export default async function post({ params }) {

  const product = await getData(params.id)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}> { product.title}</h1>
          <p className={styles.desc}>{ product.description}</p>
        </div>

        <div className={styles.imageContainer}>
          <Image src={product.thumbnail} alt='image' className={styles.image} fill={true} />
          <span className={styles.author}>{product.category}</span>
        </div>

      </header>

      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map(image => (
            <Image key={image} src={image} alt={ product.title} width={200} height={200} />
          )
            )}
        </div>

      </div>


    </div>
  )
}
