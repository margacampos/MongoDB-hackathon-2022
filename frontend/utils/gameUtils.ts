import { dialogs, eventDialogOrder, Week } from "../data/dialogs";
import { clueDialogs, simpleDialogs, simpleOnClickDialogs } from "../data/dialogsNew";
import { getActorCodeLabel, getEventCodeLabel, getLocCodeLabel } from "./eventUtils";


const genDialog =( type:"START"|"AFTER_EVENT"|"AFTER_TITLE"|"AFTER_LAYOUT", event:string, person:string, when:"ONCLICK"|"AFTEREVENT")=>{
    let dialogs;
    if(when==="ONCLICK")dialogs=simpleOnClickDialogs;
    else dialogs=simpleDialogs;
    if(dialogs===undefined)return[""];
    let arr = dialogs.find(i=>i.person===person);
    if(!arr)return [""];
    for(let i=0;i<arr.event.length;i++){
        if(arr.event[i].eventId===event){
            let obj = arr.event[i].dialogs
            if(type in obj)return obj[type]
        }
    }  
    return [""]
}
const getEvent = (weekNum:number, lastWeekPoints?:number, media?:number) => {
    const weekArr = eventDialogOrder.filter(i=>i.week===weekNum-1)
    const ranNum = Math.floor(Math.random()*weekArr.length);
    return weekArr[ranNum];
}
// const getSalute = (posDialogs:Week, type:"salute"|"goodbye",moment:"START"|"AFTER_EVENT"|"AFTER_TITLE"|"AFTER_LAYOUT") =>{
//     //Get saludo
//     let saludo = posDialogs[type][moment];
//     if(!saludo)return;
//     const ranNum = Math.floor(Math.random()*saludo.length);
//     return saludo[ranNum];
// }
const getComment = (weekInfo:Week, type:"START"|"AFTER_EVENT"|"AFTER_TITLE"|"AFTER_LAYOUT", lastWeekPoints:number, media?:number) =>{
    let comment = weekInfo.comment.find(i=>lastWeekPoints>=i.score);
    if (!comment)return;
    let defaultComment = comment.comment[0].comment[type];
    if(!defaultComment)return;
    let random1 = Math.round(Math.random()*(defaultComment.length-1))
    if(media!=undefined){
        const result = comment.comment.find(i=>i.media<=media)
        if(!result) return defaultComment[random1]
        let obj = result.comment[type];
        if (!obj) return defaultComment[random1];
        let random = Math.round(Math.random()*(obj.length-1))
        return obj[random];
    }
    return defaultComment[random1];
}
const getEventText = (weekInfo:Week, type:"START"|"AFTER_EVENT"|"AFTER_TITLE"|"AFTER_LAYOUT", event:string) =>{
    let result = weekInfo.events.find(i=>i.eventId===event);
    if(!result)return;
    let obj = result.dialogs[type];
    if(!obj)return;
    return obj;
}
// const genDialog1 = (tutorial:boolean, type:"START"|"AFTER_EVENT"|"AFTER_TITLE"|"AFTER_LAYOUT", weekNum:number, event:string, person:string, lastWeekPoints:number, media:number) => {
//     //Create dialogs for specific sections  
//     let arr = simpleDialogs.find(i=>i.person===person);
//     if (arr != undefined){
//         if (tutorial) {
//             // let obj = arr.firstWeek.comment.find((i)=>lastWeekPoints<i.score);
//             // if(!obj)return;
//             return [ ...arr.firstWeek.event[type] ];
//             // let comment = obj.comment[type];
//             // if (!comment)return 
//             // return [ ...comment, ...arr.firstWeek.event[type] ]
//             // if (!comment)return [...arr.firstWeek.salute, ...arr.firstWeek.event[type], ...arr.firstWeek.goodbye ]
//             // return [...arr.firstWeek.salute, ...comment, ...arr.firstWeek.event[type], ...arr.firstWeek.goodbye ]
//         }
//         const weekInfo = arr.weeks[weekNum];
//         // const salute = getSalute(weekInfo, "salute", type);
//         // const comment = getComment(weekInfo, type, lastWeekPoints, media);
//         const eventText = getEventText(weekInfo, type, event);
//         // const goodbye = getSalute(weekInfo, "goodbye", type)
//         let d:string[] = []
        
//         // if(salute) d = [...d, ...salute];
//         // if(comment) d = [...d, ...comment];
//         if(eventText) d = [...d, ...eventText];
//         // if(goodbye) d = [...d, ...goodbye];
//         return d;
//     }else return "error";
// }
const getClueDialog = (person:string, type:"location"|"actor"|"eventCode", winner:any, knowledge:any) =>{
    
    let dialog = clueDialogs.find((i)=>i.person===person);
    let word="error";
    if(dialog){
        let random = Math.floor(Math.random()*dialog.text[type].dontknow.length)
        if(type === knowledge[person].type){
    if(type=="eventCode"){
        word = getEventCodeLabel(winner[type]).label;
    }else if(type=="actor"){ 
        if(winner.actor1){
            word=getActorCodeLabel(winner.actor1);
            if(word==="error")word = getActorCodeLabel(winner.actor2);
        }else if(winner.actor2){
            word=getActorCodeLabel(winner.actor2);
        }
        
    }else if(type=="location"){
        if(winner.location1){
            word=getLocCodeLabel(winner.location1);
            if(word==="error")word = getLocCodeLabel(winner.location2);
        }else if(winner.location2){
            word=getLocCodeLabel(winner.location2);
        }
    }
        let text;
        if(word==="error")text=dialog.text[type].dontknow[random];
        else text =dialog.text[type].knows[knowledge[person].knowledge];
        
        text.map((i, index)=>{
            if(/[$]/i.test(i)){
              let newWord = i.replace(/[$]/,word);
              text[index]=newWord;
            }
        })
        return text;
    
    }else{
        return dialog.text[type].dontknow[random]
    }
}
    return [""];
}
const arrangeTitle = (title:string, setDisplayTitle:any) =>{
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
const formatDate = (date:number) =>{
    let stringDate = date.toString();
    let str = `${stringDate.slice(0,4)}-${stringDate.slice(4,6)}-${stringDate.slice(6,8)}`
    let dateToFormat = new Date(str);
    console.log(stringDate, str, dateToFormat)
    const options:{
        weekday: "long";
        year: "numeric" | "2-digit" | undefined;
        month: "long" | "short" | "narrow" | "numeric" | "2-digit"| undefined;
        day: "numeric" | "2-digit" | undefined;
    } = {weekday: "long", year: 'numeric', month: 'long', day: 'numeric' }
    return dateToFormat.toLocaleDateString("en-GB",options)
}
export {getEvent, genDialog, getClueDialog, arrangeTitle, formatDate}

