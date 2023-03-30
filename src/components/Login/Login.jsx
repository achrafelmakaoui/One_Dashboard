import React from 'react'
import './Login.css'
import  Sheild from '../../imgs/shieldsu.png'
import logo from '../../imgs/login.png'
const Login = () => {
  return (
    <div className='Login'>
        <div className='LoginDS'>
            <div className='LoginImg'>
                <img src={Sheild} alt='sheild'/>
                <h1>One Dashboard</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sapiente quaerat reiciendis libero possimus odio, inventore at iusto aspernatur. Enim.</p>
            </div>
        </div>
        <div className='LoginDiv'>
            <div className='LoginInfo'>
                <div className='imglg'>
                     <img src={logo} alt='logo'/>
                </div>
                <h1>Hello Again!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ratione.  dolor sit amet consectetur adipisicing elit. Minus, ratione.</p>
            </div>
            <div className='LoginForm'>
            <form class="formulaire">
                <div class="textbox">
                    <input type="email" required  className='inputLg' />
                    <label>Email</label>
                    <span class="material-symbols-outlined"> email </span>
                </div>
                <div class="textbox">
                    <input type="password" required className='inputLg' />
                    <label>Password</label>
                    <span class="material-symbols-outlined"> key </span>
                </div>
                <button type="submit">
                    Login
                    <span class="material-symbols-outlined"> arrow_forward </span>
                </button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login