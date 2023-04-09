import React from 'react'
import List from '../../asset/img/List.svg'
function navBox() {
  return (
    <div className='nav__box'>
        <div className='nav'>
            <ul>
                <img src={List}></img>
                <li><a>Çözüm ve Hizmetler</a></li>
                <li><a>Ürünler</a></li>
                <li><a>Teknolojiler</a></li>
                <li><a>İnsan Kaynakları</a></li>
                <li><a>Kurumsal</a></li>
                <li><a>İletişim</a></li>
            </ul>
        </div>
    </div>
  )
}

export default navBox