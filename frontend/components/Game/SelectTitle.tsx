import React from 'react'

type Props = {
  getNextInteraction:(punctuation?:number)=>void;
  gameEvents:any;
}

export default function SelectTitle({getNextInteraction, gameEvents}: Props) {
  const getTitlesForSelection = () =>{
    //GET 5 titles (completly random, 4/5, 3/5, 2/5, 1/5)
  }
  return (
    <div>
        <button onClick={()=>getNextInteraction()}>Next</button>
    </div>
  )
}