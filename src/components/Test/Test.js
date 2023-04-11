import React from 'react'
import test from './test.scss'
import CaretCircleDoubleRight from '../../asset/img/CaretCircleDoubleRight.svg'
function Test() {
  const testData = [
    {
      minTitle: "Yazılım Kalitesini Arttırıyoruz",
      DoubleRight: CaretCircleDoubleRight,

    },    
    {
      minTitle: "Olası Hataları Önceden Belirliyoruz",
      DoubleRight: CaretCircleDoubleRight,
    },
    {
      minTitle: "Oluşabilecek Riskleri Önlüyoruz",
      DoubleRight: CaretCircleDoubleRight,

    },
    {
      minTitle: "Zaman ve Maliyetten Tasarruf Sağlıyoruz",
      DoubleRight: CaretCircleDoubleRight,

    },
  ]
  return (
    <div className='Test' data-aos="fade-up">
    <a>Test Yönetimiyle Neler Sağlıyoruz?</a>
    <a>IoT Destekli Çözümler</a>
    <div className='test__minTitle'>
      {
        testData.map((item)=>(
          <>
          <a>{item.minTitle}</a>
          <img src={item.DoubleRight}></img>
          </>
        ))
      }
    </div>
  </div>
  )
}

export default Test