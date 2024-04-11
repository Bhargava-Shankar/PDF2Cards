import React from 'react'
import "./css/Hero.scss"
import CardDummy from './CardDummy'
import arrow from "/assets/arrow.svg"
const Hero = () => {
  return (
      <div className='hero'>
        <div className='motto'>
            <br />PDFs to <br />Flash<span>cards</span>
        </div>
          <div className='motto'>
            Your Ultimate Learning Companion
        </div>
          <CardDummy></CardDummy> 
        <img className='arrowLogo' src={arrow} alt="" />
    </div>
  )
}

export default Hero
