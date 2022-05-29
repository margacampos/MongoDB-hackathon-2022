import * as React from 'react';

export interface ICloseButtonProps {
    close:React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CloseButton (props: ICloseButtonProps) {
  return (
    <button onClick={()=>props.close(false)} className="closeButton" style={{padding:0, borderRadius:"50%"}}>
        X
    </button>
  );
}
