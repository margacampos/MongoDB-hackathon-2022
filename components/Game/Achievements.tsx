import React from 'react';
import Image from "next/image";

type Props = {
    achieved:string[]
}

export default function Achievements({achieved}: Props) {
  return (
    <div style={{position:"fixed", display:"flex", maxWidth:"90vw", bottom:10,left:10, zIndex:1}}>
        {achieved.map((i, index)=>{
            if(i==="eotm")return <Image width={100} height={100} src="/eotm.svg" alt='Employee of the month. Newsrooms badge.'/>;
            else if (i==="fired")return <Image width={100} height={100} src="/fftn.svg" alt='Fired from the newsroom. Newsrooms badge.'/>;
        })}
        
    </div>
  )
}