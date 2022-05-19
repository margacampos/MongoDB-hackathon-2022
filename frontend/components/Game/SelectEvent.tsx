import React from 'react'
import styles from "../../styles/events/Display.module.scss"
import { useEffect, useState } from "react";
import Event from "../../components/NewsPaper/Event"
import { genRandomEvent } from "../../utils/eventUtils";

type Props = {
  getNextInteraction:(punctuation?:number)=>void;
  request:any;
}

export default function SelectEvent({getNextInteraction, request}: Props) {
    const [event, setEvent] = useState(genRandomEvent(5))
    const getEventsForSelection = () =>{
      //GET 5 events (completly diferent, 4/5, 3/5, 2/5, 1/5)
    }
  return (
    <div className={styles.display}>
        {event && event.map((i,index)=><button key={index} onClick={()=>getNextInteraction()}><Event event={i}/></button>) }
    </div>
  )
}