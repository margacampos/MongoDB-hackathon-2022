import * as React from 'react';
import { getNewsTitle } from '../utils/newsUtils';

export interface INewsTitleGeneratorProps {
}

export default function NewsTitleGenerator (props: INewsTitleGeneratorProps) {
    const [newsTitle, setNewsTitle] = React.useState("");
    const [newsDesc, setNewsDesc] = React.useState("");
    const [url, setUrl] =React.useState("");

  const setTitle = async(url:string)=>{
    const res = await getNewsTitle(url);
    if(res.desc)setNewsDesc(res.desc);
    setNewsTitle(res.title);
  }
  
  return (
    <div>
        <label htmlFor="url">
            Location:
            <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)} name="location2"/>
        </label>
      <button onClick={()=>setTitle(url)}>Get title</button>
        <p>{newsTitle!="" && newsTitle}</p>
        <p>{newsDesc}</p>
    </div>
  );
}
