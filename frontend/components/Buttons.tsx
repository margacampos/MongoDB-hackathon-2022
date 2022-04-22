import * as React from 'react';
import styles from "../styles/Home.module.scss"
import {useRouter} from 'next/router';

export interface IButtonsProps {
    buttons:({
        text:string;
        onClick:()=>void;
        grid:false;
    }|{
        button:{
            text:string;
            onClick:()=>void;
        }[]
        grid:true;
        gridID:number;
    })[]
}
export default function Buttons (props: IButtonsProps) {
    const router = useRouter()
  return (
    <div id={styles.buttons}>
        {props.buttons.map((item)=>{
            if(!item.grid)return <button id={styles.start} key={item.text} onClick={item.onClick}>{item.text}</button>
            return(
                <div key={item.gridID}>
                    {item.button.map((b)=><button key={b.text} onClick={b.onClick}>{b.text}</button>)}
                </div>
            );
        })}
          
    </div>
  );
}
