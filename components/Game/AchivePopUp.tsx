import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { Badges } from '../../data/badges';
import { motion } from 'framer-motion';
import styles from "../../styles/Newsroom.module.scss";
type Props = {
    achieved:string;
}

export default function AchivePopUp({achieved}: Props) {
    const [badge, setBadge] = useState(Badges.find((i)=>i.id===achieved))
    
  return (
      <>
      {badge && badge.src && 
        <motion.div
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          className={styles.badges}
        >
            <Image src={badge?.src} alt={badge?.comment} width={70} height={70}/>
            <div>
              <p>You earned a new badge!</p>
              <p>{badge?.comment}</p>
            </div>
        </motion.div>
      }
      </>
  )
}

const variants = {
    enter:{
      opacity:0,
      x:-100,
      transition:{
        duration:0.3
      }
    },
    center:{
      opacity:1,
      x:0,
      transition:{
        duration:0.3
      }
    },
    exit:{
      opacity:0,
      x:-100,
      transition:{
        duration:0.3
      }
    }
  }