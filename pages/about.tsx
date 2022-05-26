import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Archive from '../components/Archive/Archive'
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
        <Header title='THE NEWSROOM'/>
        <div id={styles.image}>
          
          <section>
              <Link href="/">back</Link>
              <h2>📰 Welcome to The Newsroom 📰</h2>
              <h3>What is the goal?</h3>
              <p>To show people positive news happening all around the world in an engaging/creative way. All the events showed in The Newsroom are real and the related articles can be accessed by clicking on the respective links.</p>
              <h3>What is this?</h3>
              <p>This is a project made for the MongoDB World Hackathon 2022. It is also a place where you can find the most relevant (and positive) global news of last month as recorded by the GDELT database.</p>
              <h3>What you can do...</h3>
              <p>Right now you can:</p>
              <ul>
                <li><b>Enter The Newsroom:</b> Move around and talk to other characters in this visual novel kind of game while completing tasks and trying to make front page.</li>
                <li><b>Visit the archives:</b> Find news to share or just learn more about what was happening around the world this last month.</li>
                <li><b>Gallery:</b> Learn more about the different jobs involved in making a newspaper and find more about this project.</li>
              </ul>
              <h3>If you are interested in how it works...</h3>
              <p>Visit the github repository: <a href="https://github.com/margacampos/MongoDB-hackathon-2022" target={"_blank"} rel={"noreferrer"}>https://github.com/margacampos/MongoDB-hackathon-2022</a></p>
              <h3>Thank you for visiting!</h3>
              <Image src={"/group.png"} alt={"Image of The Newsroom's staff"} width={1781} height={724}/>
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
