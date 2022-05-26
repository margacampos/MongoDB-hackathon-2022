import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Archive from '../components/Archive/Archive'
import Buttons from '../components/Buttons'
import Header from '../components/Header'
import { aboutButtons } from '../data/buttons'
import styles from '../styles/Home.module.scss'

const About: NextPage = () => {
    const [home, setHome] = useState(true);
    const router = useRouter();
    useEffect(() => {
      if(!home)router.push("/");
    
      return () => {
        
      }
    }, [home])
    
  return (
    <div >
      <Archive setCurrentActivity={setHome}/>
    </div>
  )
}

export default About
