import * as React from 'react';
import Achievements from './Game/Achievements';
import SettingsButton from './settings/SettingsButton';

export interface ILayoutProps {
    children:any;
}

export default function Layout (props: ILayoutProps) {
  const [game, setGame] = React.useState({
    name: "Person's name",
    punctuation: [5.00, 7.50],
    media: 6.25,
    doneEvents:["firstweek"],
    achievements: ["eotm", "fired"]
})
  return (
    <div>
        <SettingsButton/>
        <Achievements/>
      {props.children}
    </div>
  );
}
