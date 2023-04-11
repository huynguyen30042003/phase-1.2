import React from 'react'
import footer from './footer.scss'
import MediumLogo from '../../asset/img/MediumLogo.svg'
import LinkedinLogo from '../../asset/img/LinkedinLogo.svg'
import TwitterLogo from '../../asset/img/TwitterLogo.svg'
import InstagramLogo from '../../asset/img/InstagramLogo.svg'
import FacebookLogo from '../../asset/img/FacebookLogo.svg'
const items = [
  {
    header: "Çözüm ve Hizmetler",
    descriptions: [
      "Yazılım Geliştirme",
      "Outsourcing",
      "Kalite ve Süreç Yönetimi",
      "Danışmanlık",
      "IoT Destekli Çözümler",
    ],
  },
  {
    header: "Ürünler",
    descriptions: [
      "Eğitim Yönetim Sistemi",
      "İnsan Sermayesi Yönetim Sistemi",
      "Müşteri İlişkileri Yönetim Sistemi",
      "İçerik Yönetim Sistemi",
    ],
  },
  {
    header: "Kurumsal",
    descriptions: [
      "Hakkımızda",
      "Belge ve Yetkinlikler", 
      "İş Ortakları"],
  },
  {
    header: "İletişim",
    descriptions: [
      "Bilgi İstek Formu",
      "Uzman Talep Formu"],
  },
];
const socialMediaLogos = [
  { imgLink: MediumLogo },
  { imgLink: LinkedinLogo },
  { imgLink: TwitterLogo },
  { imgLink: InstagramLogo },
  { imgLink: FacebookLogo },
];
function Footer() {
  return (
    <div className='Footer' data-aos="fade-up">
    <div className='Footer__Title'>
      {
        items.map((item)=>(
          <>
            <div className='Footer__Title__Col'>
              <a>{item.header}</a>
              {item.descriptions.map((des)=>(
                <a>{des}</a>
              ))}
            </div>
          </>
        ))
      }
    </div>
    <div className='Footer__CopyRightContact'>
      <div className='Footer__CopyRight'>
        <a>© Copyright 2010-2021 - Can Çevik</a>
      </div>
      <div className='Footer__Contact'>

        {socialMediaLogos.map((item)=>(
          <img src={item.imgLink}></img>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Footer