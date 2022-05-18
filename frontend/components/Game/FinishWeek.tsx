import React from 'react'

type Props = {
  finish:(selectTitle:number, selectEvent:number, punctuation:number)=>void;
  continueGame:(punctuation:number, selectEvent:number, selectTitle:number)=>void;
}

export default function FinishWeek({finish, continueGame}: Props) {
  return (
    <div>
        You finished!
        <button onClick={()=>finish(0,0,0)}>GoodBye!</button>
        <button onClick={()=>continueGame(0,0,0)}>Lets keep playing</button>
    </div>
  )
}