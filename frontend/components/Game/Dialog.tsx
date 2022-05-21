import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type Props = {
    text:{person:string;text:string[]}[];
    setText:any;
    setImg:any;
    // setGame:React.Dispatch<React.SetStateAction<Game>>;
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
export default function Dialog({text, setText,setImg}: Props) {
    const [numDialog, setNumDialog] = useState(0)
    const [person, setPerson] = useState(0)
    const [texto, setTexto] = useState(text[person].text[numDialog])
    const nextText = () =>{
        //Change to next piece of dialog
        if (text[person].text.length == numDialog+1 && person+1==text.length){
            setTexto("");
            setNumDialog(0);
            setPerson(0);
            return setText("closed");
        } else if(text[person].text.length == numDialog+1){
            setPerson((state)=>{setNumDialog(0);return state+1});
        }
        setNumDialog(state=>state+1)
        
    }
    useEffect(() => {
        console.log(text)
        console.log(text[person].text[numDialog])
        setTexto(text[person].text[numDialog]);
        setImg(()=>{
            if(text[person].person==="MANAGING_EDITOR")return({src:"/characters/managingeditor.png", alt:"The newsroom Manging editor", height:724, width:365});
            if(text[person].person==="NEWS_EDITOR")return({src:"/characters/newseditor.png", alt:"The newsroom News editor", height:543, width:654});
            if(text[person].person==="ART_DIRECTOR")return({src:"/characters/artdirector.png", alt:"The newsroom Art director", height:659, width:430});
            if(text[person].person==="REPORTER")return({src:"/characters/reporter.png", alt:"The newsroom reporter", height:676, width:332});
            return({src:"", alt:"", height:0, width:0})
        })
      return () => {
        
      }
    }, [numDialog, person])
    
  return (
    <div>
        <h2>{text[person].person}</h2>
        <p>{texto}</p>
        {text[person].text[numDialog] && <button onClick={nextText}>{text[person].text.length == numDialog+1?"close":"next"}</button>}
    </div>
  )
}