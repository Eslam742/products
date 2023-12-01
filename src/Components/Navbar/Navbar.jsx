
import Link from "next/link";
import styles from "./navbar.module.css"
import {links} from "./data"
import Button from "@/elements/Buttons/Button";
import Logo from '@/elements/logo/Logo';
import Darkmodetoogle from "../Darkmodetoggle/Darkmodetoogle";




export default function Navbar() {
  return (
    <div className={styles.container}>

     <Logo/>

      <div className={styles.links}>
        <Darkmodetoogle/>
        {links.map(link =>
          <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>

        )}

<Button/>
      </div>

    </div>
  )
}