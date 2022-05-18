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
  tutorial:any;
}
export default function Layout (props: ILayoutProps) {
  const [loading, setLoading] = React.useState(true);
  const [start, setStart] = React.useState(false);
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
        {start && <GameScreen gameObject={game} setGameObject={setGame} setStart={setStart}/>}
      {React.cloneElement(props.children, { start: start, setStart:setStart })}
      </div>  
    :<Loading/>}
    </div>
  );
}
