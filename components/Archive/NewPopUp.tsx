import React, { useEffect, useState } from 'react'
import styles from "../../styles/Newsroom.module.scss"
import { arrangeTitle2, formatDate } from '../../utils/gameUtils';
import CloseButton from '../CloseButton'
import Template1 from '../Game/Templates/Template1';
import Template2 from '../Game/Templates/Template2';
import Template3 from '../Game/Templates/Template3';

type Props = {event:any; setSelected:any, setCurrentActivity:any}

export default function NewPopUp({event, setSelected, setCurrentActivity}: Props) {
  const [random, setRandom ] = useState(Math.floor(Math.random()*3))
  const [ev, setEv] = useState()
    const handleSelect = () => {
        //sent event and back to newsroom
        setCurrentActivity("")
    }
    const update = async() =>{
      let copy = [event];
      copy.map((i:any)=>{
        let title = i.title.join("");
        i.title=arrangeTitle2(title.toUpperCase(),27);
      });
      return copy[0]      
    }
    useEffect(() => {
      return () => {
        
      }
    }, [event])
    
  return (
    <div className={styles.newPopUp}>
        <CloseButton close={setSelected}/>
        <div className={styles.templatePop}>
          {event&&(random===0?<Template1 title={arrangeTitle2(event.title.join(""), 20) as string[]} website={event.SourceURL} date={formatDate(event.Day)}/>:random===1?<Template2 title={arrangeTitle2(event.title.join(""), 20) as string[]} website={event.SourceURL} date={formatDate(event.Day)}/>:<Template3 title={arrangeTitle2(event.title.join(""), 25) as string[]} website={event.SourceURL} date={formatDate(event.Day)}/>)}
        </div>
        <a href={event.SourceURL} target="_blank" rel="noreferrer">Read this article</a>
    </div>
  )
}