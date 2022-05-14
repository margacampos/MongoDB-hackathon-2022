import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Event from "../components/NewsPaper/Event"
import { genRandomEvent } from "../utils/eventUtils";

const Display: NextPage = () => {
    const Router = useRouter();
    const [event, setEvent] = useState([{name:"", eventCode:"", locations: [], participants:[]}])

    useEffect(() => {
      setEvent(genRandomEvent(1))
      return () => {
        
      }
    }, [])
    
    return (
      <div>
        {event && <Event event={event[0]}/>}
      </div>
    )
  }
  
  export default Display
  