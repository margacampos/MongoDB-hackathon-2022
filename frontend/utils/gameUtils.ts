import { dialogs, eventDialogOrder, Week } from "../data/dialogs";

const genDialog = (type:"START"|"AFTER_EVENT"|"AFTER_TITLE"|"AFTER_LAYOUT", weekNum:number, event:string, person:string, lastWeekPoints:number, media:number) => {
    //Create dialogs for specific sections  
    let arr = dialogs.find(i=>i.person===person);
    if (arr != undefined){
        const weekInfo = arr.weeks[weekNum];
        const salute = getSalute(weekInfo, "salute", type);
        const comment = getComment(weekInfo, lastWeekPoints, media);
        const eventText = getEventText(weekInfo, event);
        const goodbye = getSalute(weekInfo, "goodbye", type)
        let d:string[] = []
        if(salute) d = [...d, ...salute];
        if(comment) d = [...d, ...comment];
        if(eventText) d = [...d, ...eventText];
        if(goodbye) d = [...d, ...goodbye];
        return d;
    }else return "error";
}

const getEvent = (weekNum:number, lastWeekPoints?:number, media?:number) => {
    const weekArr = eventDialogOrder.filter(i=>i.week===weekNum-1)
    const ranNum = Math.floor(Math.random()*weekArr.length);
    return weekArr[ranNum];
}
const getSalute = (posDialogs:Week, type:"salute"|"goodbye",moment:"START"|"AFTER_EVENT"|"AFTER_TITLE"|"AFTER_LAYOUT") =>{
    //Get saludo
    const ranNum = Math.floor(Math.random()*posDialogs[type][moment].length);
    return posDialogs[type][moment][ranNum];
}
const getComment = (weekInfo:Week, lastWeekPoints:number, media?:number) =>{
    let comment = weekInfo.comment.find(i=>lastWeekPoints>i.score);
    if (!comment)return;
    if(media){
        const result = comment.comment.find(i=>i.media<media)
        if(!result) return comment.comment[0].comment
        return result.comment
    }
    return comment.comment[0].comment
}
const getEventText = (weekInfo:Week, event:string) =>{
    let result = weekInfo.events.find(i=>i.eventId===event);
    console.log(result)
    if(!result)return;
    return result.dialogs;
}
export {getEvent, genDialog}

