import { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Gallery.module.scss"
import Link from "next/link";
import Head from "next/head";
const Display: NextPage = () => {
    const [img, setImg] = useState(0)
    const Router = useRouter();
    const info = [
        {
            title:"Welcome to the newsroom gallery",
            text:["In this gallery you will find information about the game characters and what their jobs mean.", "You will also find some information on how the newsroom was made, how it works and some tips for getting some of the achievements.", "Ah! And I might also put here some future improvements I'm working on.", "Enjoy!"],
            img: {
                src:"/newsroom/the-newsroom-background-final.png",
                alt:"This is the newsroom.",
                width:1566,
                height:500
            }
        },
        {
            title: "Gabrielle, the managing editor",
            text:[ "Wait, You don't know what a managing editor is? It might not be as heard of as a reporter but the managing editor's job is crucial.", "They might also be called a Content Manager and their job is to create content strategies and oversee their implementation processes.","Being a managing editor is no easy job. You need to be organized, know how everyone is doing and make sure everyone meets their deadlines.","They usually manage a team of writers, editor and graphic designers just like you see Gabrielle do in this game."],
            img:{src:"/characters/managingeditor.png", alt:"The newsroom Manging editor", height:724, width:365}
        },
        {
            title: "Thomas, the reporter",
            text:["Reporters are always ready to write and curious. They seek the truth and are one of the pillars in any newsroom.", "They receive assignments or evaluate news leads and news tips to develop story ideas.",
        "They also gather and verify factual information regarding story through interview, observation, and research.", "In the game you are meant to give Thomas an assigment for him to write about."],
            img:{src:"/characters/reporter.png", alt:"The newsroom reporter", height:676, width:332}
        },
        {
            title: "Jakub, the news editor",
            text:["A news editor is responsible for planning and creating written materials.", "They edit copy and improve it. They also assign stories to reporters.", "In this game you were initialy meant to be a news editor but as the idea developed I decided to involve different activities to show more about what goes on when making a newspaper."],
            img:{src:"/characters/newseditor.png", alt:"The newsroom News editor", height:543, width:654}
        },
        {
            title: "Aaliyah, the art director",
            text:["Art directors are really important. They ensure every piece of art, image, etc... looks cohesive and that the quality of each is the best it can be.", "In the game Aaliyah asks us to help her chose beetween different designs for the newspaper. In real life this job would be done by the team of designers the art director manages."],
            img:{src:"/characters/artdirector.png", alt:"The newsroom Art director", height:659, width:430}
        },
        {
            title:"Badges",
            text:["There are multiple badges you can earn while in the newsroom or in the archives.", "When you earn a badge, a pop up will appear explaining you why. Later you can check your badges and see them on the bottom left side of the screen.", "You can see some of them in the image above. Clue: If you finish one week in the newsroom I'm sure you will get one."],
            img:{src:"/badges.svg", alt:"Badges you can earn in The Newsroom", height:569, width:1611}
        }
    ]
    return (
      <div className={styles.container}>
          <Head>
        <title>Gallery | THE NEWSROOM</title>
        <meta name="description" content="The Newsroom's gallery contains information about the project and characters." />
      </Head>
          <div className={styles.infoContainer}>
            <div className={styles.person}>
                <div className={styles.img}>
                    {info[img].img.src && <Image src={info[img].img.src} alt={info[img].img.alt} width={info[img].img.width} height={info[img].img.height}/>}
                </div>
            </div>
            <div className={styles.info}>
                <h1>{info[img].title}</h1>
              <Link href="/">go back</Link>

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