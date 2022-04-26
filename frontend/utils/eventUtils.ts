import { cameoEventCodes, cameoTypeCodes } from "../data/cameoCodes"
interface Event{
    eventCode:string;
    location:string;
    actor1:string;
    actor2:string;
}
const getEventName = (event:Event) =>{
  let eventTitle ="",actor1,actor2,eventText;

  if(event.actor1){actor1=getActorCodeLabel(event.actor1);eventTitle+=`The ${actor1==="error"?"":actor1} `}
  if(event.eventCode){eventText=getEventCodeLabel(event.eventCode);eventTitle+=`${eventText.label==="error"?"":`${eventText.decor}`}`}
  if(event.actor2){actor2=getActorCodeLabel(event.actor2);eventTitle+=`${eventText?.follow?eventText.follow==="none"?"":` ${eventText.follow}`:" to"} the ${actor2==="error"?"":actor2}`}
  if(event.location){eventTitle+=` in ${event.location}`}
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
    console.log("error")
    return "error"
}

export {getEventName};