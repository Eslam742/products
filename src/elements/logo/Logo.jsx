import Link from "next/link";

import styles from "./logo.module.css"
import { Lobster } from 'next/font/google'



const logofont = Lobster({ subsets: ['latin'], weight: ["400"] })

export default function Logo() {
    return (


        <
        Link href = "/"
        className = { `${styles.logo} ${logofont.className}` } > Eslam Reda < /Link>





    )
}