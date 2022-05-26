import { useEffect, useState } from 'react'
import styles from "../../styles/Game.module.scss"
// import { genRandomEvent } from '../../utils/eventUtils'
import {  genDialog,  } from '../../utils/gameUtils'
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
import { AnimatePresence, motion } from 'framer-motion'
import { valueD, valueI, valueP, variants } from '../../utils/newsUtils'
import Ask from './Ask'
import Archive from '../Archive/Archive'
import CloseButton from '../CloseButton'

type Props = {
    gameObject:Game;
    setGameObject:React.Dispatch<React.SetStateAction<Game>>;
    setStart:React.Dispatch<React.SetStateAction<boolean>>;
}
type GameType = {
    currentMoment:"START"|"AFTER_EVENT"|"AFTER_TITLE"|"AFTER_LAYOUT";
    selectEvent:number;
    selectTitle:number;
    selectLayout:number;
    currentEvent:string;
    eventDialog:any;
    week:number;
}

export default function GameScreen({gameObject, setGameObject, setStart}: Props) {
    const [done, setDone] = useState({START:false, AFTER_EVENT:false, AFTER_TITLE:false, AFTER_LAYOUT:false});
    const [person, setPerson] = useState("");
    const [texto, setTexto]:any = useState("closed");
    const [gameEvents, setGameEvents]:any = useState();
    const [game, setGame]:[any,React.Dispatch<React.SetStateAction<any>>] = useState(
        {
            currentMoment:"START", 
            currentEvent:"",
            selectEvent:-1,
            selectTitle:-1,
            selectLayout:-1,
            week:0
        }
        );
    const [when, setWhen] = useState("START")
    const [choices, setChoices] = useState({event:{SourceURL:"", eventCode:""}, title:"", template:""})
    const [img, setImg] = useState({src:"", alt:"", height:0, width:0})
    const [currentActivity, setCurrentActivity] = useState("")
    const [todo, setTodo] = useState(true);
    const [type, setType] =useState("NOTHING");
    const resetGame = () =>{
        getEventsFromDatabase()
            let week = gameObject.punctuation.length%4===0?3:(gameObject.punctuation.length%4)-1;
            let random = Math.floor(Math.random()*(eventDialogs.length-1))+1;
            let eventDialog = eventDialogs[random] 
            if(gameObject.tutorial){
                
                setGame({
                    selectEvent: -1,
                    selectTitle: -1,
                    selectLayout: -1,
                    currentEvent: "firstday",
                    eventDialog: eventDialogs[0],
                    currentMoment:"START",
                    week: week
              })
            }else{
                setGame({
                    selectEvent: -1,
                    selectTitle: -1,
                    selectLayout: -1,
                    currentEvent: eventDialog.event,//getRandomEvent
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
    const startOnClickDialog = (eventDialog:any, event:string, person:string) =>{
        let dialog:any[] = [];
        eventDialog.dialog[game.currentMoment].map((i:string)=>{
            if(i==person)dialog.push({person:i, text:genDialog(game.currentMoment, event, i, "ONCLICK" )});
        });
        setWhen("ONCLICK")
        if(dialog.length>0)setTexto(dialog);
        else setPerson(person);
    }
    const startDialog = (eventDialog:any, event:string) =>{
        let dialog:any[] = [];
        eventDialog.dialog[game.currentMoment].map((i:string)=>{
            let text = genDialog(game.currentMoment, event, i, "AFTEREVENT" );
            if(text[0]!="")dialog.push({person:i, text:text});
        });
        setWhen("AFTEREVENT");
        if(dialog.length>0){
            setTexto(dialog);
            setDone((state)=>{
                return(
                    {
                     START:game.currentMoment==="START"?true:state.START,
                     AFTER_EVENT:game.currentMoment==="AFTER_EVENT"?true:state.AFTER_EVENT,
                     AFTER_TITLE:game.currentMoment==="AFTER_TITLE"?true:state.AFTER_TITLE,
                     AFTER_LAYOUT:game.currentMoment==="AFTER_LAYOUT"?true:state.AFTER_LAYOUT
                    }
                )
            });
        }
    }
    const updateGameObject = (tutorial:boolean, selectTitle:number, selectEvent:number, punctuation:number) =>{
        if(tutorial){
            setGameObject((state)=>{
                return({
                    name: state.name,
                    selectTitle: [selectTitle],
                    selectEvent: [selectEvent],
                    punctuation: [punctuation],
                    media: punctuation,
                    doneEvents: [game.currentEvent],
                    achievements: state.achievements,
                    tutorial:false
                })
            })
        }else{
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
    }
    const finishWeek = (selectTitle:number, selectEvent:number, punctuation:number, type:"FINISH"|"CONTINUE") =>{
        //Quit game
        setType(type);
        updateGameObject(gameObject.tutorial, selectTitle, selectEvent, punctuation);
        setCurrentActivity("");
    }

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
        if(game.eventDialog && !done[game.currentMoment as "START"|"AFTER_EVENT"|"AFTER_TITLE"|"AFTER_LAYOUT"]){
            startDialog(game.eventDialog, game.currentEvent)
        }
        
      return () => {
        
      }
    }, [game])

    useEffect(() => {
        console.log(gameObject)
        if(type==="FINISH"){
            setStart(false)
            setType("NOTHING")
        } else if(type==="CONTINUE"){
            resetGame()
            setType("NOTHING")
        }
      
      return () => {
        
      }
    }, [gameObject])
    
    
  return (
      <div id={styles.screen}>
{gameEvents ?
    <div >
        <CloseButton close={setStart}/>
        <AnimatePresence >
        {texto!="closed" || person!="" ?
        <motion.div
        key="dialog"
        custom={valueP}
        variants={variants}
        initial={{
            opacity:0,
        }}
        animate="center"
        exit="exit"
        >
            <div className={styles.person}>
                <AnimatePresence exitBeforeEnter={true} initial={false}>
                {img.src!="" && <motion.div
                key={img.src}
                custom={valueI}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className={styles.img}>
                    <Image src={img.src} alt={img.alt} width={img.width} height={img.height}/>
                </motion.div>}
                </AnimatePresence>
            </div>
            <AnimatePresence exitBeforeEnter={true}>
                {person && <Ask person={person} setPerson={setPerson} setImg={setImg} gameEvents={gameEvents} knowledge={game.eventDialog.knowledge} setText={setTexto}/>}
                {texto !="closed" && <Dialog text={texto} setPerson={setPerson} setText={setTexto} setImg={setImg} when={when}/>}
            </AnimatePresence>
        </motion.div> :
        currentActivity==="SELECT_EVENT"?
        <motion.div
        key="SELECT_EVENT"
        variants={variants}
        custom={valueP}
        initial="enter"
        animate="center"
        exit="exit"
        className={styles.display}>
            <h2>Select Event:</h2>
            <SelectEvent getNextInteraction={getNextInteraction} gameEvents={gameEvents} choice={choices} finishSelection={finishSelection}/>
        </motion.div>
        :currentActivity==="SELECT_TITLE"?
        <motion.div 
        key="SELECT_TITLE"
        variants={variants}
        custom={valueP}
        initial="enter"
        animate="center"
        exit="exit"
        className={styles.display}>
            <SelectTitle getNextInteraction={getNextInteraction}  gameEvents={gameEvents} choice={choices} finishSelection={finishSelection}/>
        </motion.div>
        :currentActivity==="SELECT_LAYOUT"?
        <motion.div 
        key="SELECT_LAYOUT"
        variants={variants}
        custom={valueP}
        initial="enter"
        animate="center"
        exit="exit"
        className={styles.display}>
            <h2>Select a design:</h2>
            <SelectLayout getNextInteraction={getNextInteraction} choice={choices} finishSelection={finishSelection}/>
        </motion.div>
        :currentActivity==="SCORE_SCREEN"?
        <motion.div
        key="SCORE_SCREEN"
        variants={variants}
        custom={valueP}
        initial="enter"
        animate="center"
        exit="exit"
        className={styles.display}>
            <FinishWeek finish={finishWeek} game={game} choices={choices}/>
        </motion.div>
        :currentActivity==="ARCHIVES"?
        <motion.div
        key="ARCHIVES"
        variants={variants}
        custom={valueP}
        initial="enter"
        animate="center"
        exit="exit"
        className={styles.display}>
            <Archive setCurrentActivity={setCurrentActivity}/>
        </motion.div>
        :<motion.div
        key="TODO"
        variants={variants}
        custom={valueP}
        initial="enter"
        animate="center"
        exit="exit"
        style={{position:"inherit", height:"100vh", width:"100vw"}}>
            {todo && <div className={styles.todo} style={{zIndex:11}}>
                <ToDo name={gameObject.name} obj={{selectEvent: game.selectEvent, selectLayout: game.selectLayout, selectTitle:game.selectTitle}} setCurrentActivity={setCurrentActivity}/>
            </div>}
            <div className={styles.newsroom}>
                <Newsroom setCurrentActivity={setCurrentActivity} startDialog={startOnClickDialog} available={game.eventDialog.available[game.currentMoment]} setTodo={setTodo} eventDialog={game.eventDialog} event={game.currentEvent} setPerson={setPerson} person={person}/>
            </div>
        </motion.div>
        
    }
        </AnimatePresence>
        
    </div>
: <Loading/>}
      </div>
    
  )
}