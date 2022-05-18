import * as React from 'react';
import Achievements from './Game/Achievements';
import SettingsButton from './settings/SettingsButton';

export interface ILayoutProps {
    children:any;
}
export interface Game{
  name: string;
  punctuation: number[];
  media: number;
  doneEvents: string[];
  achievements: string[];
  currentEvent: string;
  order: string[];
  currentMoment: string;
}
export default function Layout (props: ILayoutProps) {
  const [game, setGame]:[Game,React.Dispatch<React.SetStateAction<Game>>] = React.useState({
    name: "",
    punctuation: [0],
    media: 0,
    doneEvents:[""],
    achievements: [""],
    currentEvent: "firstweek",
    order:[""],
    currentMoment:"start"
})
  return (
    <div>
        <SettingsButton/>
        <Achievements achieved={game.achievements}/>
      {props.children}
    </div>
  );
}
