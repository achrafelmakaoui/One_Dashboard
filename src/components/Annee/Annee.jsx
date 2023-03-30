import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Annee.css';
import AnDelete from '../AnneeDelete/AnDelete';

const Annee = () => {
  const [annee, setAnnee] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/annee/find')
      .then(response => {
        setAnnee(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
     <h2 className='anneedas'>Année D'analyse: {annee ? annee.Annee_Analyse:'Loading...'} {annee && annee._id && <AnDelete id={annee._id} />}</h2>
     
    </>
  );
}

export default Annee;
