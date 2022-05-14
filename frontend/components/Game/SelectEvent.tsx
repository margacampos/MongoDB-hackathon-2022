import React from 'react'
import styles from "../../styles/events/Display.module.scss"
import { useEffect, useState } from "react";
import Event from "../../components/NewsPaper/Event"
import { genRandomEvent } from "../../utils/eventUtils";

type Props = {}

export default function SelectEvent({}: Props) {
    const [event, setEvent] = useState(genRandomEvent(3))
  return (
    <div className={styles.display}>
        {event && event.map((i,index)=><Event key={index} event={i}/>) }
    </div>
  )
}