import React from 'react'
import './one1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
const One1 = () => {
  const [AlertErr,setAlertErr]=useState(false)
  const [AlertSucc,setAlertSucc]=useState(false)
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!selectedFile) {
    console.log("Please select a file.");
    setAlertSucc(false)
    setAlertErr(true)
    return;
  }
  const formData = new FormData();
  formData.append("file", selectedFile, selectedFile.name);
  try {
    const response = await fetch("https://oneeapi.onrender.com/api/one/upload", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    setAlertErr(false)
    setAlertSucc(true)
  } catch (err) {
    console.error(err);
  }
};

  return (
    <>
    <div className="file-card">
        <div className="file-inputs">
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileInput} name='file'/>
            <button type='submit'>
                <i>
                    <FontAwesomeIcon icon={faPlus} />
                </i>
                Envoyer
            </button>
            </form>
        </div>
        {AlertErr && (<p style={{ color:'red' }}>Veuillez sélectionner un fichier.</p>)}
        {AlertSucc && (<p style={{ color:'green' }}>Le fichier a été envoyé.</p>)}
        <p className="main">Fichiers Pris En Charge</p>
        <p className="info">XLS, XLSX, CSV</p>
    </div>
    </>
  )
}

export default One1