import { useState } from 'react'; 
import Image from 'next/image';
import styles from "../../styles/Newsroom.module.scss"
import { cameoCountryCodes, cameoEventCodes, cameoTypeCodes } from '../../data/cameoCodes';
import Select from './Select';

export interface IArchiveProps {
}

export default function Archive (props: IArchiveProps) {
    const [objPosition, setObjPosition] = useState("center")
    const [country, setCountry] = useState({label:"Country", code:""});
    const [actor, setActor] = useState({label:"Actor", code:""});
    const [event, setEvent] = useState({label:"Event", code:""});
  return (
    <div>
      <Select title={country.label}>
      {cameoCountryCodes.map((i)=><button key={i.code} onClick={()=>setCountry(i)}>{i.label}</button>)}
      </Select>
      <Select title={actor.label}>
      {cameoTypeCodes.map((i)=><button key={i.code} onClick={()=>setActor(i)}>{i.label}</button>)}
      </Select>
      <Select title={event.label}>
      {cameoEventCodes.map((i)=><button key={i.rootCode} onClick={()=>setEvent({label:i.label.toLowerCase(), code:i.rootCode})}>{i.label.toLowerCase()}</button>)}
      </Select>
     
    </div>
  );
}
