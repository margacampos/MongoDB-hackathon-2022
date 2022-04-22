import { useState } from 'react'; 
import Image from 'next/image';

export interface IArchiveProps {
}

export default function Archive (props: IArchiveProps) {
    const [objPosition, setObjPosition] = useState("center")
  return (
    <div>
      <Image src={"/archive/archive.png"} alt="GDELT archive background" width={1200} height={400} layout="fill" objectFit='cover' objectPosition="center"/>
      <button onClick={()=>{setObjPosition((state)=>state==="center"?"0px 100px":"center")}}>
        <Image src={"/archive/archive-gabinet.png"} alt="GDELT archive gabinet" width={1200} height={400} layout="fill" objectFit='cover' objectPosition={objPosition}/> 
      </button>
    </div>
  );
}
