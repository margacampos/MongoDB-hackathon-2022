import React from 'react'
import CloseButton from '../CloseButton';

type Props = {setHelp:React.Dispatch<React.SetStateAction<boolean>>;}

export default function Help({setHelp}: Props) {
  return (
    <div>
        <CloseButton close={setHelp}/>
        <h2>Help:</h2>
        <ul>
            <li>Use the monitor to open the To do list.</li>
            <li>On the To do list you will find the tasks you need to complete. Click on one of them to start the task.</li>
            <li>Talk to the characters by clicking on them to find out information about the story/article they are looking for.</li>
            <li>Move around by dragging left or right.</li>
        </ul>
    </div>
  )
}