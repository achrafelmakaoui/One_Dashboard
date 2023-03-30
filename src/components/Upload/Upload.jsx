import React from 'react'
import One1 from '../one1/one1'
import One2 from '../one2/one2'
import './Upload.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
const Upload = () => {
  return (
    <div className='upload'>
        <div className='one1'>
          <div className='headinfo'>
              <h3>MWH. KDH. PTF Data</h3>
              <FontAwesomeIcon icon={faCloudArrowUp} className='i'/>
          </div>
          <One1/>
        </div>
        <div className='one2'>
          <div className='headinfo'>
            <h3>Nomber De Client Data</h3>
            <FontAwesomeIcon icon={faCloudArrowUp} className='i'/>
          </div>
          <One2/>
        </div>
    </div>
  )
}

export default Upload