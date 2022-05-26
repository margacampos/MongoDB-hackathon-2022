import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Archive from '../components/Archive/Archive'
import Buttons from '../components/Buttons'
import GameScreen from '../components/Game/GameScreen'
import Header from '../components/Header'
import { Game } from '../components/Layout'
import Loading from '../components/Loading'
import { aboutButtons } from '../data/buttons'
import styles from '../styles/Home.module.scss'

const About: NextPage<{gameObject:Game, setGameObject:any}> = (props:{gameObject:Game, setGameObject:any}) => {
    const [home, setHome] = useState(true);
    const router = useRouter();
    useEffect(() => {
      if(!home)router.push("/");
      return () => {
        
      }
    }, [home, router])
    
  return (
    <div >
      <Head>
        <title>Newsroom | THE NEWSROOM</title>
        <meta name="description" content="The Newsroom is a visual novel type of game where you talk to the characters and complete task to try and get the front page." />
      </Head>
      {props.gameObject && props.gameObject.punctuation?<GameScreen gameObject={props.gameObject} setGameObject={props.setGameObject} setStart={setHome}/>:<Loading/>}
    </div>
  )
}

export default About
