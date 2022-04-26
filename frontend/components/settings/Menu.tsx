import * as React from 'react';
import styles from "../../styles/Settings.module.scss"
import CloseButton from '../CloseButton';
import Explicacion from './Explicacion';

export interface ISettingsMenuProps {
    displaySettings:boolean;
    setDisplaySettings:React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SettingsMenu (props: ISettingsMenuProps) {
    const [currentSetting, setCurrentSetting] = React.useState("accessibility");
  return (
    <div id='settings'>
        <CloseButton close={props.setDisplaySettings}/>
        <div id={styles.sideMenu}>
            <button onClick={()=>setCurrentSetting("accessibility")}>Accessibility</button>
            <button onClick={()=>setCurrentSetting("positive")}>Positive mindset</button>
        </div>
        <div id={styles.settings}>
            <div id={styles.setting}>
                <p>This is a setting</p>
            </div>
            <Explicacion settingId={currentSetting}/>
        </div>
    </div>
  );
}
