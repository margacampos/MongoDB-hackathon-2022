import React, { useEffect, useState } from 'react'

type Props = {
  getNextInteraction:(punctuation?:number)=>void;
  gameEvents:{result:any[]};
  choice:{event:Event[], title:string, template:string}
  finishSelection:(type:string, choice:any, getPoints:()=>number)=>void;
}

export default function SelectTitle({getNextInteraction, gameEvents,finishSelection}: Props) {
  // const getTitlesForSelection = async () =>{
  //   //GET 5 titles (completly random, 4/5, 3/5, 2/5, 1/5)
  //   try {
  //     const res = await fetch("http://localhost:3000/api/title-game-generator",{
  //       method:"POST",
  //       body:JSON.stringify({winner: winnerEvent})
  //     });
  //     const result = await res.json();
  //     setSelection(result);
  //   } catch (error) {
  //     console.log(error)
  //   }
    
  // }
  const getPoints = () => {
    return 0;
  }
  return (
    <div>
      {gameEvents && gameEvents.result.map((i, index)=><button onClick={()=>finishSelection("title", i, getPoints)} key={index}>{i.title}</button>)}
        <button onClick={()=>getNextInteraction()}>Next</button>
    </div>
  )
}