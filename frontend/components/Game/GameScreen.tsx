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
import ToDo from './ToDo'
import { eventDialogs } from '../../data/dialogsNew'
import Newsroom from './Newsroom'

type Props = {
    gameObject:Game;
    setGameObject:React.Dispatch<React.SetStateAction<Game>>;
    setStart:React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GameScreen({gameObject, setGameObject, setStart}: Props) {
    const [texto, setTexto]:any = useState("closed");
    const [gameEvents, setGameEvents]:any = useState();
    const [game, setGame]:any = useState({});
    const [choices, setChoices] = useState({event:[], title:"", template:""})
    const [img, setImg] = useState({src:"", alt:"", height:0, width:0})
    const [currentActivity, setCurrentActivity] = useState("")
    const [todo, setTodo] = useState(true);
    const resetGame = () =>{
        getEventsFromDatabase()
            let week = gameObject.punctuation.length%4===0?3:(gameObject.punctuation.length%4)-1;
            let random = Math.floor(Math.random()*eventDialogs.length);
            let eventDialog = eventDialogs[0] 
            if(gameObject.punctuation.length<1){
                
                setGame({
                    selectEvent: -1,
                    selectTitle: -1,
                    selectLayout: -1,
                    currentEvent: "firstday",
                    eventDialog: eventDialog,
                    currentMoment:"START",
                    week: week
              })
            }else{
                setGame({
                    selectEvent: -1,
                    selectTitle: -1,
                    selectLayout: -1,
                    currentEvent: "firstday",//getRandomEvent
                    eventDialog: eventDialog,
                    currentMoment:"START",
                    week: week
               })
            }
    }
    const finishSelection = (type:string, choice:any) =>{
        setChoices((state)=>{
            return({
                event:type==="event"?choice:state.event,
                title:type==="title"?choice.title:state.title,
                template:type==="template"?choice:state.template
            })
        })
    }
    const getEventsFromDatabase = async()=>{
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/events-and-articles-today`);
          const result = await res.json();  
          const winner = await result[Math.floor(Math.random()*result.length)];
          setGameEvents({result,winner})
        } catch (error) {
            console.log(error);
        }

    }
    // const dialogCheck = (week:number) =>{
    //     if (game.currentActivity==="MANAGING_EDITOR"||game.currentActivity==="NEWS_EDITOR"||game.currentActivity==="ART_DIRECTOR"||game.currentActivity==="REPORTER"||game.currentActivity==="EDITOR_IN_CHIEF"){
    //                setTexto(genDialog(gameObject.tutorial,game.currentMoment,week,game.currentEvent, game.currentActivity, game.currentMoment==="START"?gameObject.punctuation[gameObject.punctuation.length-1]:game.currentMoment==="SELECT_TITLE"?game.selectTitle:game.currentMoment==="SELECT_EVENT"?game.selectEvent:(game.selectEvent+game.selectTitle)/2, gameObject.media))
    //                setImg(()=>{
    //                    if(game.currentActivity==="MANAGING_EDITOR")return({src:"/characters/managingeditor.png", alt:"The newsroom Manging editor", height:724, width:365});
    //                    if(game.currentActivity==="NEWS_EDITOR")return({src:"/characters/newseditor.png", alt:"The newsroom News editor", height:543, width:654});
    //                    if(game.currentActivity==="ART_DIRECTOR")return({src:"/characters/artdirector.png", alt:"The newsroom Art director", height:659, width:430});
    //                    if(game.currentActivity==="REPORTER")return({src:"/characters/reporter.png", alt:"The newsroom reporter", height:676, width:332});
    //                    return({src:"", alt:"", height:0, width:0})
    //                })
    //             } 
    // }
    const checkForAchievements=()=>{
        //Check on gameObject for achievements and activate respective popUps
    }
    const startDialog = (eventDialog:any, event:string) =>{
        let dialog:any[] = []
        eventDialog.dialog[game.currentMoment].map((i:string)=>{
            dialog.push({person:i, text:genDialog(game.currentMoment, event, i )});
        })
        
        if(dialog.length>0)setTexto(dialog);
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
        setCurrentActivity("")
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
        setCurrentActivity("")
        resetGame()
    }

    // const getNextInteraction = (punctuation?:number) =>{
    //     console.log("next Interaction")
    //     const index = game.order.indexOf(game.currentActivity)
    //     if(!punctuation)return(setGame((state:any)=>{
    //         return({
    //             tutorial:state.tutorial,
    //             name: state.name,
    //             punctuation: state.punctuation,
    //             selectEvent: state.selectEvent,
    //             selectTitle: state.selectTitle,
    //             selectLayout: state.selectLayout,
    //             media: state.media,
    //             doneEvents: state.doneEvents,
    //             achievements: state.achievements,
    //             currentEvent: state.currentEvent,
    //             currentActivity: state.order[index+1],
    //             order: state.order.slice(index),
    //             currentMoment: state.currentActivity==="SELECT_EVENT"?"AFTER_EVENT":state.currentActivity==="SELECT_TITLE"?"AFTER_TITLE":state.currentActivity==="SELECT_LAYOUT"?"AFTER_LAYOUT":state.currentMoment
    //         })
    //     }));
    //     setGame((state:any)=>{
    //         return({
    //             name: state.name,
    //             punctuation: state.punctuation,
    //             selectEvent: state.currentActivity==="SELECT_EVENT"?[...state.selectEvent, punctuation]:state.selectEvent,
    //             selectTitle: state.currentActivity==="SELECT_TITLE"?[...state.selectTitle, punctuation]:state.selectTitle,
    //             selectLayout: state.selectLayout,
    //             media: state.media,
    //             doneEvents: state.doneEvents,
    //             achievements: state.achievements,
    //             currentEvent: state.currentEvent,
    //             currentActivity: state.order[index+1],
    //             order: state.order,
    //             currentMoment: state.currentActivity==="SELECT_EVENT"?"AFTER_EVENT":state.currentActivity==="SELECT_TITLE"?"AFTER_TITLE":state.currentActivity==="SELECT_LAYOUT"?"AFTER_LAYOUT":state.currentMoment
    //         })
    //     })
        
    // }

    // useEffect(() => {
    //     console.log("starting useEffect")
    //     getEventsFromDatabase()
    //     let order = getEvent(0).order;
    //     let current = order[0]
    //     let week = gameObject.punctuation.length%4===0?3:(gameObject.punctuation.length%4)-1;
    //   setGame({
    //       selectEvent: -1,
    //       selectTitle: -1,
    //       selectLayout: -1,
    //       currentEvent: getEvent(week).event,
    //       currentActivity:current,
    //       order: order,
    //       currentMoment:"START"
    // })
    //   return () => {
    //   }
    // }, []);

    // useEffect(()=>{
    //     let week = gameObject.punctuation.length%4===0?3:(gameObject.punctuation.length%4)-1;
    //     if(game){
    //        console.log("useEffect is called for dialog")
    //     dialogCheck(week); 
        
    //     }
    //     return () =>{

    //     }
    // }, [game])

    // useEffect(() => {
    //     let week = gameObject.punctuation.length%4===0?3:(gameObject.punctuation.length%4)-1;
    //     let event = getEvent(week)
    //     let order = event.order;
    //     let current = order[week];

    //     setGame({
    //             selectEvent: -1,
    //             selectTitle: -1,
    //             selectLayout: -1,
    //             currentEvent: event.event,
    //             currentActivity:current,
    //             order: order,
    //             currentMoment:"START"
    //         })

    //     checkForAchievements()
    //   return () => {
        
    //   }
    // }, [gameObject])
    const getNextInteraction = (event:string, punctuation:number) =>{

        setGame((state:any)=>{return({
            selectEvent: event==="SELECT_EVENT"?punctuation:state.selectEvent,
            selectTitle: event==="SELECT_TITLE"?punctuation:state.selectTitle,
            selectLayout: event==="SELECT_LAYOUT"?punctuation:state.selectLayout,
            currentEvent: state.currentEvent,
            eventDialog: state.eventDialog,
            currentMoment:event==="SELECT_EVENT"?"AFTER_EVENT":event==="SELECT_TITLE"?"AFTER_TITLE":event==="SELECT_LAYOUT"?"AFTER_LAYOUT":state.currentMoment
        })});
        setCurrentActivity("")
    }
    useEffect(() => {
            resetGame()
    
      return () => {
        
      }
    }, [])
    
    useEffect(() => {
        if(game.eventDialog){
            startDialog(game.eventDialog, game.currentEvent)
        }
        
      return () => {
        
      }
    }, [game.currentMoment])
    
  return (
      <div id={styles.screen}>
{gameEvents ?
    <div >
        {texto!="closed" ?
        <div>
            <div className={styles.person}>
                <div className={styles.img}>
                    {img.src && <Image src={img.src} alt={img.alt} width={img.width} height={img.height}/>}
                </div>
            </div>
            <div className={styles.dialog}>
                <Dialog text={texto} setText={setTexto} setImg={setImg}/>
            </div>
        </div> :
        currentActivity==="SELECT_EVENT"?
        <div className={styles.display}>
            <h2>Select Event:</h2>
            <SelectEvent getNextInteraction={getNextInteraction} gameEvents={gameEvents} choice={choices} finishSelection={finishSelection}/>
        </div>
        :currentActivity==="SELECT_TITLE"?
        <div className={styles.display}>
            <SelectTitle getNextInteraction={getNextInteraction}  gameEvents={gameEvents} choice={choices} finishSelection={finishSelection}/>
        </div>
        :currentActivity==="SELECT_LAYOUT"?
        <div className={styles.display}>
            <SelectLayout getNextInteraction={getNextInteraction} choice={choices} finishSelection={finishSelection}/>
        </div>
        :currentActivity==="SCORE_SCREEN"?
        <div className={styles.display}>
            <FinishWeek finish={finishWeek} continueGame={continueGame} game={game} choices={choices}/>
        </div>:
        <div>
            {todo && <div className={styles.todo}>
                <ToDo name={gameObject.name} obj={{selectEvent: game.selectEvent, selectLayout: game.selectLayout, selectTitle:game.selectTitle}} current={game.currentActivity} setCurrentActivity={setCurrentActivity}/>
            </div>}
            <div className={styles.newsroom}>
                <Newsroom available={game.eventDialog.available[game.currentMoment]} setTodo={setTodo} gameEvents={gameEvents} knowledge={game.eventDialog.knowledge}/>
            </div>
        </div>
        
    }
    </div>
: <Loading/>}
      </div>
    
  )
}