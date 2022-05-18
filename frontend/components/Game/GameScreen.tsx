import { useEffect, useState } from 'react'
import styles from "../../styles/Game.module.scss"
import { genDialog, getEvent } from '../../utils/gameUtils'
import { Game } from '../Layout'
import Loading from '../Loading'
import Dialog from './Dialog'
import FinishWeek from './FinishWeek'
import SelectEvent from './SelectEvent'
import SelectLayout from './SelectLayout'
import SelectTitle from './SelectTitle'

type Props = {
    gameObject:Game;
    setGameObject:React.Dispatch<React.SetStateAction<Game>>;
    setStart:React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GameScreen({gameObject, setGameObject, setStart}: Props) {
    const [texto, setTexto]:any = useState("closed");
    const [game, setGame]:any = useState({});
    const finishWeek = (selectTitle:number, selectEvent:number, punctuation:number) =>{
        //Quit game
        setGameObject((state)=>{
            return({
                name: state.name,
                selectTitle: [...state.selectTitle, selectTitle],
                selectEvent: [...state.selectEvent, selectEvent],
                punctuation: [...state.punctuation, punctuation],
                media: (state.media+punctuation)/2,
                doneEvents: [...state.doneEvents, game.currentEvent],
                achievements: state.achievements,
                tutorial:false
            })
        })
        setStart(false)
    }
    const continueGame = (selectTitle:number, selectEvent:number, punctuation:number) =>{
        //Finish week and update gameObject
        setGameObject((state)=>{
            return({
                name: state.name,
                selectTitle: [...state.selectTitle, selectTitle],
                selectEvent: [...state.selectEvent, selectEvent],
                punctuation: [...state.punctuation, punctuation],
                media: (state.media+punctuation)/2,
                doneEvents: [...state.doneEvents, game.currentEvent],
                achievements: state.achievements,
                tutorial:false
            })
        })
    }
    const getNextInteraction = (punctuation?:number) =>{
        console.log("next Interaction")
        const index = game.order.indexOf(game.currentActivity)
        if(!punctuation)return(setGame((state:any)=>{
            return({
                tutorial:state.tutorial,
                name: state.name,
                punctuation: state.punctuation,
                selectEvent: state.selectEvent,
                selectTitle: state.selectTitle,
                media: state.media,
                doneEvents: state.doneEvents,
                achievements: state.achievements,
                currentEvent: state.currentEvent,
                currentActivity: state.order[index+1],
                order: state.order.slice(index),
                currentMoment: state.currentActivity==="SELECT_EVENT"?"AFTER_EVENT":state.currentActivity==="SELECT_TITLE"?"AFTER_TITLE":state.currentActivity==="SELECT_LAYOUT"?"AFTER_LAYOUT":state.currentMoment
            })
        }));
        setGame((state:any)=>{
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
        let order = getEvent(0).order;
        let current = order[0]
        let week = gameObject.punctuation.length%4===0?3:(gameObject.punctuation.length%4)-1;
        
      setGame({
          selectEvent:0,
          selectTitle: 0,
          currentEvent: getEvent(week).event,
          currentActivity:current,
          order: order,
          currentMoment:"START"
    })
      return () => {
      }
    }, []);
    useEffect(()=>{
        if(game){
           console.log("useEffect is called for dialog")
           if (game.currentActivity==="MANAGING_EDITOR"||game.currentActivity==="NEWS_EDITOR"||game.currentActivity==="ART_DIRECTOR"||game.currentActivity==="REPORTER"||game.currentActivity==="EDITOR_IN_CHIEF"){
               setTexto(genDialog(gameObject.tutorial,game.currentMoment,game.currentMoment==="START"?gameObject.punctuation.length-1:game.currentMoment==="SELECT_TITLE"?game.selectTitle:game.currentMoment==="SELECT_EVENT"?game.selectEvent:(game.selectEvent+game.selectTitle)/2, game.currentEvent,game.currentActivity,game.punctuation[game.punctuation.length-1],game.media))
           } 
        }
        return () =>{

        }
    }, [game])
    useEffect(() => {
        let order = getEvent(0).order;
        let current = order[0];
        let week = gameObject.punctuation.length%4===0?3:(gameObject.punctuation.length%4)-1;
        setGame({
                selectEvent: 0,
                selectTitle: 0,
                currentEvent: getEvent(week).event,
                currentActivity:current,
                order: order,
                currentMoment:"START"
            })
      return () => {
        
      }
    }, [gameObject])
    
  return (
      <div>
{game ?
    <div id={styles.screen}>
            <p>{game.currentActivity}: Current activity:</p>
        
        {texto!="closed" ?
        <div>
            <div className={styles.person}>
                <div className={styles.img}>
                    This is person
                </div>
            </div>
            <div className={styles.dialog}>
                <Dialog text={texto} setText={setTexto} getNextInteraction={getNextInteraction}/>
            </div>
        </div> 
        :game.currentActivity==="SELECT_EVENT"?
        <div>
            <SelectEvent getNextInteraction={getNextInteraction}/>
        </div>
        :game.currentActivity==="SELECT_TITLE"?
        <div>
            <SelectTitle getNextInteraction={getNextInteraction}/>
        </div>
        :game.currentActivity==="SELECT_LAYOUT"?
        <div>
            <SelectLayout getNextInteraction={getNextInteraction}/>
        </div>
        :game.currentActivity==="SCORE_SCREEN"?
        <div>
            <FinishWeek finish={finishWeek} continueGame={continueGame}/>
        </div>:
        <div>
            <p>What is your name?</p>
            <input type="text" />
        </div>
    }
    </div>
: <Loading/>}
      </div>
    
  )
}