import React from 'react'
import One1 from '../one1/one1'
import One2 from '../one2/one2'
import './Upload.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import AnnPost from '../AnneePost/AnnPost'
import Button from '../GetDataBtn/Button'
import Delete1 from '../Deleteonedata/Delete1'

const Upload = () => {
  return (
    <>
    <div className='conta'>
      <div className='upload'>
          <div className='one1'>
            <div className='headinfo'>
                <h3>Chifffre D'affaire Data</h3>
                <FontAwesomeIcon icon={faCloudArrowUp} className='i'/>
            </div>
            <One1/>
          </div>
          <div className='one2'>
            <div className='headinfo'>
              <h3>Portfeuille Client Data</h3>
              <FontAwesomeIcon icon={faCloudArrowUp} className='i'/>
            </div>
            <One2/>
          </div>
          <div className='one3'>
            <div className='headinfo'>
              <h3>Insertion Mois D'analyse</h3>
              <FontAwesomeIcon icon={faCloudArrowUp} className='i'/>
            </div>
            <AnnPost/>
          </div>
      </div>
    </div>
    <Button/>
    <Delete1/>
    </>
  )
}

export default Upload