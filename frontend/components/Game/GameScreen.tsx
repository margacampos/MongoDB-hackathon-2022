import { useEffect, useState } from 'react'
import styles from "../../styles/Game.module.scss"
import { genDialog, getEvent } from '../../utils/gameUtils'
import { Game } from '../Layout'
import Loading from '../Loading'
import Dialog from './Dialog'
import SelectEvent from './SelectEvent'

type Props = {
    gameObject:Game;
    setGameObject:React.Dispatch<React.SetStateAction<Game>>;
}

export default function GameScreen({gameObject, setGameObject}: Props) {
    const [texto, setTexto]:any = useState("closed");
    const [game, setGame]:any = useState({});
    const getNextInteraction = (punctuation?:number) =>{
        console.log("next Interaction")
        const index = game.order.indexOf(game.currentActivity)
        if(!punctuation)return(setGame((state:any)=>{
            return({
                name: state.name,
                punctuation: state.punctuation,
                selectEvent: state.selectEvent,
                selectTitle: state.selectTitle,
                media: state.media,
                doneEvents: state.doneEvents,
                achievements: state.achievements,
                currentEvent: state.currentEvent,
                currentActivity: state.order[index+1],
                order: state.order,
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
        let order,current;
        if(gameObject.order.length<=1){
            order = getEvent(0).order;
            current = order[0]
        console.log(order, current)
        }else{
            order =gameObject.order;
            current = gameObject.currentActivity;
        }
        
      setGame({
          name: gameObject.name,
          punctuation: gameObject.punctuation,
          selectEvent:gameObject.selectEvent,
          selectTitle: gameObject.selectTitle,
          media: gameObject.media,
          doneEvents:gameObject.doneEvents,
          achievements: gameObject.achievements,
          currentEvent: gameObject.currentEvent,
          currentActivity:current,
          order: order,
          currentMoment:gameObject.currentMoment
    })
      return () => {
      }
    }, []);
    useEffect(()=>{
        if(game){
           console.log("useEffect is called for dialog")
           if (game.currentActivity==="MANAGING_EDITOR"||game.currentActivity==="NEWS_EDITOR"||game.currentActivity==="ART_DIRECTOR"||game.currentActivity==="REPORTER"||game.currentActivity==="EDITOR_IN_CHIEF"){
               setTexto(genDialog(game.currentMoment,game.punctuation.length-1, game.currentEvent,game.currentActivity,game.punctuation[game.punctuation.length-1],game.media))
           } 
        }
        return () =>{

        }
    }, [game])
    
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
: <Loading/>}
      </div>
    
  )
}