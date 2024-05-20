import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
const Loginpopup = ({ setLogin}) => {
    const [current,setCurrent]=useState("Sign up")
  return (
    <div className='loginpopup'>
        <form  className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{current}</h2>
                <img src={assets.cross_icon} onClick={()=>setLogin(false)} alt="" />
            </div>
            <div className="login-popup-input">
                {current==="Login"?<></>:<input type="text" placeholder='Your name' required />}
                
                <input type='email' placeholder='Your E-mail' required/>
                <input type="password" placeholder='password' required />
            </div>
            <button>{current==="Sign up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agre to the terms of use & privacy policy</p>
            </div>
            {current ==="Login"?<p>Create a new account 
                ? <span onClick={()=>setCurrent("Sign up")}>Click here</span></p>
                :<p>Alredy have an account?<span onClick={()=>setCurrent("Login")}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default Loginpopup
