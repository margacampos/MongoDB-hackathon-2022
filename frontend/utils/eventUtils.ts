import { cameoCountryCodes, cameoEventCodes, cameoTypeCodes } from "../data/cameoCodes"
interface Event{
    eventCode:string;
    location1?:string;
    location2?:string;
    actor1?:string;
    actor2?:string;
}
export interface EventByLocAct{
    name:string;
    eventCode:string;
    locations:{type:string;value:string;}[];
    participants:{type:string;value:string;}[];
}
const genRandomEvent = (number:number) =>{
    let events = []
    //loop for number of events required
    for (let i=0;i<number;i++){
        //Properties available for the event
        let properties =[{name:"location1", type:"location"}, {name:"location2", type:"location"}, {name:"actor1", type:"actor"}, {name:"actor2", type:"actor"}]
        //Initiate the event
        let event:any = {
            eventCode:getRandomEvCode()
        }
        //Number of properties we will be setting
        const numProperties = Math.round(Math.random()*(properties.length-1))
        for (let j=0;j<numProperties;j++){
            let ranProp = Math.round(Math.random()*(properties.length-1))
            event[properties[ranProp].name] = getRandomProperty(properties[ranProp].type)
            properties.splice(ranProp, 1)
        }
        events.push(event)
    }
    return events;
}
const organizeByLocAndAct = (event:Event) =>{
    let ev:EventByLocAct = {
        name: getEventName(event),
        eventCode: event.eventCode,
        participants: [],
        locations: []
    }
    Object.keys(event).forEach((i)=>{
    let value = event[i as keyof typeof event]
    if(value){
            if (i=="actor1"||i=="actor2")ev.participants.push({type:i, value:value})
            if(i=="location1"||i=="location2")ev.locations.push({type:i, value:value})
        }  
    })
    return ev
}
const getEventName = (event:Event) =>{
  let eventTitle ="",actor1,actor2,eventText;

  if(event.actor1){
      actor1=getActorCodeLabel(event.actor1);
      let location
      if(event.location1)location=getLocCodeLabel(event.location1)
      eventTitle+=`${actor1==="error"?"":actor1} ${event.location1?`from ${location && location} `:""}`
    }else if (event.location1){
        let location=getLocCodeLabel(event.location1)
        eventTitle+=`${location} `
    }
  if(event.eventCode){
      eventText=getEventCodeLabel(event.eventCode);
      eventTitle+=`${eventText.label==="error"?"":`${eventText.decor}`}`
    }
  if(event.actor2){
      let location
      if(event.location2)location=getLocCodeLabel(event.location2)
      actor2=getActorCodeLabel(event.actor2);
      eventTitle+=`${eventText?.follow?eventText.follow==="none"?"":` ${eventText.follow}`:" to"} the ${actor2==="error"?"":actor2}${event.location2?` from ${location}`:""}`
    }else if (event.location2){
        let location=getLocCodeLabel(event.location2)
        eventTitle+=` in ${location}`
    }
  if(eventText?.label==="error"||eventText?.label===undefined)return "Could not find event code";
  return eventTitle.charAt(0).toUpperCase()+eventTitle.slice(1)+".";
}

const getEventCodeLabel = (event:string) =>{
  //Variables
  let rootCode = event.slice(0,2);
  let rootCode2;

  if(event.length>3)rootCode2=event.slice(0,3);

  //first for loop for matching rootCodes
    for(let i=0;i<cameoEventCodes.length;i++){
        if(cameoEventCodes[i].rootCode===rootCode){

            //Second for loop for searching through the codes
            for(let j=0;j<cameoEventCodes[i].codes.length;j++){
                let second = cameoEventCodes[i].codes[j]
                //If the code has nested codes rootCode exists and the property codes is an array
                if(rootCode2 && second.codes?.length && rootCode2===second.code && typeof second.codes !== "undefined"){
                    //Loops through codes array for matching code
                    for(let k=0;k<second.codes?.length;k++){
                        if(second.codes[k].code && second.codes[k].code===event) return second.codes[k];
                    }
                //If it does not have nested codes, looks for the matching code
                }else if(second.code===event)return second;
            }
        }
    }
  //There was no matching code, it returns an error object with type Code;
  return {label:"error", decor:"", code:"404"};
}
const getActorCodeLabel = (event:string) =>{
    for(let i=0;i<cameoTypeCodes.length;i++){
        if(cameoTypeCodes[i].code===event){
            return cameoTypeCodes[i].label
        };
    }
    return "error"
}
const getLocCodeLabel = (event:string) => {
    for(let i=0;i<cameoCountryCodes.length;i++){
        if(cameoCountryCodes[i].code===event){
            return cameoCountryCodes[i].label
        };
    }
    return "error"
}
const getRandomEvCode = () =>{
    const ranRoot = Math.round(Math.random()*(cameoEventCodes.length-1))
    const ev1 = Math.round(Math.random()*(cameoEventCodes[ranRoot].codes.length-1))
    var keys = Object.keys(cameoEventCodes[ranRoot].codes[ev1]);
    let obj = cameoEventCodes[ranRoot].codes[ev1].codes
    if (keys.includes("codes") && typeof obj !== "undefined"){
        const ev2 = Math.round(Math.random()*(obj.length-1))
        return obj[ev2].code
    }
    return cameoEventCodes[ranRoot].codes[ev1].code;
}
const getRandomProperty = (prop:string) =>{
    if (prop==="location"){
        return cameoCountryCodes[Math.round(Math.random()*(cameoTypeCodes.length-1))].code
    }else if(prop==="actor"){
        return cameoTypeCodes[Math.round(Math.random()*(cameoTypeCodes.length-1))].code
    }
    return "";
}
export {getEventName, genRandomEvent, getActorCodeLabel,getLocCodeLabel, getEventCodeLabel, organizeByLocAndAct};