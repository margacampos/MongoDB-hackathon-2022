import React, { Dispatch, SetStateAction } from 'react'
import CloseButton from '../CloseButton';

type Props = {name:string; obj:{selectEvent:number; selectTitle:number; selectLayout:number; };setTodo:any; setCurrentActivity:Dispatch<SetStateAction<string>>; }

export default function ToDo({name, obj, setCurrentActivity, setTodo}: Props) {
 
  return (
    <div>
      <CloseButton close={setTodo}/>
        <h2>{name} to do list:</h2>
        {obj.selectEvent>=0?<div style={{display:"flex", gap:"1rem"}}><p style={{textDecoration:"line-through"}}>Assign story to the reporter, Thomas.</p><button onClick={()=>setCurrentActivity("SELECT_EVENT")}>Change</button></div>:<button onClick={()=>setCurrentActivity("SELECT_EVENT")}>Assign story to the reporter, Thomas.</button>}
        {obj.selectTitle>=0?<div style={{display:"flex", gap:"1rem"}}><p style={{textDecoration:"line-through"}}>Choose the best headline for the story.</p><button onClick={()=>setCurrentActivity("SELECT_TITLE")}>Change</button></div>:obj.selectEvent>=0&&<button onClick={()=>setCurrentActivity("SELECT_TITLE")}>Choose the best headline for the story.</button>}
        {obj.selectLayout>=0?<div style={{display:"flex", gap:"1rem"}}><p style={{textDecoration:"line-through"}}>Help the art director design the front page.</p><button onClick={()=>setCurrentActivity("SELECT_LAYOUT")}>Change</button></div>:obj.selectTitle>=0&&<button onClick={()=>setCurrentActivity("SELECT_LAYOUT")}>Help the art director design the front page.</button>}
        {obj.selectEvent>=0&&obj.selectLayout>=0&&obj.selectTitle>=0&& <button onClick={()=>setCurrentActivity("SCORE_SCREEN")}>Finish the week</button>}
    </div>
  )
}