import React, { useState } from 'react'
import styles from "../../styles/Newsroom.module.scss"
import { formatDate } from '../../utils/gameUtils';
import CloseButton from '../CloseButton'
import Template1 from '../Game/Templates/Template1';
import Template2 from '../Game/Templates/Template2';
import Template3 from '../Game/Templates/Template3';

type Props = {event:any; setSelected:any, setCurrentActivity:any}

export default function NewPopUp({event, setSelected, setCurrentActivity}: Props) {
  const [random, setRandom ] = useState(Math.floor(Math.random()*3))
    const handleSelect = () => {
        //sent event and back to newsroom
        setCurrentActivity("")
    }
  return (
    <div className={styles.newPopUp}>
        <CloseButton close={setSelected}/>
        {random===0?<Template1 title={event.title} website={event.SourceURL} date={formatDate(event.Day)}/>:random===1?<Template2 title={event.title} website={event.SourceURL} date={event.Day}/>:<Template3 title={event.title} website={event.SourceURL} date={event.Day}/>}
        <a href={event.SourceURL} target="_blank" rel="noreferrer">Read this article</a>
    </div>
  )
}