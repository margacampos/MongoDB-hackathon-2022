import React, { useEffect, useState } from 'react'
import { getClueDialog } from '../../utils/gameUtils';
import Dialog from './Dialog';

type Props = {person:string;setPerson:any;setImg:any;gameEvents:any;}

export default function Ask({person, setPerson, setImg, gameEvents}: Props) {
    const handleClick = (type:"location" | "actor" | "eventCode") =>{
        let dialog = getClueDialog(person, type, gameEvents.winner)
        setDialog([{person:person, text:dialog}]);
    }
    const [dialog, setDialog] = useState([{person:"", text:[""]}]);
    useEffect(() => {
        setImg(()=>{
            if(person==="MANAGING_EDITOR")return({src:"/characters/managingeditor.png", alt:"The newsroom Manging editor", height:724, width:365});
            if(person==="NEWS_EDITOR")return({src:"/characters/newseditor.png", alt:"The newsroom News editor", height:543, width:654});
            if(person==="ART_DIRECTOR")return({src:"/characters/artdirector.png", alt:"The newsroom Art director", height:659, width:430});
            if(person==="REPORTER")return({src:"/characters/reporter.png", alt:"The newsroom reporter", height:676, width:332});
            return({src:"", alt:"", height:0, width:0})
        })
    
      return () => {
        
      }
    }, [])
    
  return (
      dialog[0].person?
      <div>
          <Dialog text={dialog} setText={setDialog} setImg={setImg}/>
      </div>
      :<div>
        <p>What do you want to ask about?</p>
        <button onClick={()=>handleClick("location")}>what are the best locations for the event?</button>
        <button onClick={()=>handleClick("actor")}>On what type of participants should I focus on?</button>
        <button onClick={()=>handleClick("eventCode")}>What type of event are we looking for?</button>
        <button onClick={()=>setPerson("")}>close</button>
      </div>
  )
}