import React from 'react'
import './one2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
const One2 = () => {
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
    const response = await fetch("http://localhost:5000/api/oneclient/upload", {
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
    <div className="file-cardd">
        <div className="file-inputss">
          <form onSubmit={handleSubmit}>
              <input type="file" onChange={handleFileInput} name='file'/>
              <button type='submit'>
                  <i>
                      <FontAwesomeIcon icon={faPlus} />
                  </i>
                  Upload File
              </button>
            </form>
        </div>
        {AlertErr && (<p style={{ color:'red' }}>Please select a file.</p>)}
        {AlertSucc && (<p style={{ color:'green' }}>File has been uploaded</p>)}
        <p className="mainn">Fichiers Pris En Charge</p>
        <p className="infoo">XLS, XLSX, CSV</p>
    </div>
    </>
  )
}

export default One2