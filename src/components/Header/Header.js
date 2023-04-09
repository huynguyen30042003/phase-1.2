import React from 'react'
import header from './header.scss'
function Header({NavBox}) {
  return (
    <div id='header' className='header' data-aos="fade-up">
    <NavBox></NavBox>
    <div className='header__title'>
      <div className='header__title__a'>
        <a>Bilgi Teknolojilerinde 23 Yıllık Tecrübe</a>
        <a>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</a>
      </div>
      <div className='header__title__Mail'>
        <input type="text" className='header__title__Mail__Input' placeholder='Mail bültenimize kayıt ol'></input>
        <button className='header__title__Mail__Button'>
          <a>Kayıt Ol</a>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Header