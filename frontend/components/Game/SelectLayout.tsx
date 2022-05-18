import React from 'react'

type Props = {
  getNextInteraction:(punctuation?:number)=>void;
}

export default function SelectLayout({getNextInteraction}: Props) {
  return (
    <div>
      <button onClick={()=>getNextInteraction()}>Next</button>
    </div>
  )
}