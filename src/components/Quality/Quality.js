import React from 'react'
import quality from './quality.scss'
import File from '../../asset/img/File.svg'
import Star from '../../asset/img/Star.svg'
import Crown from '../../asset/img/Crown.svg'
import ChartBar from '../../asset/img/ChartBar.svg'
import ChartPieSlice from '../../asset/img/ChartPieSlice.svg'
import FigmaLogo from '../../asset/img/FigmaLogo.svg'
function Quality() {
  return (
    <div  className='Quality' data-aos="fade-up">
    <div className='Quality__title'>
      <a>Kalite ve Süreç Yönetimi</a>
      <a>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</a>
    </div>
    <div className='Quality__Frame'>
      <div className='Quality__Frame__Content'>
        <img src={File}></img>
        <a>Döküman Analizi</a>
        <a>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</a>
      </div>
      <div className='Quality__Frame__Content'>
        <img src={Star}></img>
        <a>Kabul ve Değerlendirme</a>
        <a>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</a>
      </div>
      <div className='Quality__Frame__Content'>
        <img src={Crown}></img>
        <a>İş Kuralları Analizi</a>
        <a>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</a>
      
      </div>
      <div className='Quality__Frame__Content'>
        <img src={ChartBar}></img>
        <a>Akış Diyagramları</a>
        <a>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</a>
        
      </div>
      <div className='Quality__Frame__Content'>
        <img src={ChartPieSlice}></img>
        <a>Paydaş Analizi</a>
        <a>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</a>

      </div>
      <div className='Quality__Frame__Content'>
        <img src={FigmaLogo}></img>
        <a>Prototipleme</a>
        <a>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</a>
      
      </div>
    </div>
  </div>
  )
}

export default Quality