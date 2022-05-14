import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Event from "../components/NewsPaper/Event"
import { genRandomEvent } from "../utils/eventUtils";

const Display: NextPage = () => {
    const Router = useRouter();
    const [event, setEvent] = useState(genRandomEvent(3))
    
    return (
      <div className={styles.display}>
        {event && event.map((i,index)=><Event key={index} event={i}/>) }
      </div>
    )
  }
  
  export default Display
  