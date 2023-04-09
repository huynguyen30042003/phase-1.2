import React from 'react'
import AirbnbLogo from '../../asset/img/AirbnbLogo.png'
import GoogleLogo from '../../asset/img/GoogleLogo.svg'
import BookMyShowLogo from '../../asset/img/BookMyShowLogo.svg'
import MicrosoftLogo from '../../asset/img/MicrosoftLogo.svg'
import FedExLogo from '../../asset/img/FedExLogo.svg'
import WalmartLogo from '../../asset/img/WalmartLogo.svg'
import OYOLogo from '../../asset/img/OYOLogo.svg'
import OLALogo from '../../asset/img/OLALogo.svg'
import AmazonLogo from '../../asset/img/AmazonLogo.png'
import references from './references.scss'

function References() {
  return (
    <div className='References' data-aos="fade-up">
    <a>Referanslarımız</a>
    <a>Bize güvenen ve beraber çalıştığımız iş ortaklarımız</a>
    <div className='References__banner'>
      <div className='References__banner__col'>
        <img src={AirbnbLogo}></img>
      </div>
      <div className='References__banner__col'>
        <div className='References__banner__col__img'>
          <img src={GoogleLogo}></img>
        </div>
        <div className='References__banner__col__img'>
          <img src={BookMyShowLogo}></img>
        </div>
      </div>
      <div className='References__banner__col'>
        <div className='References__banner__col__img'>
          <img src={MicrosoftLogo}></img>
        </div>
        <div className='References__banner__col__img'>
          <img src={FedExLogo}></img>
        </div>
        <div className='References__banner__col__img'>
          <img src={WalmartLogo}></img>
        </div>
      </div>
      <div className='References__banner__col'>
      <div className='References__banner__col__img'>
        <img src={OYOLogo}></img>
      </div> 
      <div className='References__banner__col__img'>
        <img src={OLALogo}></img>
      </div>
      </div>
      <div className='References__banner__col'>
        <img src={AmazonLogo}></img>

      </div>
    </div>
  </div>
  )
}

export default References