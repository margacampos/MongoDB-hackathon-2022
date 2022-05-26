import React, { useEffect, useState } from 'react'
import { Event } from '../../utils/eventUtils';
import styles from "../../styles/Game.module.scss";

type Props = {
  getNextInteraction:(event:string,punctuation:number)=>void;
  gameEvents:{result:any[], winner:any};
  choice:{event:Event, title:string, template:string}
  finishSelection:(type:string, choice:any)=>void;
}

export default function SelectTitle({getNextInteraction, gameEvents, finishSelection}: Props) {
  // const getTitlesForSelection = async () =>{
  //   //GET 5 titles (completly random, 4/5, 3/5, 2/5, 1/5)
  //   try {
  //     const res = await fetch("http://localhost:3000/api/title-game-generator",{
  //       method:"POST",
  //       body:JSON.stringify({winner: winnerEvent})
  //     });
  //     const result = await res.json();
  //     setSelection(result);
  //   } catch (error) {
  //     console.log(error)
  //   }
    
  // }
  const getPoints = (chosen:any) => {
    let score = 0
    if (chosen === gameEvents.winner)return 10;
    else{
      if(chosen.eventCode===gameEvents.winner.eventCode)score+=2;
      if(chosen.location2===gameEvents.winner.location2)score+=2;
      if(chosen.location1===gameEvents.winner.location1)score+=2;
      if(chosen.actor1===gameEvents.winner.actor1)score+=2;
      if(chosen.actor1===gameEvents.winner.actor2)score+=2;
    }
    return score;
  }
  return (
    <div className={styles.titles}>
      <h2>Select Title:</h2>
      {gameEvents && gameEvents.result.map((i, index)=><button onClick={()=>{finishSelection("title", i);getNextInteraction("SELECT_TITLE",getPoints(i));}} key={index}>{i.title}</button>)}
    </div>
  )
}