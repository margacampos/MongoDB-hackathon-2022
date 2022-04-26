import * as React from 'react';
import SettingsButton from './settings/SettingsButton';

export interface ILayoutProps {
    children:any;
}

export default function Layout (props: ILayoutProps) {
  return (
    <div>
        <SettingsButton/>
      {props.children}
    </div>
  );
}
