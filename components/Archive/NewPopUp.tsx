import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import styles from "../../styles/Newsroom.module.scss"
import { arrangeTitle2, formatDate } from '../../utils/gameUtils';
import { setArticleClicked } from '../../utils/newsUtils';
import CloseButton from '../CloseButton'
import Template1 from '../Game/Templates/Template1';
import Template2 from '../Game/Templates/Template2';
import Template3 from '../Game/Templates/Template3';
import { Game } from '../Layout';

type Props = {event:any; setSelected:any, gameObject:Game;
  setGameObject:React.Dispatch<React.SetStateAction<Game>>;}

export default function NewPopUp({event, setSelected, setGameObject, gameObject}: Props) {
  const [random, setRandom ] = useState(Math.floor(Math.random()*3))
  const checkAchivements = () =>{
    if(!gameObject.achievements.includes("Uafa")){
      setGameObject((state)=>{
        return({
          name: state.name,
          punctuation: state.punctuation,
          selectEvent:state.selectEvent,
          selectTitle:state.selectTitle,
          media: state.media,
          doneEvents:state.doneEvents,
          achievements: state.achievements.length<1?["Uafa"]:[...state.achievements, "Uafa"],
          tutorial: state.tutorial
      });
      })
    }
  }
  
    useEffect(() => {
      setRandom(Math.floor(Math.random()*3))
    
      return () => {
        
      }
    }, [event])
    
  return (
    <motion.div className={styles.newPopUp}
    initial="enter"
    animate="center"
    exit="exit"
    variants={variants}
    >
        <CloseButton close={setSelected}/>
        <div className={styles.templatePop}>
          {event&&(random===0?<Template1 title={arrangeTitle2(event.title.join(""), 20) as string[]} website={event.SourceURL} date={formatDate(event.Day)} event/>:random===1?<Template2 title={arrangeTitle2(event.title.join(""), 20) as string[]} website={event.SourceURL} date={formatDate(event.Day)} event/>:<Template3 title={arrangeTitle2(event.title.join(""), 25) as string[]} website={event.SourceURL} date={formatDate(event.Day)} event/>)}
        </div>
        <a onClick={()=>{checkAchivements();setArticleClicked(event, "archive")}} href={event.SourceURL} target="_blank" rel="noreferrer">Read this article</a>
    </motion.div>
  )
}

const variants = {
  enter:{
    opacity:0,
    x:"-50%",
    y:"100%",
    transition:{
      duration:0.3
    }
  },
  center:{
    opacity:1,
    x:"-50%",
    y:"-50%",
    transition:{
      duration:0.3
    }
  },
  exit:{
    opacity:0,
    x:"-50%",
    y:"-100%",
    transition:{
      duration:0.3
    }
  }
}