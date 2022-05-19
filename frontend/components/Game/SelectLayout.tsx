import React from 'react'
import Templates from './Templates/Templates';

type Props = {
  getNextInteraction:(punctuation?:number)=>void;
}

export default function SelectLayout({getNextInteraction}: Props) {
  return (
    <div>
      <Templates title={"hola"}/>
      <button onClick={()=>getNextInteraction()}>Close</button>
    </div>
  )
}