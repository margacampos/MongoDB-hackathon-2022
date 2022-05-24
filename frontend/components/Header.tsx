import * as React from 'react';
import styles from "../styles/Home.module.scss";

export interface IHeaderProps {
  title:string;
}

export default function Header (props: IHeaderProps) {
  return (
    <div id={styles.nav}>
           <div className={styles.decorative}></div>
        <h1 className={styles.title}>
          {props.title}
        </h1>
        <div className={styles.info}>
          <p>Since 2022</p>
          <p>MongoDB 2022 Hackathon</p>
        </div>
    </div>
  );
}
