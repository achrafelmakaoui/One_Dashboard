import React from 'react'
import './Login.css'
import  Sheild from '../../imgs/shieldsu.png'
import logo from '../../imgs/login.png'
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    const [passwordType, setPasswordType] = useState('password');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching} = useSelector((state) => state.user);

    const handleClick = (e) => {
      e.preventDefault();
      login(dispatch, { username, password });
    };
    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
      }
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
            <form className="formulaire">
                <div className="textbox">
                    <input type="text" className='inputLg' onChange={(e) => setUsername(e.target.value)} autoComplete="username" placeholder='Entre Username...'/>
                    <label>Username</label>
                    <FontAwesomeIcon icon={faUserShield} className='usr'/>
                </div>
                <div className="textbox">
                    <input type={passwordType} className='inputLg' onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" placeholder='Entre Password...'/>
                    <label>Password</label>
                    <span class="material-symbols-outlined" id='key'> key </span>
                </div>
                <div className='btnbnr'>
                    <button type="submit" onClick={handleClick} disabled={isFetching}>
                        Login
                        <span class="material-symbols-outlined"> arrow_forward </span>
                    </button>
                    <button id='btnshowpwd' onClick={togglePasswordVisibility}>
                        <span className="material-symbols-outlined"  id='showpwdicon'> 
                            {passwordType === 'password' ? 'visibility' : 'visibility_off'}
                        </span>
                    </button>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login