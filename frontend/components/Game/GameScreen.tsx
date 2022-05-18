import { useState } from 'react'
import styles from "../../styles/Game.module.scss"
import { Game } from '../Layout'
import Dialog from './Dialog'
import SelectEvent from './SelectEvent'

type Props = {
    gameObject:Game;
}

export default function GameScreen({gameObject}: Props) {
    const [texto, setTexto]:any = useState(null);
  return (
    <div id={styles.screen}>
        <div className={styles.person}>
            <div className={styles.img}>
                This is person
            </div>
        </div>
        {texto!="closed" && <div className={styles.dialog}>
            <Dialog text={texto} setText={setTexto}/>
        </div>}
        <div className={styles.display}>
            <div className={styles.inside}>
                <SelectEvent/>
            </div>
        </div>
    </div>
  )
}