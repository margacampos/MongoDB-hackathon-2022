import React from 'react'
import styles from "../../styles/events/Display.module.scss"
import { useEffect, useState } from "react";
import Event from "../../components/NewsPaper/Event"
import { Event as E } from "../../utils/eventUtils";

type Props = {
  getNextInteraction:(event:string, punctuation:number)=>void;
  gameEvents:{result:any[]; winner:any;};
  choice:{event:E, title:string, template:string}
  finishSelection:(type:string, choice:any)=>void;
}

export default function SelectEvent({getNextInteraction, gameEvents, finishSelection}: Props) {
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
    <div className={styles.display}>
        {gameEvents && gameEvents.result && gameEvents.result.map((i,index)=><button key={index} onClick={()=>{finishSelection("event",i);getNextInteraction("SELECT_EVENT", getPoints(i));}}><Event event={i}/></button>) }
    </div>
  )
}