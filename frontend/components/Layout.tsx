import * as React from 'react';
import Achievements from './Game/Achievements';
import SettingsButton from './settings/SettingsButton';

export interface ILayoutProps {
    children:any;
}

export default function Layout (props: ILayoutProps) {
  const [game, setGame] = React.useState({
    name: "",
    punctuation: [],
    media: 0,
    doneEvents:[],
    achievements: ["fired"]
})
  return (
    <div>
        <SettingsButton/>
        <Achievements achieved={game.achievements}/>
      {props.children}
    </div>
  );
}
