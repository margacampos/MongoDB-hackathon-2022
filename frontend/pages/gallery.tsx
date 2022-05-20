import { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Gallery.module.scss"
const Display: NextPage = () => {
    const [img, setImg] = useState(0)
    const Router = useRouter();
    const info = [
        {
            title:"Welcome to the newsroom gallery",
            text:["In this gallery you will find information about the game characters and what their jobs mean.", "You will also find some information on how the newsroom was made, how it was made and some tips for getting some of the achievements.", "Ah! And I might also put here some future improvements I'm working on.", "Enjoy!"],
            img: {
                src:"/newsroom/the-newsroom-background-final.png",
                alt:"This is the newsroom.",
                width:1566,
                height:500
            }
        },
        {
            title: "Gabrielle, the managing editor",
            text:[ "Wait, You don't know what a manging editor is? It might not be as heard of as a reporter but the managing editor's job is crucial.", "They might also be called a Content Manager and their job is to create content strategies and oversee their implementation processes.","Being a managing editor is no easy job. You need to be organized, know how everyone is doing and make sure everyone meets their deadlines.","They usually manage a team of writers, editor and graphic designers just like you see Gabrielle do in this game."],
            img:{src:"/characters/managingeditor.png", alt:"The newsroom Manging editor", height:724, width:365}
        },
        {
            title: "Thomas, the reporter",
            text:[""],
            img:{src:"/characters/reporter.png", alt:"The newsroom reporter", height:676, width:332}
        },
        {
            title: "Jakub, the news editor",
            text:[""],
            img:{src:"/characters/newseditor.png", alt:"The newsroom News editor", height:543, width:654}
        },
        {
            title: "Aaliyah, the art director",
            text:[""],
            img:{src:"/characters/artdirector.png", alt:"The newsroom Art director", height:659, width:430}
        }
    ]
    return (
      <div className={styles.container}>
          <div className={styles.infoContainer}>
            <div className={styles.person}>
                <div className={styles.img}>
                    {info[img].img.src && <Image src={info[img].img.src} alt={info[img].img.alt} width={info[img].img.width} height={info[img].img.height}/>}
                </div>
            </div>
            <div className={styles.info}>
                <h1>{info[img].title}</h1>
                {info[img].text.map((i, index)=><p key={index}>{i}</p>)}
                <div>
                   {img!=0 && <button className={styles.button} onClick={()=>setImg((state)=>state-1)}>previous</button>}
                   {info.length!=img+1&& <button className={styles.button} onClick={()=>setImg((state)=>state+1)}>next</button>}
                </div>
            </div>
          </div>
          
      </div>
    )
  }
  
  export default Display