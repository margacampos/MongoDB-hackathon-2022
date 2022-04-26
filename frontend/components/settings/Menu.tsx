import * as React from 'react';
import styles from "../../styles/Settings.module.scss"
import Explicacion from './Explicacion';

export interface ISettingsMenuProps {
}

export default function SettingsMenu (props: ISettingsMenuProps) {
    const [currentSetting, setCurrentSetting] = React.useState("accessibility");
  return (
    <div id='settings'>
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
