import React from 'react'
import logoM from '../assets/blogappMain.svg'
import logoS from '../assets/blogapp.png'
import logoB from '../assets/blogappBlack.svg'


function Logo({ width = '100px', color }) {

  let logoColor = color ? logoS : logoM

  return (
    <>
      <img width={width} src={logoColor} alt="Logo" />
    </>
  )
}
export default Logo