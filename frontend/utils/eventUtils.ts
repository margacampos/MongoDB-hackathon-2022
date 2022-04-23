import { cameoEventCodes, cameoTypeCodes } from "../data/cameoCodes"
interface Event{
    eventCode:string;
    location:string;
    actor1:string;
    actor2:string;
}
const getEventName = (event:Event) =>{
  let eventTitle =``,actor1,actor2,eventText;

  if(event.actor1){actor1=getActorCodeLabel(event.actor1);eventTitle+=`The ${actor1==="error"?"":actor1}`}
  if(event.eventCode){eventText=getEventCodeLabel(event.eventCode);eventTitle+=` ${eventText==="error"?"":eventText}`}
  if(event.actor2){actor2=getActorCodeLabel(event.actor2);eventTitle+=` to the ${actor2==="error"?"":actor2}`}
  if(event.location){eventTitle+=` in ${event.location}`}
  
  return eventTitle+=".";
}

const getEventCodeLabel = (event:string) =>{
  let rootCode = event.slice(0,2);
  let rootCode2;
  if(event.length>3)rootCode2=event.slice(0,3);
    for(let i=0;i<cameoEventCodes.length;i++){
        if(cameoEventCodes[i].rootCode===rootCode){
            for(let j=0;j<cameoEventCodes[i].codes.length;j++){
                if(cameoEventCodes[i].codes[j].rootCode!=undefined&&cameoEventCodes[i].codes[j].rootCode===rootCode2){
                    for(let k=0;k<cameoEventCodes[i].codes[j].codes.length;k++){
                        if(cameoEventCodes[i].codes[j].codes[k].code===event.eventCode){return cameoEventCodes[i].codes[j].codes[k].label};
                    }
                }
                if(cameoEventCodes[i].codes[j].code&&cameoEventCodes[i].codes[j].code===event){return cameoEventCodes[i].codes[j].label};
            }
        }
    }
  return "error";
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