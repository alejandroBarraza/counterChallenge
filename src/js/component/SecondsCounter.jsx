import React from 'react'
import '../../styles/index.css'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SecondsCounter = ({ seconds }) => {
  return (
    <div className='container-fluid p-0 d-flex bg-dark justify-content-center align-items-center'>
      <FontAwesomeIcon icon={faClock} color='white' size='6x' />

      <p className='text-white p-5 space'>
        <strong>{seconds}</strong>
      </p>
    </div>
  )
}
