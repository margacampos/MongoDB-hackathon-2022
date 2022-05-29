import React, { useEffect, useState } from 'react'
import { Event } from '../../utils/eventUtils';
import styles from "../../styles/Game.module.scss";
import { htmlEntities } from '../../utils/gameUtils';

type Props = {
  getNextInteraction:(event:string,punctuation:number)=>void;
  gameEvents:{result:any[], winner:any};
  choice:{event:Event, title:{title:string}, template:string}
  finishSelection:(type:string, choice:any)=>void;
}

export default function SelectTitle({getNextInteraction, gameEvents, finishSelection}: Props) {
  function randomArrayShuffle(array:Event[]) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
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
      {gameEvents && randomArrayShuffle(gameEvents.result).map((i, index)=><button onClick={()=>{finishSelection("title", i);getNextInteraction("SELECT_TITLE",getPoints(i));}} key={index}>{htmlEntities(i.title as string)}</button>)}
    </div>
  )
}