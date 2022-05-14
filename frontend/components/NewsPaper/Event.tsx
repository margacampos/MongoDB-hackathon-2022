import React, { useEffect, useState } from 'react'
import { EventByLocAct, genRandomEvent, getActorCodeLabel, getEventCodeLabel, getEventName, getLocCodeLabel, organizeByLocAndAct } from '../../utils/eventUtils';

type Props = {
    event:EventByLocAct;
}

export default function Event({event}: Props) {
  const [ev, setEvent]:[any, React.Dispatch<React.SetStateAction<any>>] = useState()
  useEffect(() => {
    setEvent(organizeByLocAndAct(event))
  
    return () => {
      
    }
  }, [])
  
  return (
    <div>
        <h2>Event: {ev && ev.name}</h2>
        <div>
            <h3>In this event...</h3>
            {ev && ev.participants[0] && <p>Actors: {ev.participants?.map((i:{value:string},index:number)=>index==0?getActorCodeLabel(i.value):` and ${getLocCodeLabel(i.value)}`)}</p>}
            {ev && ev.locations[0] && <p>Countries: {ev.locations?.map((i:{value:string},index:number)=>index==0?getLocCodeLabel(i.value):` and ${getLocCodeLabel(i.value)}`)}</p>}
            <p>Action: {ev && getEventCodeLabel(ev.eventCode).label}</p>
        </div>
    </div>
  )
}


