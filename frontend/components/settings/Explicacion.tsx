import * as React from 'react';

export interface IExplicacionProps {
    settingId:"accessibility"|"help";
}

export default function Explicacion (props: IExplicacionProps) {
    const exp = {
      accessibility:[""],
      help:["Advice for playing the game:", "- Move around the newsroom by dragging.", "- Click on the characters on the newsroom to interact with them.", "- Use the door on the right to enter the archives.", "- Use your pc screen to see your to do list", "- To be able to finish the week you need to finish all the tasks in your to do list."]
    }
       
  return (
    <div>
      {exp[props.settingId].map((i, index)=><p key={index}>{i}</p>)}
    </div>
  );
}
