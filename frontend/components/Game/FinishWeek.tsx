import React from 'react'

type Props = {
  finish:()=>void;
  continueGame:()=>void;
}

export default function FinishWeek({finish, continueGame}: Props) {
  return (
    <div>
        You finished!
        <button onClick={finish}>GoodBye!</button>
        <button onClick={continueGame}>Lets keep playing</button>
    </div>
  )
}