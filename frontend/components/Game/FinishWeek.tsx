import React, { useEffect, useState } from 'react'
import styles from "../../styles/Game.module.scss"
import { arrangeTitle } from '../../utils/gameUtils';
import Template1 from './Templates/Template1';
import Template2 from './Templates/Template2';
import Template3 from './Templates/Template3';

type Props = {
  finish:(selectTitle:number, selectEvent:number, punctuation:number)=>void;
  continueGame:(punctuation:number, selectEvent:number, selectTitle:number)=>void;
  choices:any;
  game:any;
}

export default function FinishWeek({finish, continueGame, choices, game}: Props) {
  const [punctuation,setPunctuation] =useState((game.selectEvent+game.selectTitle)/2);
  const [title, setTitle] = useState([""]);
  useEffect(() => {
    console.log(choices)
    arrangeTitle(choices.event.title,setTitle);
    return () => {
      
    }
  }, [])
  
  return (
    <div className={styles.finishScreen}>
        
        <div className={styles.template}>
          {choices && choices.template==="template1"?<Template1 title={title} date={"22-12-2022"} website={choices.event.SourceURL}/>:choices.template==="template2"?<Template2 title={title} date={"22-12-2022"} website={choices.event.SourceURL}/>:<Template3 title={title} date={"22-12-2022"} website={choices.event.SourceURL}/>}
        </div>
        <div className={styles.info}>
          <p>You finished!</p>
          <p>your punctuation is...</p>
          <h2>{punctuation}</h2>
          <p>Your work was...{punctuation>5?" published!": " not published :("}</p>
          <button onClick={()=>finish(game.selectEvent,game.selectTitle,punctuation)}>GoodBye!</button>
          <button onClick={()=>continueGame(game.selectEvent,game.selectTitle,punctuation)}>Lets keep playing</button>
        </div>
        
    </div>
  )
}