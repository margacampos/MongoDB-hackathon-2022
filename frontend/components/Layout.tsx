import * as React from 'react';
import Achievements from './Game/Achievements';
import GameScreen from './Game/GameScreen';
import Loading from './Loading';
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
  achievements: any;
  currentEvent: string;
  currentActivity:string;
  order: string[];
  currentMoment: any;
}
export default function Layout (props: ILayoutProps) {
  const [loading, setLoading] = React.useState(true);
  const [game, setGame]:[Game,React.Dispatch<React.SetStateAction<Game>>] = React.useState({
    name: "",
    punctuation: [0],
    selectEvent:[0],
    selectTitle:[0],
    media: 0,
    doneEvents:[""],
    achievements: [],
    //Event happening on dialog
    currentEvent: "firstweek",
    order:[""],
    //Name of activity as seen in order
    currentActivity:"",
    //Moment in which we are playing
    currentMoment:"START"
})
React.useEffect(() => {
  console.log("layout")
  setLoading(false)
  return () => {
    
  }
}, [])

  return (
    <div>
      { !loading?
      <div>
        <SettingsButton/>
        <Achievements achieved={game.achievements}/>
        <GameScreen gameObject={game} setGameObject={setGame}/>
      {props.children}
      </div>  
    :<Loading/>}
    </div>
  );
}
