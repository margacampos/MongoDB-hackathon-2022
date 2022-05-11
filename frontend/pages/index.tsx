import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useState } from 'react'
import Archive from '../components/Archive'
import Buttons from '../components/Buttons'
import EventGenerator from '../components/EventGenerator'
import Header from '../components/Header'
import NewsTitleGenerator from '../components/NewsTitleGenerator'
import { homeButtons } from '../data/buttons'
import styles from '../styles/Home.module.scss'
import { genRandomEvent, getEventName } from '../utils/eventUtils'

const Home: NextPage = () => {
  const Router = useRouter();
  const [code, setCode]:[any[], Dispatch<SetStateAction<any[]>>] = useState([{eventCode:""}])
  return (
    <div className={styles.container}>
      <Head>
        <title>THE NEWSROOM</title>
        <meta name="description" content="Create your own newspaper with the latest news from the GDELT database. This is a project made for the 2022 MongoDB Hackathon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header/>
        <div id={styles.image}>
          <Archive/>
        </div>
        <Buttons buttons={homeButtons}/>
        <EventGenerator/>
        <NewsTitleGenerator/>
        <button onClick={()=>setCode(genRandomEvent(1))}>get random event code</button>
        {code && code.map((i, index)=><p key={index}>{i.eventCode} Location: {i.location1 && i.location1} {i.location2 && i.location2} Actor: {i.actor1 && i.actor1} {i.actor2 && i.actor2} Event: {getEventName(i)}</p>)}
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
