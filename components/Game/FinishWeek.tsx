import React, { useEffect, useState } from 'react'
import styles from "../../styles/Game.module.scss"
import { arrangeTitle, formatDate } from '../../utils/gameUtils';
import Template1 from './Templates/Template1';
import Template2 from './Templates/Template2';
import Template3 from './Templates/Template3';
import Image from "next/image";

type Props = {
  finish:(selectTitle:number, selectEvent:number, punctuation:number, type:"FINISH"|"CONTINUE")=>void;
  choices:any;
  game:any;
}

export default function FinishWeek({finish, choices, game}: Props) {
  const [punctuation, setPunctuation] =useState((game.selectEvent+game.selectTitle)/2);
  const [title, setTitle] = useState([""]);
  useEffect(() => {
    arrangeTitle(choices.title.title,setTitle);
    return () => {
      
    }
  }, [])
  
  return (
    <div className={styles.finishScreen}>
        
        <div className={styles.template}>
          {choices && choices.template==="template1"?<Template1 title={title} date={formatDate(choices.event.Day)} website={choices.event.SourceURL}/>:choices.template==="template2"?<Template2 title={title} date={"22-12-2022"} website={choices.event.SourceURL}/>:<Template3 title={title} date={"22-12-2022"} website={choices.event.SourceURL}/>}
        </div>
        <div className={styles.info}>
          <p>You finished!</p>
          <p>your punctuation is...</p>
          <h2>{punctuation}</h2>
          <p>Your work was...</p>{punctuation>5?<Image src="/published.svg" alt="Your work was published badge" width={200} height={200}/>: <Image src="/notpublished.svg" alt="Your work was not published badge" width={200} height={200}/>}
          <p>Find the article related to the event you selected <a style={{color:"var(--background-yellow)", textDecoration:"underline"}} href={choices.event.SourceURL} target="_blank" rel={"noreferrer"}>here</a></p>
          <p>Find the article related to the title you selected <a style={{color:"var(--background-yellow)", textDecoration:"underline"}} href={choices.title.SourceURL} target="_blank" rel={"noreferrer"}>here</a></p>
          <button onClick={()=>finish(game.selectEvent,game.selectTitle,punctuation, "FINISH")}>GoodBye!</button>
          <button onClick={()=>finish(game.selectEvent,game.selectTitle,punctuation, "CONTINUE")}>Lets keep playing</button>
        </div>
        
    </div>
  )
}