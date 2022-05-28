import { AnimatePresence } from 'framer-motion';
import * as React from 'react';
import Achievements from './Game/Achievements';
import AchivePopUp from './Game/AchievePopUp';
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
  tutorial:any;
}
export default function Layout (props: ILayoutProps) {
  const [loading, setLoading] = React.useState(true);
  const [popUp, setPopUp] = React.useState(false);
  const [game, setGame]:[Game,React.Dispatch<React.SetStateAction<Game>>] = React.useState({
    name: "",
    punctuation: [0],
    selectEvent:[0],
    selectTitle:[0],
    media: 0,
    doneEvents:[""],
    achievements: [],
    tutorial: true
})
React.useEffect(() => {
  if (typeof(Storage) !== "undefined") {
    let stored = window.localStorage.getItem("NewsroomGame");
  if(stored){
    setGame(JSON.parse(stored));
  }
  } 
  setLoading(false)
  return () => {
    
  }
}, []);
React.useEffect(() => {
  setPopUp(true);
  const timeout = setTimeout(()=>setPopUp(false),5000);
  return () => {
    clearTimeout(timeout);
  }
}, [game.achievements])


  return (
    <div>
      { !loading?
      <div>
        {/* <SettingsButton/> */}
        <Achievements achieved={game.achievements}/>
        <AnimatePresence>
          {popUp && <AchivePopUp achieved={game.achievements[game.achievements.length-1]}/>}
        </AnimatePresence> 
        {React.cloneElement(props.children, { gameObject:game, setGameObject:setGame })}

      </div>  
    :<Loading/>}
    </div>
  );
}
