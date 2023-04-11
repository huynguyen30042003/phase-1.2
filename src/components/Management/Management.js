import React from 'react'
import Illustration from '../../asset/img/Illustration.png'
import Illustration1 from '../../asset/img/Illustration1.png'
import management from './management.scss'

function Management() {
  const managementData = [
    {
      firstTittle:"Kalite ve Süreç Yönetimi",
      secondTittle:"Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.",
      imgManagement: Illustration ,
    },
    {
      firstTittle:"Test Yönetimi ve Analizi",
      secondTittle:"Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.",
      imgManagement: Illustration1 ,
    },
  ]
  return (
    <div className='Management' data-aos="fade-up">
      {
        managementData.map((item)=>(
          <div className='Management__Process'>
          <div className='Management__Process__Title'>
            <a>{item.firstTittle}</a>
            <a>{item.secondTittle}</a>
            <button className='Management__Process__Discover'>
              <a>Keşfet</a>
            </button>
          </div>
          <div className='Management__Process__Img'>
            <img src={item.imgManagement}></img>
          </div>
        </div>
        ))
      }
  </div>
  )
}

export default Management