import React from 'react'
import header from './header.scss'
import List from '../../asset/img/List.svg'
function Header({NavBox}) {
  const navBoxData = [
    {
      item:"Çözüm ve Hizmetler",
    },
    {
      item:"Ürünler",
    },
    {
      item:"Teknolojiler",
    },
    {
      item:"İnsan Kaynakları",
    },
    {
      item:"Kurumsal",
    },
    {
      item:"İletişim",
    },
  ]
  return (
    <div id='header' className='header' data-aos="fade-up">
    <div className='nav__box'>
        <div className='nav'>
            <ul>
                <img src={List}></img>
                {
                  navBoxData.map((list)=>(
                    <li><a>{list.item}</a></li>
                  ))
                }
            </ul>
        </div>
    </div>
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