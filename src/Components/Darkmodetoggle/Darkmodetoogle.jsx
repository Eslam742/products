"use client"
import { ThemeContext } from "@/Context/Themecontext"
import styles from "./darkmodetoggle.module.css"
import { useContext,  } from "react"
export default function Darkmodetoogle() {

    const {mode,toggle} = useContext(ThemeContext)

  return (
      <div className={styles.containerr} onClick={toggle}>
          <div className={styles.icon}>🌙</div>
          <div className={styles.icon}>🌚</div>
          <div
              className={styles.switcher}
          style={mode=== "light" ? {left:"2px"} : {right:"2px"} }/>

    </div>
  )
}
