import { useEffect, useState } from 'react'
import styles from "../../styles/Game.module.scss"
import { genDialog, getEvent } from '../../utils/gameUtils'
import { Game } from '../Layout'
import Dialog from './Dialog'
import SelectEvent from './SelectEvent'

type Props = {
    gameObject:Game;
    setGameObject:React.Dispatch<React.SetStateAction<Game>>;
}

export default function GameScreen({gameObject, setGameObject}: Props) {
    const [texto, setTexto]:any = useState("closed");
    const [game, setGame] = useState(gameObject);
    const getNextInteraction = (punctuation:number) =>{
        const index = gameObject.order.indexOf(gameObject.currentActivity)
        setGame((state)=>{
            return({
                name: state.name,
                punctuation: state.punctuation,
                selectEvent: state.currentActivity==="SELECT_EVENT"?[...state.selectEvent, punctuation]:state.selectEvent,
                selectTitle: state.currentActivity==="SELECT_TITLE"?[...state.selectTitle, punctuation]:state.selectTitle,
                media: state.media,
                doneEvents: state.doneEvents,
                achievements: state.achievements,
                currentEvent: state.currentEvent,
                currentActivity: state.order[index+1],
                order: state.order,
                currentMoment: state.currentActivity==="SELECT_EVENT"?"AFTER_EVENT":state.currentActivity==="SELECT_TITLE"?"AFTER_TITLE":state.currentActivity==="SELECT_LAYOUT"?"AFTER_LAYOUT":state.currentMoment
            })
        })
        
    }
    useEffect(() => {
        console.log("starting useEffect")
      setGame((state)=>{
          return({
          name: state.name,
          punctuation: state.punctuation,
          selectEvent:state.selectEvent,
          selectTitle: state.selectTitle,
          media: state.media,
          doneEvents:state.doneEvents,
          achievements: state.achievements,
          currentEvent: state.currentEvent,
          currentActivity:state.currentActivity,
          order: state.order.length!>1?getEvent(-1).order:state.order,
          currentMoment:state.currentMoment})
    })
    
      return () => {
        
      }
    }, []);
    useEffect(()=>{
        console.log("useEffect is called for dialog")
        if (gameObject.currentActivity==="MANAGING_EDITOR"||gameObject.currentActivity==="NEWS_EDITOR"||gameObject.currentActivity==="ART_DIRECTOR"||gameObject.currentActivity==="REPORTER"||gameObject.currentActivity==="EDITOR_IN_CHIEF"){
            setTexto(genDialog(gameObject.currentMoment,gameObject.punctuation.length-1, gameObject.currentEvent,gameObject.currentActivity,gameObject.punctuation[gameObject.punctuation.length-1],gameObject.media))
        }
    }, [gameObject])
    
  return (
    <div id={styles.screen}>
        <div className={styles.person}>
            <div className={styles.img}>
                This is person
            </div>
        </div>
        {texto!="closed" ? <div className={styles.dialog}>
            <Dialog text={texto} setText={setTexto}/>
        </div>
        :game.currentActivity==="SELECT_EVENT"?
        <div>
            <SelectEvent/>
        </div>
        :game.currentActivity==="SELECT_TITLE"?
        <div>

        </div>
        :game.currentActivity==="SELECT_LAYOUT"?
        <div>

        </div>
        :game.currentActivity==="SCORE_SCREEN"?
        <div>

        </div>:
        <div>
            <p>What is your name?</p>
            <input type="text" />
        </div>
    }
    </div>
  )
}