import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
const Navbar = ({setLogin}) => {
    const [menu,setMenu]=useState("home");
   const {getTotalCartAmount}= useContext(StoreContext);
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
        
        <ul className='navbar-menu'>
            <Link to='/' className={menu === "home"?"active":" "} onClick={()=>setMenu('home')}>Home</Link>
            <a  className={menu === "menu"?"active":" " } href='#exploremenu' onClick={()=>setMenu('menu')}>Menu</a>
            <a className={menu === "mobileapp"?"active":" "} href='#appdownload' onClick={()=>setMenu('mobileapp')} >Mobile App</a>
            <a className={menu === "contactus"?"active":" "} href='#footer' onClick={()=>setMenu('contactus')}>Contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon}  />
            <div className='navbar-search-icon'>
              <Link  to='/cart'> <img src={assets.basket_icon} alt="" /></Link> 
                <div className={getTotalCartAmount()===0?'':'dot'}></div>
            </div>
            <button onClick={()=>setLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar
