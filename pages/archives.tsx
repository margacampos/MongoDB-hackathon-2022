import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Archive from '../components/Archive/Archive'
import { Game } from '../components/Layout'


type Props ={
  gameObject:Game;
  setGameObject:React.Dispatch<React.SetStateAction<Game>>;
}
const About: NextPage<Props> = (props:Props) => {
    const [home, setHome] = useState(true);
    const router = useRouter();
    useEffect(() => {
      if(!home)router.push("/");
    
      return () => {
        
      }
    }, [home])
    
  return (
    <div >
      <Head>
        <title>Archives | THE NEWSROOM</title>
        <meta name="description" content="The Newsroom's archives contain the most relevant (and positive) news of last month as recorded by the GDELT database." />
      </Head>
      <Archive setCurrentActivity={setHome} setGameObject={props.setGameObject} gameObject={props.gameObject}/>
    </div>
  )
}

export default About
