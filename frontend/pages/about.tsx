import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.scss'

const About: NextPage = () => {
  const Router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>About | THE NEWSROOM</title>
        <meta name="description" content="What is GDELT newsroom? This project made for the 2022 MongoDB Hackathon lets you create your own newspaper with the latest news from the GDELT database." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section id={styles.nav}>
           <div className={styles.decorative}></div>
        <h1 className={styles.title}>
          THE NEWSROOM
        </h1>
        <div className={styles.info}>
          <p>Since 2022</p>
          <p>MongoDB 2022 Hackathon</p>
        </div>
        </section>
       
        <div id={styles.image}>
          
          <section>
              <Link href="/">back</Link>
              <h2>Welcome to GDELT newsroom</h2>
              <h3>Want to create your own newspaper?</h3>
              <p>GDELT Newsroom allows you to create your own newspaper with the latest and most relevant news from the GDELT database.<br/>
              Our goal is to create an entretaining interactive experience that allows you to look at what is going on arround the world while having fun creating your own newspaper.<br/>
              Our database is updated once every day with 1000 of the most relevant events of the day before. This means everyday you visit us you will be able to create a completely new newspaper and learn what is going on arround the world.<br/>
              You will be able to filter news on how positive or negative, relevant or by who is involved.</p>
              <h3>Playmodes</h3>
              <h4>Editor</h4>
              <p>We are looking for a new editor, will you be able to fill the role? Join our newsroom and prove your editor skills.<br/>
              You have to come up with this weeks front page. Choose the event you want your team of reporters to cover, choose between headlines, design the front page and get that important last minute new that will make your newspaper stand out.<br/>
              Lets see if you have what we are looking for!</p>
              <h4>Sandbox</h4>
              <p>Would you like to make your newspaper without anyone telling you what it should cover? You are in luck!<br/>
              Our archives are open to everyone! Look through yesterday events and select whatever matters to you, no restrictions! Just having fun and learning about what&#39;s been happening arround the world.</p>
              <h3>We are still in development</h3>
              <p>
              This project is still in development that is why the news might not be updated as frequently and why we only support articles written in english.<br/>
              We are working on making it available for everyone.
              </p>
              <h3>News we cover</h3>
              <p>Because we ultimatly want it to be a fun experience, most of our events are positive. We cover the first three QuadClass (Verbal Cooperation, Material Cooperation, Verbal Conflict).<br/>
              If you would like to only work with the first two, you can go to settings and turn the &#34;positive mindset&#34; option on</p>
          </section>
        </div>
        <div id={styles.buttons}>
          <button id={styles.start}>START</button>
          <div >
            <button>How it works</button>
            <button onClick={()=>{Router.push("/")}}>Home</button>
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
