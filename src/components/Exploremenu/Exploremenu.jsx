import React from 'react'
import './Exploremenu.css'
import {menu_list} from '../../assets/assets'
const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='exploremenu' id='exploremenu'>
      <h1>Explore our menu</h1>
      <p className='exploremenu-text'>Choose from a diverse menu featuring a delectable arrayt of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="exploremenu-list">
        {menu_list.map((item,index)=>{
            return (
                <div className='exploremenu-listitem' key={index} onClick={()=>{setCategory(prev=>prev===item.menu_name?'All':item.menu_name)}}>
                    <img src={item.menu_image} alt="" className={category===item.menu_name?'active':''} />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default Exploremenu
