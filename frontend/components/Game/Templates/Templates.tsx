import React, { useEffect, useState } from 'react'
import styles from "../../../styles/templates/Templates.module.scss"
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
type Props = {
    title:string;
}

export default function Templates({title}: Props) {
    const [displayTitle, setDisplayTitle] = useState([""]);
    const arrangeTitle = (title:string) =>{
        let words = title.split(" ");
        let rows = []
        let finish = false;
        let last = 0;         
        while (finish==false) {
            let i=0;
            let quote = ""
            if(words.length===0){setDisplayTitle(rows); finish=true;};
            for(i; i<words.length;i++){
            if(words[i].length+quote.length<27){
                    quote+=`${words[i]} `
                    words.splice
                }else{
                    rows.push(quote);
                    last = i;
                    break;
                }
              }
              words.splice(0,i);
              if(words.length===0){rows.push(quote); setDisplayTitle(rows); finish=true;};
        }
    }
    const handleNext =(templateid:string)=>{
        //Add templateid to game results.
    }
    useEffect(() => {
      if(title.length>27){
         arrangeTitle(title);
      }else{
          setDisplayTitle([title])
      }
      return () => {
        
      }
    }, []);
    
  return (
      <div className={styles.templates}>
        <div className={styles.newspaper}>
            <button className={styles.img} onClick={()=>handleNext("template1")}>
                <Template1 title={displayTitle} date="November 20th, 2022" website='hola.es'/>
            </button>
            
        </div>  
        <div className={styles.newspaper}>
            <button className={styles.img} onClick={()=>handleNext("template2")}>
                <Template2 title={displayTitle} date={"November 20th, 2022"} website="hola.es"/>
            </button>
        </div> 
        <div className={styles.newspaper}>
            <button className={styles.img} onClick={()=>handleNext("template3")}>
                <Template3 title={displayTitle} date={"November 20th, 2022"} website="hola.es"/>
            </button>
        </div> 
      </div>
    
  )
}