import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const Router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>THE NEWSROOM</title>
        <meta name="description" content="Create your own newspaper with the latest news from the GDELT database. This is a project made for the 2022 MongoDB Hackathon" />
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
          IMAGE
        </div>
        <div id={styles.buttons}>
          <button id={styles.start}>START</button>
          <div >
            <button>How it works</button>
            <button onClick={()=>{Router.push("/about","/more-about-gdelt-newsroom")}}>About us</button>
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

export default Home
