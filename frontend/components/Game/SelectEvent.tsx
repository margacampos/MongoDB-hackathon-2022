import React from 'react'
import styles from "../../styles/events/Display.module.scss"
import { useEffect, useState } from "react";
import Event from "../../components/NewsPaper/Event"
import { genRandomEvent } from "../../utils/eventUtils";

type Props = {
  getNextInteraction:(punctuation?:number)=>void;
  gameEvents:{result:any[]; winner:any;};
  choice:{event:Event[], title:string, template:string}
  finishSelection:(type:string, choice:any, getPoints:()=>number)=>void;
}

export default function SelectEvent({getNextInteraction, gameEvents, finishSelection}: Props) {
  const getPoints = () => {
    return 0;
  }
  return (
    <div className={styles.display}>
        {gameEvents && gameEvents.result && gameEvents.result.map((i,index)=><button key={index} onClick={()=>{finishSelection("event",i, getPoints);getNextInteraction();}}><Event event={i}/></button>) }
    </div>
  )
}