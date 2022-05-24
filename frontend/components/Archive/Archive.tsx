import { useEffect, useState } from 'react'; 
import Image from 'next/image';
import styles from "../../styles/Newsroom.module.scss"
import { cameoCountryCodes, cameoEventCodes, cameoTypeCodes } from '../../data/cameoCodes';
import Select from './Select';
import Header from '../Header';

export interface IArchiveProps {
}

export default function Archive (props: IArchiveProps) {
    const [objPosition, setObjPosition] = useState("center")
    const [search, setSearch] = useState([])
    const [country, setCountry] = useState({label:"Country", code:""});
    const [actor, setActor] = useState({label:"Actor", code:""});
    const [event, setEvent] = useState({label:"Event", code:""});
    const getEvents = async() =>{
      const res = await fetch("/api/archive-events", {
        method: "POST",
        body: JSON.stringify({eventRootCode:event.code, countryCode:country.code, actorCode:actor.code})
      });
      const events = await res.json()
      setSearch(await events);
    }
    useEffect(() => {
      getEvents()
    
      return () => {
        
      }
    }, [country,actor,event])
    
  return (
    <div>
      <Header title='ARCHIVES'/>
      <div className={styles.selection}>
        <Select title={country.label}>
          <button key={"none"} onClick={()=>setCountry({label:"Country", code:""})}>None</button>
          {cameoCountryCodes.map((i)=><button key={i.code} onClick={()=>setCountry(i)}>{i.label}</button>)}
        </Select>
        <Select title={actor.label}>
          <button key={"none"} onClick={()=>setActor({label:"Actor", code:""})}>None</button>
          {cameoTypeCodes.map((i)=><button key={i.code} onClick={()=>setActor(i)}>{i.label}</button>)}
        </Select>
        <Select title={event.label}>
          <button key={"none"} onClick={()=>setActor({label:"Event", code:""})}>None</button>
          {cameoEventCodes.map((i)=><button key={i.rootCode} onClick={()=>setEvent({label:i.label.toLowerCase(), code:i.rootCode})}>{i.label.toLowerCase()}</button>)}
        </Select>
      </div>
      {search!=[] && search.map((i, index)=><p key={index}>{i.title}</p>)}
     
    </div>
  );
}
