import React from 'react'
import { useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './Setting.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Picuser from '../../imgs/asscomer.png'
import UpdateData from '../PwdUPD/UpdateData';

const Setting = () => {
    const dispatch = useDispatch();
   
    const handleLogoutClick = () => {
      dispatch(logout());
    };
    const [PerData,setPerData] = useState('')
    const id = useSelector(state => state.user.currentUser._id);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/auth/${id}`)
          .then(response => {
            setPerData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      });
  return (
    <>
    <div className='ctrstt'>
    <div className='setting'>
        <div className='settinginfo'>
          <div className='userPH'>
            <img src={Picuser} className='photouser' alt='userpic'/>
          </div>
          <div className='userinffoo'>
            <h5 className='EmailH4'><FontAwesomeIcon icon={faEnvelopeCircleCheck}/> {PerData ? PerData.email:'Loading...'} </h5>
            <h5 className='NameH4'><FontAwesomeIcon icon={faUserShield}/> {PerData ? PerData.username:'Loading...'}  </h5>
          </div>
        </div>
        <div className='LogOut'>
          <button onClick={handleLogoutClick} className='btnlogout'>
            <FontAwesomeIcon icon={faRightFromBracket} className='logoutIcon' />
            Se déconnecter
          </button>
        </div>
    </div>
    </div>
    <UpdateData id={PerData._id}/>
    </>
  )
}

export default Setting
