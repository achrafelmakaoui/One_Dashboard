import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons'
import './Button.css'
import { useState } from 'react'
import axios from 'axios'
const Button = () => {
    const [ data ,setData] = useState(null);
    const [error, setError] = useState(null);
    const [ AlertErr, setAlertErr]= useState(false)
    const [ AlertSucc, setAlertSucc]= useState(false)

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/one/my-data');
      setData(response.data);
      setAlertErr(false)
      setAlertSucc(true)
    } catch (error) {
      setError(error)
      setAlertErr(true)
      setAlertSucc(false)
    }
  };
  return (
    <div className='btngetdata'>
        <button className='btngetall' onClick={fetchData}>
            <FontAwesomeIcon icon={faCodePullRequest} className='i' />
            Charger Tous Les Données
        </button>
        {AlertErr && (<p style={{ color:'red' }}>Oops! Les Données Ne Pas Charger.</p>)}
        {AlertSucc && (<p style={{ color:'green' }}>Chargement De Données Réussi.</p>)}
    </div>
  )
}
export default Button