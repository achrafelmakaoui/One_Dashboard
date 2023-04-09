import React, { useState } from "react";
import axios from "axios";
import './UpdateData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const UpdateData = ({ id }) => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
      });
    
      const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.put(`https://oneeapi.onrender.com/api/auth/${id}`, user);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div className='UpdateData'>
        <div className='UpdateIU'>
            <h1>Modifier Les Informations Personnelles</h1>
            <form onSubmit={handleSubmit}>
                <div className='UpdateInputs'> 
                    <div className='inputusername'>
                        <label>Nom*</label><br/>
                        <input type='text' name="username" value={user.username} onChange={handleChange} autoComplete="username" placeholder='Entre Nom...'/>
                    </div>
                    <div className='inputemail'>
                        <label>Email*</label><br/>
                        <input type='email' name="email" value={user.email} onChange={handleChange} autoComplete="email" placeholder='Entre Email...'/>
                    </div>
                </div>
                <div className='passwordinput'>
                    <label>Mot De Passe*</label><br/>
                    <input type='password' name="password" value={user.password} onChange={handleChange} autoComplete="current-password" placeholder='Entre Mot De Passe...'/>
                </div>
                <div className='divbtnupd'>
                    <button type='submit' className='btnUpdate'>
                        <FontAwesomeIcon icon={faPenToSquare} className='updateicon' />
                        Modifier 
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UpdateData