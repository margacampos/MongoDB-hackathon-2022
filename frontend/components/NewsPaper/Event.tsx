import React, { useState } from 'react'
import { genRandomEvent } from '../../utils/eventUtils';

type Props = {
    event:{
        name:string;
        eventCode:string;
        locations?:string[];
        participants?:string[];
    }
}

export default function Event({event}: Props) {
  return (
    <div>
        <h2>Event: {event.name}</h2>
        <div>
            <h3>In this event...</h3>
            {event.participants && <p>Actors: {event.participants?.map(i=>i)}</p>}
            {event.locations && <p>Countries: {event.locations?.map(i=>i)}</p>}
            <p>Action: {event.eventCode}</p>
        </div>
    </div>
  )
}