import { motion } from 'framer-motion';
import * as React from 'react';
import styles from "../../styles/Settings.module.scss"
import CloseButton from '../CloseButton';
import Explicacion from './Explicacion';

export interface ISettingsMenuProps {
    displaySettings:boolean;
    setDisplaySettings:React.Dispatch<React.SetStateAction<boolean>>;
}
type settings = "accessibility"|"help"

export default function SettingsMenu (props: ISettingsMenuProps) {
    const [currentSetting, setCurrentSetting]:[settings, React.Dispatch<React.SetStateAction<any>>] = React.useState("help");
  return (
    <motion.div
    key="settings"
    initial={{translateX:"-100%", translateY:"-50%", opacity:0}}
      animate={{translateX:"-50%", translateY:"-50%", opacity:1}}
      exit={{translateX:"-100%", opacity:0}}
     id='settings'>
        <CloseButton close={props.setDisplaySettings}/>
        <div id={styles.sideMenu}>
            <button onClick={()=>setCurrentSetting("help")}>Help</button>
            {/* <button onClick={()=>setCurrentSetting("accessibility")}>Accessibility</button> */}
        </div>
        <div id={styles.settings}>
            <div id={styles.setting}>
                <h3 style={{textTransform: "capitalize"}}>{currentSetting}</h3>
            </div>
            <Explicacion settingId={currentSetting}/>
        </div>
    </motion.div>
  );
}
