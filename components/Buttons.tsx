import * as React from 'react';
import styles from "../styles/Home.module.scss"
import {useRouter} from 'next/router';
import { ButtonsBig, ButtonsGrid } from '../data/buttons';

export interface IButtonsProps {
    buttons:(ButtonsBig|ButtonsGrid)[]
}
export default function Buttons (props: IButtonsProps) {
    const router = useRouter()
  return (
    <nav id={styles.buttons}>
        {props.buttons.map((item)=>{
            if(!item.grid)return <button id={styles.start} key={item.text} onClick={item.router!==""?()=>router.push(item.router):item.onClick}>{item.text}</button>
            return(
                <div key={item.gridID}>
                    {item.button.map((b)=><button key={b.text} onClick={b.router!==""?()=>router.push(b.router):b.onClick}>{b.text}</button>)}
                </div>
            );
        })}
          
    </nav>
  );
}
