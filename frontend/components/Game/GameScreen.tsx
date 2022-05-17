import { useState } from 'react'
import styles from "../../styles/Game.module.scss"
import Dialog from './Dialog'
import SelectEvent from './SelectEvent'

type Props = {}

export default function GameScreen({}: Props) {
    const [texto, setTexto]:any = useState(1)
    const [butText, setButText] = useState("Next")
  return (
    <div id={styles.screen}>
        <div className={styles.person}>
            <div className={styles.img}>
                This is person
            </div>
        </div>
        {texto!="closed" && <div className={styles.dialog}>
            <Dialog text={texto} butText={butText} setText={setTexto}/>
        </div>}
        <div className={styles.display}>
            <div className={styles.inside}>
                <SelectEvent/>
            </div>
        </div>
    </div>
  )
}