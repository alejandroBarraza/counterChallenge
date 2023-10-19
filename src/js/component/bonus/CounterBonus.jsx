import React from 'react'
import '../../../styles/index.css'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const CounterBonus = ({
  timer,
  handleStart,
  handleStop,
  handleReset,
}) => {
  return (
    <>
      <div className='container-fluid p-0 d-flex bg-dark justify-content-center align-items-center'>
        <FontAwesomeIcon icon={faClock} color='white' size='6x' />

        <p className='text-white p-5 space'>
          <strong>{timer}</strong>
        </p>
      </div>
      <div className='d-flex justify-content-center align-item-center'>
        <button
          className='btn btn-primary m-1'
          type='button'
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className='btn btn-primary m-1'
          type='button'
          onClick={handleStop}
        >
          Stop
        </button>
        <button
          className='btn btn-primary m-1'
          type='button'
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </>
  )
}
