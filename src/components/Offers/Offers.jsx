import React from 'react'
import './Offers.css'
import Quotes from '../Assets/Quotes.png'
import MeditationQuotes from './MeditationQuotes'
const Offers=()=>{
    return(
        <div className='offers'>
          <div className='offers-left'>
            <MeditationQuotes/>   
          </div>
          <div className='offers-right'>
            <img src={Quotes} alt=""/>
          </div>
        </div>
    )
}

export default Offers;
