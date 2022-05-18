import React from 'react'

type Props = {
  finish:()=>void;
}

export default function FinishWeek({finish}: Props) {
  return (
    <div>
        You finished!
    </div>
  )
}