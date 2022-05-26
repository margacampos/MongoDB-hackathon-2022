import React, { useState } from 'react';
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
    achieved:string[]
}

export default function Achievements({achieved}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{position:"fixed", maxWidth:"90vw", bottom:0,left:0, zIndex:1, overflowX:"auto", minWidth:"200px"}}>
      <button onClick={()=>setOpen((state)=>!state)} className='badges'>
        {/* <motion.svg 
          animate={open?{rotateX:0}:{rotateX:180}}
          width="15" viewBox="0 0 32 28" fill="none">
            <path d="M11.774 25.3168C13.7366 28.4205 18.2634 28.4205 20.226 25.3168L31.0671 8.17225C33.1723 4.84302 30.7801 0.5 26.8411 0.5H5.15886C1.21987 0.5 -1.17234 4.84302 0.932856 8.17225L11.774 25.3168Z" fill="#F5F2E8"/>
          </motion.svg>  */}
          Badges
      </button>
      <AnimatePresence>
          {open && <motion.div 
          initial={{height:1}}
          animate={{height:120}}
          exit={{height:1}}
          transition={{duration:0.3}}
          id='badges' style={{display:"flex", backgroundColor:"var(--background-black)", padding:"1rem", borderRadius:"0 10px 0 0" }}>
            {achieved.map((i, index)=>{
                if(i==="eotm")return <Image key={i} width={100} height={100} src="/eotm.svg" alt='Employee of the month. Newsrooms badge.'/>;
                else if (i==="fired")return <Image key={i} width={100} height={100} src="/fftn.svg" alt='Fired from the newsroom. Newsrooms badge.'/>;
                else if (i==="published")return<Image key={i} src="/published.svg" alt="Your work was published badge" width={100} height={100}/>;
                else if (i==="notpublished")return<Image key={i} src="/notpublished.svg" alt="Your work was not published badge" width={100} height={100}/>;
            })}
            </motion.div>}
      </AnimatePresence>
        
        
    </div>
  )
}