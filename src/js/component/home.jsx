import React from 'react'

import { SecondsCounter } from './SecondsCounter'
import '../../styles/index.css'
//create your first component
const Home = () => {
  const [seconds, setSeconds] = React.useState(0)

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(timerId)
  })

  const formatCountdown = (countdown) => {
    // add 'x amount' of 0(6) to the last countdown and return the value
    const formattedCountdown = countdown.toString().padStart(6, '0')
    return formattedCountdown
  }

  return <SecondsCounter seconds={formatCountdown(seconds)} />
}

export default Home
