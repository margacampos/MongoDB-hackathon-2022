import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Buttons from '../components/Buttons'
import Header from '../components/Header'
import { aboutButtons } from '../data/buttons'
import styles from '../styles/Home.module.scss'

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About | THE NEWSROOM</title>
        <meta name="description" content="What is GDELT newsroom? This project made for the 2022 MongoDB Hackathon lets you create your own newspaper with the latest news from the GDELT database." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>
        <div id={styles.image}>
          
          <section>
              <Link href="/">back</Link>
              <h2>Welcome to GDELT newsroom</h2>
              <h3>We are still in development</h3>
              <p>This project started because of the mongodb hackathon 2022 but I will continue to develop it as I have grown fond of it.</p>
              <h3>What is this?</h3>
              <p>Right now it is a simple visual novel type of game where by talking to your co-workers on the newsroom, you have to guess the right choices for the event they are looking for that week.</p>
              <p>It is powered by the GDELT database which means all the events present in the game are real.</p>
              <h3>What is it for?</h3>
              <p>In the future I would like it to be a funny game where you catch up on present events and learn about the different people behind newspapers and maybe one day I might make one for tv and another for radio too, who knows.</p>
              <p>Anyway, I hope you enjoy it! Any opinion is welcomed, just keep in mind It is still in early development.</p>
          </section>
        </div>
        <Buttons buttons={aboutButtons}/>
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
