import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Archive from '../components/Archive/Archive'
import Buttons from '../components/Buttons'
import Header from '../components/Header'
import { aboutButtons } from '../data/buttons'
import styles from '../styles/Home.module.scss'
import { getActorCodeLabel, getEventCodeLabel, getLocCodeLabel } from '../utils/eventUtils'

const About: NextPage = () => {
    const inputRef = useRef<null | HTMLInputElement>(null);
    const [result, setResult] = useState("");
    const [open, setOpen] = useState(false);
    const findLabel = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const str = e.target.value.toUpperCase();
        let actor = getActorCodeLabel(str);
        let loc = getLocCodeLabel(str);
        let event = getEventCodeLabel(str);
        if(actor!="error")return setResult(actor);
        else if(loc!="error")return setResult(loc);
        else if(event.label!="error")return setResult(event.decor);
    }

    useEffect(() => {
      
    
      return () => {
        
      }
    }, [])
    
  return (
    <div className={styles.container}>
      <Head>
        <title>Charts | THE NEWSROOM</title>
        <meta name="description" content="See search statistics of the newsroom." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} >
        <Header title='THE NEWSROOM'/>
        <div id={styles.search}>
            <button onClick={()=>setOpen(state=>!state)}>Search code for value</button> 
            {open &&
            <div>
              <input type="text" ref={inputRef} onChange={findLabel} />
              <p>{inputRef && inputRef.current && `${inputRef.current.value.toUpperCase()} : ${result}.`}</p>
            </div>}
        </div>
        
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            <div style={{overflowX:"auto"}}>
              <h2>Top 10 most clicked articles</h2>
              <iframe style={{background: "#FFFFFF",border: "none",borderRadius: "2px",boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"}} width="640" height="480" src="https://charts.mongodb.com/charts-hackathon2022-fecot/embed/charts?id=62927fa0-7d6f-46d8-8651-5694f6558028&maxDataAge=1800&theme=light&autoRefresh=true"></iframe>            </div>
            <div style={{overflowX:"auto"}}>
              <h2>Most frequent event code this month</h2>
              <iframe style={{background: "#FFFFFF",border: "none", borderRadius: "2px",boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"}} width="640" height="480" src="https://charts.mongodb.com/charts-hackathon2022-fecot/embed/charts?id=62922e6b-cb9e-404d-8312-56485574984f&maxDataAge=86400&theme=light&autoRefresh=true"></iframe>
            </div>
            <div style={{overflowX:"auto"}}>
              <h2>Most common actor</h2>
              <iframe style={{background: "#FFFFFF",border: "none", borderRadius: "2px",boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"}} width="640" height="480" src="https://charts.mongodb.com/charts-hackathon2022-fecot/embed/charts?id=629229ad-3de7-4024-8412-4d88cb78ae83&maxDataAge=1209600&theme=light&autoRefresh=true"></iframe>
            </div>
            <div style={{overflowX:"auto"}}>
                <h2>Most common event based on Country</h2>
                <iframe style={{background: "#FFFFFF",border: "none",borderRadius: "2px",boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"}} width="640" height="480" src="https://charts.mongodb.com/charts-hackathon2022-fecot/embed/charts?id=62923301-7d6f-4281-8170-5694f6220cae&maxDataAge=1209600&theme=light&autoRefresh=true"></iframe>
            </div>
        </div>
        
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

export default About
