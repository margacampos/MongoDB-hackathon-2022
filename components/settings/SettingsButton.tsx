import Image from 'next/image';
import * as React from 'react';
import SettingsMenu from './Menu';
import styles from "../../styles/Settings.module.scss"
import { AnimatePresence, motion } from 'framer-motion';

export interface ISettingsButtonProps {
}

export default function SettingsButton (props: ISettingsButtonProps) {
    const [displaySettings, setDisplaySettings] = React.useState(false);
  return (
      <>
      <AnimatePresence>
      {displaySettings?
        <SettingsMenu displaySettings={displaySettings} setDisplaySettings={setDisplaySettings}/>
      : <motion.button
      key="button"
      initial={{translateX:"-100px", opacity:0}}
      animate={{translateX:"0px", opacity:1}}
      exit={{translateX:"-1000px", opacity:0}}
      id={styles.icon} onClick={()=>setDisplaySettings(true)}>
          <Image src="/favicon.svg" alt='Icono settings' layout="fill"/>
      </motion.button>
      }
      </AnimatePresence>
      </>
      
    
  );
}
