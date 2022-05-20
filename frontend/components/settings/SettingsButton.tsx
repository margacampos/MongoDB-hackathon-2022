import Image from 'next/image';
import * as React from 'react';
import SettingsMenu from './Menu';
import styles from "../../styles/Settings.module.scss"

export interface ISettingsButtonProps {
}

export default function SettingsButton (props: ISettingsButtonProps) {
    const [displaySettings, setDisplaySettings] = React.useState(false);
  return (
      <>
      {displaySettings?
        <SettingsMenu displaySettings={displaySettings} setDisplaySettings={setDisplaySettings}/>
      : <button id={styles.icon} onClick={()=>setDisplaySettings(true)}>
          <Image src="/favicon.svg" alt='Icono settings' layout="fill"/>
      </button>
      }
      </>
      
    
  );
}
