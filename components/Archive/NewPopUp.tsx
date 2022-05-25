import React from 'react'
import styles from "../../styles/Newsroom.module.scss"
import CloseButton from '../CloseButton'

type Props = {event:any; setSelected:any, setCurrentActivity:any}

export default function NewPopUp({event, setSelected, setCurrentActivity}: Props) {
    const handleSelect = () => {
        //sent event and back to newsroom
        setCurrentActivity("")
    }
  return (
    <div className={styles.newPopUp}>
        <CloseButton close={setSelected}/>
        <p>{event.title && event.title.map((i:string, index:number)=>`${i} `)}</p>
        <p>Learn more about this event <a href={event.SourceURL} >here</a></p>
        <button onClick={()=>handleSelect()}>Select event</button>
    </div>
  )
}