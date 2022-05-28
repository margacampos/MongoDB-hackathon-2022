import React from 'react'
import { Event } from '../../utils/eventUtils';
import Templates from './Templates/Templates';

type Props = {
  getNextInteraction:(event:string, punctuation:number)=>void;
  choice:{event:Event, title:Event, template:string}
  finishSelection:(type:string, choice:any, getPoints:()=>number)=>void;
}

export default function SelectLayout({getNextInteraction, choice, finishSelection}: Props) {
  return (
    <div>
      <Templates title={choice.title.title as string} select={finishSelection} next={getNextInteraction} choice={choice}/>
    </div>
  )
}