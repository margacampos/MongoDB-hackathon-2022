import * as React from 'react';
import { getEventName } from '../utils/eventUtils';

export interface IEventGeneratorProps {
}

export default function EventGenerator (props: IEventGeneratorProps) {
    const [event, setEvent] = React.useState([""])
    const [eventCode, setEventCode] = React.useState("");
    const [location1, setLocation1] = React.useState("");
    const [location2, setLocation2] = React.useState("");
    const [actor1, setActor1] = React.useState("");
    const [actor2, setActor2] = React.useState("");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>,set:React.Dispatch<React.SetStateAction<string>>) =>{
          set(e.target.value);
        }
    const getEvent =async()=>{
        // console.log("called")
        try {
            const res = await fetch("http://localhost:3000/api/events-and-articles-today");
            const event:{eventCode:string}[] = await res.json();
            event.map((i)=>{
                setEvent((state)=>[...state, getEventName(i)])
            });
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <label htmlFor="actor1">
            Actor1:
            <input type="text" value={actor1} onChange={(e)=>handleChange(e,setActor1)} name="actor1"/>
        </label>
        <label htmlFor="eventCode">
            Eventcode:
            <input type="text" value={eventCode} onChange={(e)=>handleChange(e,setEventCode)} name="eventCode"/>
        </label>
        <label htmlFor="actor2">
            Actor2:
            <input type="text" value={actor2} onChange={(e)=>handleChange(e,setActor2)} name="actor2"/>
        </label>
        <label htmlFor="location1">
            Location:
            <input type="text" value={location1} onChange={(e)=>handleChange(e,setLocation1)} name="location1"/>
        </label>
        <label htmlFor="location2">
            Location:
            <input type="text" value={location2} onChange={(e)=>handleChange(e,setLocation2)} name="location2"/>
        </label>
        <button onClick={()=>setEvent([getEventName({eventCode, location1, location2, actor1, actor2})])}>Generate event</button>
        <button onClick={getEvent}>Get 06/04/2022 best event</button>
        {event!=[""]&&event.map((i,index)=><p key={index}>{i}</p>)}
    </div>
  );
}
