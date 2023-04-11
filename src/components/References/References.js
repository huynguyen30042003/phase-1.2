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
  const LogoData =[
    {
      logo: [
        AirbnbLogo
      ],
    },
    {
      logo: [
        GoogleLogo,BookMyShowLogo
      ],
    },
    {
      logo: [
        MicrosoftLogo,FedExLogo,WalmartLogo
      ],
    },
    {
      logo: [
        OYOLogo,OLALogo
      ],
    },
    {
      logo: [
        AmazonLogo
      ],
    },
  ]
  return (
    <div className='References' data-aos="fade-up">
    <a>Referanslarımız</a>
    <a>Bize güvenen ve beraber çalıştığımız iş ortaklarımız</a>
    <div className='References__banner'>
      {
        LogoData.map((item)=>(
          <div className='References__banner__col'>
          {
            item.logo.map((logo)=>(
              <div className='References__banner__col__img'>
              <img src={logo}></img>
              </div>
              ))
            }
          </div>
        ))
      }
    </div>
  </div>
  )
}

export default References