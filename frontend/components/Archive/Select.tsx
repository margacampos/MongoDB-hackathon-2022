import React, { useEffect, useState } from 'react'

type Props = {children:React.ReactNode; title:string;}

export default function Select({children, title}: Props) {
    const [open, setOpen] = useState(false);
    useEffect(() => {
      setOpen(false);
    
      return () => {
        
      }
    }, [title])
    
  return (
    <div>
        <button onClick={()=>setOpen((state)=>!state)}>{title}</button>
        <div>
            {open && children}
        </div>
    </div>
  )
}