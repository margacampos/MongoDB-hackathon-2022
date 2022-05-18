import React from 'react'

type Props = {
  getNextInteraction:(punctuation?:number)=>void;
}

export default function SelectTitle({getNextInteraction}: Props) {
  return (
    <div>
        <button onClick={()=>getNextInteraction()}>Next</button>
    </div>
  )
}