import styles from "../../styles/Newsroom.module.scss"
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

type Props = {children:React.ReactNode; title:string;}

export default function Select({children, title}: Props) {
    const [open, setOpen] = useState(false);
    useEffect(() => {
      setOpen(false);
    
      return () => {
        
      }
    }, [title])
    
  return (
    <div className={styles.select}>
        <motion.button 
          transition={{duration:0.3}}
          onClick={()=>setOpen((state)=>!state)}>{title}
          <motion.svg 
          animate={open?{rotateX:0}:{rotateX:180}}
          width="32" height="28" viewBox="0 0 32 28" fill="none">
            <path d="M11.774 25.3168C13.7366 28.4205 18.2634 28.4205 20.226 25.3168L31.0671 8.17225C33.1723 4.84302 30.7801 0.5 26.8411 0.5H5.15886C1.21987 0.5 -1.17234 4.84302 0.932856 8.17225L11.774 25.3168Z" fill="#32281E"/>
          </motion.svg> 
        </motion.button>        
        {open && 
        <motion.div className={styles.selectBox}>
            {children}
        </motion.div>}
    </div>
  )
}