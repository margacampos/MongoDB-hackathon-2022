import React from 'react'

type Props = {name:string; obj:{selectEvent:number, selectTitle:number, selectLayout:number} }

export default function ToDo({name, obj}: Props) {
  return (
    <div>
        <h2>{name} to do list:</h2>
        {obj.selectEvent>-1?<p style={{textDecoration:"line-through"}}>Assign story to the reporter, Thomas.</p>:<button onClick={()=>console.log("hola")}>Assign story to the reporter, Thomas.</button>}
        {obj.selectTitle>-1?<p style={{textDecoration:"line-through"}}>Choose the best headline for the story.</p>:<button onClick={()=>console.log("hola")}>Choose the best headline for the story.</button>}
        {obj.selectLayout>-1?<p style={{textDecoration:"line-through"}}>Help the art director design the front page.</p>:<button onClick={()=>console.log("hola")}>Help the art director design the front page.</button>}
    </div>
  )
}