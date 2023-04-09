import React from 'react'
import test from './test.scss'
import CaretCircleDoubleRight from '../../asset/img/CaretCircleDoubleRight.svg'
function Test() {
  return (
    <div className='Test' data-aos="fade-up">
    <a>Test Yönetimiyle Neler Sağlıyoruz?</a>
    <a>IoT Destekli Çözümler</a>
    <div className='test__minTitle'>
      <a>Yazılım Kalitesini Arttırıyoruz</a>
      <img src={CaretCircleDoubleRight}></img>
      <a>Olası Hataları Önceden Belirliyoruz</a>
      <img src={CaretCircleDoubleRight}></img>
      <a>Oluşabilecek Riskleri Önlüyoruz</a>
      <img src={CaretCircleDoubleRight}></img>
      <a>Zaman ve Maliyetten Tasarruf Sağlıyoruz</a>
    </div>
  </div>
  )
}

export default Test