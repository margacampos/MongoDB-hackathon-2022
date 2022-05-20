import React, { useState } from 'react'

type Props = {
  finish:(selectTitle:number, selectEvent:number, punctuation:number)=>void;
  continueGame:(punctuation:number, selectEvent:number, selectTitle:number)=>void;
  choices:any;
  game:any;
}

export default function FinishWeek({finish, continueGame, choices, game}: Props) {
  const [punctuation,setPunctuation] =useState((game.selectEvent+game.selectTitle)/2);
  return (
    <div>
        You finished!
        your punctuation is...
        <h2>{punctuation}</h2>
        Your work was...{punctuation>5?" published!": " not published :("}
        <button onClick={()=>finish(game.selectEvent,game.selectTitle,punctuation)}>GoodBye!</button>
        <button onClick={()=>continueGame(game.selectEvent,game.selectTitle,punctuation)}>Lets keep playing</button>
    </div>
  )
}