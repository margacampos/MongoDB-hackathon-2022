import { dialogs, eventDialogOrder, Week } from "../data/dialogs";

const genDialog = (tutorial:boolean, type:"START"|"AFTER_EVENT"|"AFTER_TITLE"|"AFTER_LAYOUT", weekNum:number, event:string, person:string, lastWeekPoints:number, media:number) => {
    //Create dialogs for specific sections  
    let arr = dialogs.find(i=>i.person===person);
    if (arr != undefined){
        if (tutorial) {
            let obj = arr.firstWeek.comment.find((i)=>lastWeekPoints<i.score);
            if(!obj)return;
            let comment = obj.comment[type];
            if (!comment)return [...arr.firstWeek.salute, ...arr.firstWeek.event[type], ...arr.firstWeek.goodbye ]
            return [...arr.firstWeek.salute, ...comment, ...arr.firstWeek.event[type], ...arr.firstWeek.goodbye ]
        }
        const weekInfo = arr.weeks[weekNum];
        const salute = getSalute(weekInfo, "salute", type);
        const comment = getComment(weekInfo, type, lastWeekPoints, media);
        const eventText = getEventText(weekInfo, type, event);
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
    let saludo = posDialogs[type][moment];
    if(!saludo)return;
    const ranNum = Math.floor(Math.random()*saludo.length);
    return saludo[ranNum];
}
const getComment = (weekInfo:Week, type:"START"|"AFTER_EVENT"|"AFTER_TITLE"|"AFTER_LAYOUT", lastWeekPoints:number, media?:number) =>{
    let comment = weekInfo.comment.find(i=>lastWeekPoints>i.score);
    if (!comment)return;
    let defaultComment = comment.comment[0].comment[type];
    if(!defaultComment)return;
    if(media){
        const result = comment.comment.find(i=>i.media<media)
        let random1 = Math.round(Math.random()*defaultComment.length-1)
        if(!result) return defaultComment[random1]
        let obj = result.comment[type];
        if (!obj) return defaultComment[random1];
        let random = Math.round(Math.random()*obj.length-1)
        return obj[random];
    }
    return ;
}
const getEventText = (weekInfo:Week, type:"START"|"AFTER_EVENT"|"AFTER_TITLE"|"AFTER_LAYOUT", event:string) =>{
    let result = weekInfo.events.find(i=>i.eventId===event);
    console.log(result)
    if(!result)return;
    let obj = result.dialogs[type];
    if(!obj)return;
    return obj;
}
export {getEvent, genDialog}

