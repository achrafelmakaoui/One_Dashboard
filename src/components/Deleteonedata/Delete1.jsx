import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Delete1.css'
import axios from 'axios'
import { useState } from 'react'
const Delete1 = () => {
    const [AlertErr,setAlertErr]=useState(false)
    const [AlertSucc,setAlertSucc]=useState(false)
    const handleDeleteAllDocuments = async () => {
        try {
          await axios.delete("https://oneeapi.onrender.com/api/allonedata/Delete");
          console.log("All documents deleted successfully");
          setAlertErr(false)
          setAlertSucc(true)
        } catch (err) {
          console.error(err);
          setAlertErr(true)
          setAlertSucc(false)
        }
      };
  return (
    <div className='btndeletedata'>
        <button className='btndeleteall'onClick={handleDeleteAllDocuments}>
            <FontAwesomeIcon icon={faTrash} className='i'/>
            Supprimer Tous Les Données
        </button>
        {AlertErr && (<p style={{ color:'red' }}>Oops! Les Données Ne Pas Supprimer.</p>)}
        {AlertSucc && (<p style={{ color:'green' }}>Suppression De Données Réussi.</p>)}
    </div>
  )
}
export default Delete1