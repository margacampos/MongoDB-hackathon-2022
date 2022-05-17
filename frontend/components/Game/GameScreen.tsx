import React from 'react'
import styles from "../../styles/Game.module.scss"
import Dialog from './Dialog'
import SelectEvent from './SelectEvent'

type Props = {}

export default function GameScreen({}: Props) {
  return (
    <div id={styles.screen}>
        <div className={styles.person}>
            <div className={styles.img}>
                This is person
            </div>
        </div>
        <div className={styles.dialog}>
            <Dialog/>
        </div>
        <div className={styles.display}>
            <div className={styles.inside}>
                <SelectEvent/>
            </div>
        </div>
    </div>
  )
}