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
          const response = await axios.put(`http://localhost:5000/api/auth/${id}`, user);
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
                        <label>Username*</label><br/>
                        <input type='text' name="username" value={user.username} onChange={handleChange} autoComplete="username" placeholder='Entre Username...'/>
                    </div>
                    <div className='inputemail'>
                        <label>Email*</label><br/>
                        <input type='email' name="email" value={user.email} onChange={handleChange} autoComplete="email" placeholder='Entre Email...'/>
                    </div>
                </div>
                <div className='passwordinput'>
                    <label>Password*</label><br/>
                    <input type='password' name="password" value={user.password} onChange={handleChange} autoComplete="current-password" placeholder='Entre Password...'/>
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