import React, { useState } from 'react'
import styles from "../../styles/Game.module.scss"

type Props = {
  finish:(selectTitle:number, selectEvent:number, punctuation:number)=>void;
  continueGame:(punctuation:number, selectEvent:number, selectTitle:number)=>void;
  choices:any;
  game:any;
}

export default function FinishWeek({finish, continueGame, choices, game}: Props) {
  const [punctuation,setPunctuation] =useState((game.selectEvent+game.selectTitle)/2);
  return (
    <div className={styles.titles}>
        <p>You finished!</p>
        <p>your punctuation is...</p>
        <h2>{punctuation}</h2>
        <p>Your work was...{punctuation>5?" published!": " not published :("}</p>
        <button onClick={()=>finish(game.selectEvent,game.selectTitle,punctuation)}>GoodBye!</button>
        <button onClick={()=>continueGame(game.selectEvent,game.selectTitle,punctuation)}>Lets keep playing</button>
    </div>
  )
}