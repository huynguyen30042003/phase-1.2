import React from 'react'
import Illustration from '../../asset/img/Illustration.png'
import Illustration1 from '../../asset/img/Illustration1.png'
import management from './management.scss'

function Management() {
  return (
    <div className='Management' data-aos="fade-up">
    <div className='Management__Process'>
      <div className='Management__Process__Title'>
        <a>Kalite ve Süreç Yönetimi</a>
        <a>Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.</a>
        <button className='Management__Process__Discover'>
          <a>Keşfet</a>
        </button>
      </div>
      <div className='Management__Process__Img'>
        <img src={Illustration}></img>
      </div>
    </div>
    <div className='Management__Test'>
      <div className='Management__Test__Title'>
        <a>Test Yönetimi ve Analizi</a>
        <a>Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.</a>
        <button className='Management__Test__Discover'>
          <a>Keşfet</a>
        </button>
      </div>
      <div className='Management__Test__Img'>
        <img src={Illustration1}></img>
      </div>
    </div>
  </div>
  )
}

export default Management