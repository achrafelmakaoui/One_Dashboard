import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const AnDelete = ({ id }) => {
  const [setMessage] = useState('');

  const handleDelete = () => {
    axios.delete(`https://oneeapi.onrender.com/api/annee/${id}`)
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
     <FontAwesomeIcon icon={faTrash} className='trash' style={{ width:'0.95em',height:'0.95em',color:'#ff0000f0',cursor:'pointer' }} onClick={handleDelete}/>
    </>
  );
}

export default AnDelete;
