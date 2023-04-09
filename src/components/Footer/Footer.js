import React from 'react'
import footer from './footer.scss'
import MediumLogo from '../../asset/img/MediumLogo.svg'
import LinkedinLogo from '../../asset/img/LinkedinLogo.svg'
import TwitterLogo from '../../asset/img/TwitterLogo.svg'
import InstagramLogo from '../../asset/img/InstagramLogo.svg'
import FacebookLogo from '../../asset/img/FacebookLogo.svg'

function Footer() {
  return (
    <div className='Footer' data-aos="fade-up">
    <div className='Footer__Title'>
      <div className='Footer__Title__SolutionServices'>
        <a>Çözüm ve Hizmetler</a>
        <a>Yazılım Geliştirme</a>
        <a>Outsourcing</a>
        <a>Kalite ve Süreç Yönetimi</a>
        <a>Danışmanlık</a>
        <a>IoT Destekli Çözümler</a>
      </div>
      <div className='Footer__Products'>
        <a>Ürünler</a>
        <a>Eğitim Yönetim Sistemi</a>
        <a>İnsan Sermayesi Yönetim Sistemi</a>
        <a>Müşteri İlişkileri Yönetim Sistemi</a>
        <a>İçerik Yönetim Sistemi</a>
      </div>
      <div className='Footer__Institutional'>
        <a>Kurumsal</a>
        <a>Hakkımızda</a>
        <a>Belge ve Yetkinlikler</a>
        <a>İş Ortakları</a>
      </div>
      <div className='Footer__Communication'>
        <a>İletişim</a>
        <a>Bilgi İstek Formu</a>
        <a>Uzman Talep Formu</a>
      </div>
    </div>
    <div className='Footer__CopyRightContact'>
      <div className='Footer__CopyRight'>
        <a>© Copyright 2010-2021 - Can Çevik</a>
      </div>
      <div className='Footer__Contact'>
        <img src={MediumLogo}></img>
        <img src={LinkedinLogo}></img>
        <img src={TwitterLogo}></img>
        <img src={InstagramLogo}></img>
        <img src={FacebookLogo}></img>
      </div>
    </div>
  </div>
  )
}

export default Footer