import React, { useEffect, useState } from 'react'
import styles from "../../../styles/templates/Templates.module.scss"
import { Event } from '../../../utils/eventUtils';
import { arrangeTitle, formatDate } from '../../../utils/gameUtils';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
type Props = {
    title:string;
    select:(type:string, choice:any, getPoints:()=>number)=>void;
    next:any;
    choice:{event:Event, title:Event, template:string};
}

export default function Templates({title,select, next, choice}: Props) {
    const [displayTitle, setDisplayTitle] = useState([""]);
    
    const handleNext =(templateid:string)=>{
        //Add templateid to game results.
    }
    useEffect(() => {
      if(title.length>27){
         arrangeTitle(title, setDisplayTitle);
      }else{
          setDisplayTitle([title])
      }
      return () => {
        
      }
    }, []);
    
  return (
      <div className={styles.templates}>
        <div className={styles.newspaper}>
            <button className={styles.img} onClick={()=>{select("template","template1",()=>5);next("SELECT_LAYOUT", 5)}}>
                <Template1 title={displayTitle} date={formatDate(choice.title.Day as number)} website={choice.title.SourceURL as string}/>
            </button>
            
        </div>  
        <div className={styles.newspaper}>
            <button className={styles.img} onClick={()=>{select("template","template2",()=>5);next("SELECT_LAYOUT", 5)}}>
                <Template2 title={displayTitle} date={formatDate(choice.title.Day as number)} website={choice.title.SourceURL as string}/>
            </button>
        </div> 
        <div className={styles.newspaper}>
            <button className={styles.img} onClick={()=>{select("template","template3",()=>5);next("SELECT_LAYOUT", 5)}}>
                <Template3 title={displayTitle} date={formatDate(choice.title.Day as number)} website={choice.title.SourceURL as string}/>
            </button>
        </div> 
      </div>
    
  )
}