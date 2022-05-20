import React from 'react'

type Props = {
    achieved:string[]
}

export default function Achievements({achieved}: Props) {
  return (
    <div style={{position:"fixed", display:"flex", maxWidth:"100vw", bottom:0,left:0}}>
        {achieved.map((i, index)=>{
            if(i==="eotm")return <p key={index}>Employee of the month</p>;
            else if (i==="fired")return <p key={index}>Fired</p>;
        })}
        
    </div>
  )
}