import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Archive from '../components/Archive/Archive'
import Buttons from '../components/Buttons'
import EventGenerator from '../components/EventGenerator'
import Achievements from '../components/Game/Achievements'
import SelectEvent from '../components/Game/SelectEvent'
import Header from '../components/Header'
import NewsTitleGenerator from '../components/NewsTitleGenerator'
import { ButtonsBig, ButtonsGrid } from '../data/buttons'
// import { homeButtons } from '../data/buttons'
import styles from '../styles/Home.module.scss'
import { genRandomEvent, getEventName } from '../utils/eventUtils'
type Props = {
  setStart:React.Dispatch<React.SetStateAction<boolean>>;
  start:boolean;
  gameObject:any;
}

const Home: any = ({setStart, start, gameObject}:Props) => {
  const homeButtons:(ButtonsBig|ButtonsGrid)[]= [
    {
        text:"Enter the newsroom",
        onClick:()=>{setStart(true)},
        grid:false,
        router:""
    },
    {
      text:"Look in the archives",
      onClick:()=>{setArchive(true)},
      grid:false,
      router:""
    },
    {
        button:[{
            text:"Gallery",
            onClick:()=>{},
            router:"/gallery"
        },
        {
            text:"About us",
            router:"/about",
            onClick:()=>{}
        }],
        grid:true,
        gridID:1
    }
];
  const Router = useRouter();
  const [code, setCode]:[any[], Dispatch<SetStateAction<any[]>>] = useState([{eventCode:""}])
  const [archive, setArchive] = useState(false);
  
  return (
    <div className={styles.container}>
      {archive && <Archive setCurrentActivity={setArchive}/>}
      {gameObject && <Achievements achieved={gameObject.achievements}/>}
      <Head>
        <title>THE NEWSROOM</title>
        <meta name="description" content="Create your own newspaper with the latest news from the GDELT database. This is a project made for the 2022 MongoDB Hackathon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header title="THE NEWSROOM"/>
        <div id={styles.image}>
          {/* <SelectEvent/> */}
          {/* <Image src={"/newsroom/the-newsroom-background-final.svg"} alt="The newsroom" layout='intrinsic' height={820} width={2400}/> */}
          <img src={"/newsroom/newsroom.svg"} alt="The newsroom"/>

        </div>
        <Buttons buttons={homeButtons}/>
        {/* <EventGenerator/>
        <NewsTitleGenerator/>
        <button onClick={()=>setCode(genRandomEvent(3))}>get random event code</button>
        {code && code.map((i, index)=><p key={index}>{i.eventCode} Location: {i.location1 && i.location1} {i.location2 && i.location2} Actor: {i.actor1 && i.actor1} {i.actor2 && i.actor2} Event: {getEventName(i)}</p>)} */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.gdeltproject.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/gdeltlogo.png" alt="Vercel Logo" width={115} height={14} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
