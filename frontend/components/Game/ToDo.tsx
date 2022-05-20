import React, { Dispatch, SetStateAction } from 'react'

type Props = {name:string; obj:{selectEvent:number, selectTitle:number, selectLayout:number}; setCurrentActivity:Dispatch<SetStateAction<string>>; current:string; }

export default function ToDo({name, obj, setCurrentActivity, current}: Props) {
 
  return (
    <div>
        <h2>{name} to do list:</h2>
        {obj.selectEvent>=0?<p style={{textDecoration:"line-through"}}>Assign story to the reporter, Thomas.</p>:<button onClick={()=>setCurrentActivity("SELECT_EVENT")}>Assign story to the reporter, Thomas.</button>}
        {obj.selectTitle>=0?<p style={{textDecoration:"line-through"}}>Choose the best headline for the story.</p>:obj.selectEvent>=0&&<button onClick={()=>setCurrentActivity("SELECT_TITLE")}>Choose the best headline for the story.</button>}
        {obj.selectLayout>=0?<p style={{textDecoration:"line-through"}}>Help the art director design the front page.</p>:obj.selectTitle>=0&&<button onClick={()=>setCurrentActivity("SELECT_LAYOUT")}>Help the art director design the front page.</button>}
        {obj.selectEvent>=0&&obj.selectLayout>=0&&obj.selectTitle>=0&& <button onClick={()=>setCurrentActivity("SCORE_SCREEN")}>Finish the week</button>}
    </div>
  )
}