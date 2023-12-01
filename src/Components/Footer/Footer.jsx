import Image from "next/image"
import styles from "./footer.module.css"
import { social_media } from "./data"
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 Eslam Reda. All rights reserved</div>
      <div className={styles.social}>
        {social_media.map(media =>
          <Link  key={media.id} href={media.url} target="_blank">
          <Image src={`/images/icons/${media.name}.png`} width={25} height={25} className={styles.icon} alt="Eslam Reda ${media.name} link" /></Link>
  )}


      </div>

    </div>
  )
}
