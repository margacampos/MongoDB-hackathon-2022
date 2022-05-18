import React from 'react'
import styles from "../../styles/events/Display.module.scss"
import { useEffect, useState } from "react";
import Event from "../../components/NewsPaper/Event"
import { genRandomEvent } from "../../utils/eventUtils";

type Props = {
  getNextInteraction:(punctuation?:number)=>void;
}

export default function SelectEvent({getNextInteraction}: Props) {
    const [event, setEvent] = useState(genRandomEvent(3))
  return (
    <div className={styles.display}>
        {event && event.map((i,index)=><button key={index} onClick={()=>getNextInteraction()}><Event event={i}/></button>) }
    </div>
  )
}