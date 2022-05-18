import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Game } from '../Layout';

type Props = {
    text:string[];
    setText:any;
    // setGame:React.Dispatch<React.SetStateAction<Game>>;
    getNextInteraction:(punctuation?:number)=>void;
}
const dialog = [
    [
        "Welcome to the newsroom! I am Gabrielle the managing editor and I just saw your profile and thought you would be perfect for this job",
        "You will be working with Jakub the news editor, Aaliyah the art director and Thomas the reporter on the front page of our newspaper.",
        "Once you have finnished, the editor-in-chief will review your work and judge if it is ready to publish.",
        "Remember, there is a deadline! Let's see if you can handle the pressure!"
    ],
    [
        "Hello, my name is Jakub and I am the news editor.",
        "The first thing we need to do is assign a story for Thomas to cover.",
        "Here I have some of the current events, all you have to do is choose the one you think will fit better this weeks newspaper.",
        "Here is a note with what we are looking for these week. Remember to check it from time to time.",
        "Thomas will be here soon but you don't need to worry, I'll distract him a little bit, just focus on making the best decision.",
        "First weeks can be hard but you will do great, I know it."
    ],
    [
        "Sorry I'm a little late. I forgot you were starting today and got a little carried away talking to Jakub.",
        "I'm Thomas by the way, these team reporter. Welcome to the newsroom!",
        "I would show you arround or something but you know, It is a little late. Do you have the storie I need to cover?",
        "Okay, thanks. It has been a pleasure meeting you! Hope we can talk more some other day!"
    ],
    [
        "Was that Thomas running?",
        "Anyway, welcome to the newsroom. I'm the newspaper art director, Aaliyah.",
        "I was told both of us would be working on the front page today. I have some ideas for how I want it to look but I need to talk to Jakub, have you seen him?",
        "Well If you see him please tell him to give me the title so I can start planning",
        "Also, I am looking forward to working with you. See you!"
    ]
]
export default function Dialog({text, setText, getNextInteraction}: Props) {
    const [numDialog, setNumDialog] = useState(0)
    const [texto, setTexto] = useState(text[numDialog])
    // const nextInteraction=()=>{
    //     const index = gameObject.order.indexOf(gameObject.currentActivity)
    //     setGame((state)=>{
    //         return({
    //             name: state.name,
    //             punctuation: state.punctuation,
    //             selectEvent: state.selectEvent,
    //             selectTitle: state.selectTitle,
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
    const nextText = () =>{
        //Change to next piece of dialog
        if (text.length == numDialog+1){
            getNextInteraction();
            return setText("closed");
        } 
        setNumDialog(state=>state+1)
        
    }
    useEffect(() => {
        setTexto(text[numDialog])
      return () => {
        
      }
    }, [numDialog, text])
    
    
  return (
    <div>
        <p>{texto}</p>
        {text[numDialog] && <button onClick={nextText}>{text.length == numDialog+1?"close":"next"}</button>}
    </div>
  )
}