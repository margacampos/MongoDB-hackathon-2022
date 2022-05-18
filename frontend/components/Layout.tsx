import * as React from 'react';
import Achievements from './Game/Achievements';
import SettingsButton from './settings/SettingsButton';

export interface ILayoutProps {
    children:any;
}
export interface Game{
  name: string;
  punctuation: number[];
  selectEvent:number[];
  selectTitle:number[];
  media: number;
  doneEvents: string[];
  achievements: string[];
  currentEvent: string;
  currentActivity:string;
  order: string[];
  currentMoment: string;
}
export default function Layout (props: ILayoutProps) {
  const [game, setGame]:[Game,React.Dispatch<React.SetStateAction<Game>>] = React.useState({
    name: "",
    punctuation: [0],
    selectEvent:[0],
    selectTitle:[0],
    media: 0,
    doneEvents:[""],
    achievements: [""],
    //Event happening on dialog
    currentEvent: "firstweek",
    order:[""],
    //Name of activity as seen in order
    currentActivity:"MANAGING_EDITOR",
    //Moment in which we are playing
    currentMoment:"START"
})
  return (
    <div>
        <SettingsButton/>
        <Achievements achieved={game.achievements}/>
      {props.children}
    </div>
  );
}
