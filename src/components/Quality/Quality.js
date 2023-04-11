import React from 'react'
import quality from './quality.scss'
import File from '../../asset/img/File.svg'
import Star from '../../asset/img/Star.svg'
import Crown from '../../asset/img/Crown.svg'
import ChartBar from '../../asset/img/ChartBar.svg'
import ChartPieSlice from '../../asset/img/ChartPieSlice.svg'
import FigmaLogo from '../../asset/img/FigmaLogo.svg'
function Quality() {
  const QualityData = [
    {
      imgLink: File,
      name: "Döküman Analizi",
      desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    },
    {
      imgLink: Star,
      name: "Kabul ve Değerlendirme",
      desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    },
    {
      imgLink: Crown,
      name: "İş Kuralları Analizi",
      desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    },
    {
      imgLink: ChartBar,
      name: "Akış Diyagramları",
      desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    },
    {
      imgLink: ChartPieSlice,
      name: "Paydaş Analizi",
      desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    },
    {
      imgLink: FigmaLogo,
      name: "Prototipleme",
      desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    },
  ];
  return (
    <div  className='Quality' data-aos="fade-up">
    <div className='Quality__title'>
      <a>Kalite ve Süreç Yönetimi</a>
      <a>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</a>
    </div>
    <div className='Quality__Frame'>
    {
      QualityData.map((item) => (
        <div className='Quality__Frame__Content'>
        <img src={item.imgLink}></img>
        <a>{item.name}</a>
        <a>{item.desc}</a>
      </div>
      ))
    }
    </div>
  </div>
  )
}

export default Quality