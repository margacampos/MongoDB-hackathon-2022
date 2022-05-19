import { useEffect, useState } from 'react'
import styles from "../../styles/Game.module.scss"
import { genRandomEvent } from '../../utils/eventUtils'
import { genDialog, getEvent } from '../../utils/gameUtils'
import { Game } from '../Layout'
import Loading from '../Loading'
import Dialog from './Dialog'
import FinishWeek from './FinishWeek'
import SelectEvent from './SelectEvent'
import SelectLayout from './SelectLayout'
import SelectTitle from './SelectTitle'
import Image from "next/image"

type Props = {
    gameObject:Game;
    setGameObject:React.Dispatch<React.SetStateAction<Game>>;
    setStart:React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GameScreen({gameObject, setGameObject, setStart}: Props) {
    const [texto, setTexto]:any = useState("closed");
    const [request, setRequest] = useState(genRandomEvent(1)[0]);
    const [game, setGame]:any = useState({});
    const [img, setImg] = useState({src:"", alt:"", height:0, width:0})
    const checkForAchievements=()=>{
        //Check on gameObject for achievements and activate respective popUps
    }

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
        console.log(request)
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
        let week = gameObject.punctuation.length%4===0?3:(gameObject.punctuation.length%4)-1;
        if(game){
           console.log("useEffect is called for dialog")
           if (game.currentActivity==="MANAGING_EDITOR"||game.currentActivity==="NEWS_EDITOR"||game.currentActivity==="ART_DIRECTOR"||game.currentActivity==="REPORTER"||game.currentActivity==="EDITOR_IN_CHIEF"){
               setTexto(genDialog(gameObject.tutorial,game.currentMoment,week,game.currentEvent, game.currentActivity, game.currentMoment==="START"?gameObject.punctuation[gameObject.punctuation.length-1]:game.currentMoment==="SELECT_TITLE"?game.selectTitle:game.currentMoment==="SELECT_EVENT"?game.selectEvent:(game.selectEvent+game.selectTitle)/2, gameObject.media))
               setImg(()=>{
                   if(game.currentActivity==="MANAGING_EDITOR")return({src:"/characters/managingeditor.png", alt:"The newsroom Manging editor", height:724, width:365});
                   if(game.currentActivity==="NEWS_EDITOR")return({src:"/characters/newseditor.png", alt:"The newsroom News editor", height:543, width:654});
                   if(game.currentActivity==="ART_DIRECTOR")return({src:"/characters/artdirector.png", alt:"The newsroom Art director", height:659, width:430});
                   if(game.currentActivity==="REPORTER")return({src:"/characters/reporter.png", alt:"The newsroom reporter", height:676, width:332});
                   return({src:"", alt:"", height:0, width:0})
               })
            } 
        }
        return () =>{

        }
    }, [game])

    useEffect(() => {
        let week = gameObject.punctuation.length%4===0?3:(gameObject.punctuation.length%4)-1;
        let event = getEvent(week)
        let order = event.order;
        let current = order[week];

        setGame({
                selectEvent: 0,
                selectTitle: 0,
                currentEvent: event.event,
                currentActivity:current,
                order: order,
                currentMoment:"START"
            })

        checkForAchievements()
      return () => {
        
      }
    }, [gameObject])
    
  return (
      <div id={styles.screen}>
{game ?
    <div >
        {texto!="closed" &&
        <div>
            <div className={styles.person}>
                <div className={styles.img}>
                    {img.src && <Image src={img.src} alt={img.alt} width={img.width} height={img.height}/>}
                </div>
            </div>
            <div className={styles.dialog}>
                <Dialog text={texto} setText={setTexto} getNextInteraction={getNextInteraction}/>
            </div>
        </div> }
        {game.currentActivity==="SELECT_EVENT"?
        <div className={styles.display}>
            <h2>Select Event:</h2>
            <SelectEvent getNextInteraction={getNextInteraction} request={request}/>
        </div>
        :game.currentActivity==="SELECT_TITLE"?
        <div className={styles.display}>
            <SelectTitle getNextInteraction={getNextInteraction} request={request}/>
        </div>
        :game.currentActivity==="SELECT_LAYOUT"?
        <div className={styles.display}>
            <SelectLayout getNextInteraction={getNextInteraction}/>
        </div>
        :game.currentActivity==="SCORE_SCREEN"?
        <div className={styles.display}>
            <FinishWeek finish={finishWeek} continueGame={continueGame}/>
        </div>:
        <div className={styles.display}>
            <p>What is your name?</p>
            <input type="text" />
        </div>
    }
    </div>
: <Loading/>}
      </div>
    
  )
}