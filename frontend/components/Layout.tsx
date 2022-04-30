import * as React from 'react';
import { getNewsTitle } from '../utils/newsUtils';
import SettingsButton from './settings/SettingsButton';

export interface ILayoutProps {
    children:any;
}

export default function Layout (props: ILayoutProps) {
  const [newsTitle, setNewsTitle] = React.useState("");
  const setTitle = async(url:string)=>{
    const res = await getNewsTitle(url);
    console.log(res);
    setNewsTitle(res);
  }
  return (
    <div>
        <SettingsButton/>
        <button onClick={()=>setTitle("http://localhost:3000/about")}>Get title</button>
        {newsTitle!="" && newsTitle}
      {props.children}
    </div>
  );
}
