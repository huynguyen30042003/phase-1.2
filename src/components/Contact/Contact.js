import React from 'react'
import Users from '../../asset/img/Users.svg'
import contact from './contact.scss'
function Contact() {
  return (
<div className='Contact' data-aos="fade-up">
  <div className='Contact__icon'>
      <img src={Users}>
      </img>
      <div className='Contact__icon__circle'></div>
  </div>
  <a>Bize Ulaşın</a>
  <a>Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle irtibata geçin.</a>
  <button className='Contact__Button'>
      <a>Bize Ulaşın</a>
  </button>
</div>
  )
}

export default Contact