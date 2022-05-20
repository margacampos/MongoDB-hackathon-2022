import React from 'react'

type Props = {}

export default function Loading({}: Props) {
  return (
    <div className='loading'><h2>Loading</h2><div><div id='dot1'></div><div id="dot2"></div><div id="dot3"></div></div></div>
  )
}