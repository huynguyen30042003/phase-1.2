import React from 'react'
import List from '../../asset/img/List.svg'
function navBox() {
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
  )
}

export default navBox