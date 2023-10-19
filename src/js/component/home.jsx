import React, { useState, useEffect } from 'react'
import { SecondsCounter } from './SecondsCounter'
import '../../styles/index.css'
import { CounterBonus } from './bonus/CounterBonus'

const Home = () => {
  const alertTime = 10
  const countdown = 20
  const [seconds, setSeconds] = useState(0)
  const [timer, setTimer] = useState(countdown)
  const [isActive, setisActive] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  // Efecto contador
  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  // Efecto contador bonus (decremento)
  useEffect(() => {
    let intervalId
    if (isActive) {
      intervalId = setInterval(() => {
        if (timer > 0) {
          setTimer((prev) => prev - 1)
        } else {
          return
        }
      }, 1000)
    } else {
      clearInterval(intervalId)
    }
    return () => clearInterval(intervalId)
  }, [isActive, timer])

  //   alarm effect
  useEffect(() => {
    if (timer === alertTime) {
      setShowAlert(true)

      // Ocultar la alerta después de 5 segundos
      setTimeout(() => {
        setShowAlert(false)
      }, 5000)
    }
  }, [timer, alertTime])

  function handleStart() {
    setisActive(true)
  }

  function handleStop() {
    setisActive(false)
  }

  function handleReset() {
    setisActive(false)
    setTimer(countdown)
    setShowAlert(false)
  }

  const formatCountdown = (countdown) => {
    const formattedCountdown = countdown.toString().padStart(6, '0')
    return formattedCountdown
  }

  return (
    <>
      <SecondsCounter seconds={formatCountdown(seconds)} />
      <h2>Counter Bonus 🔥</h2>
      <CounterBonus
        timer={formatCountdown(timer)}
        handleReset={handleReset}
        handleStart={handleStart}
        handleStop={handleStop}
      />
      {showAlert && (
        <div className='alert alert-warning'>
          ¡Tiempo de alerta alcanzado! ({alertTime} segundos)
        </div>
      )}
    </>
  )
}

export default Home
