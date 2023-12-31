import React, { useState, useEffect } from 'react'
import getRemainingTime from '../../utils/counterDown'
import CounterCard from './CounterCard'

const CounterContainer = ({ countDownLimit }) => {
    const defaultRemainingTime = {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    }
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)
    const updateRemainingTime = (countdown) => {
        setRemainingTime(getRemainingTime(countdown))
    }
    useEffect(() => {
        const timer = setInterval(() => {
            updateRemainingTime(countDownLimit)
        }, 1000)

        return () => clearInterval(timer)
    }, [countDownLimit])

    return (
        <div className='flex items-center  justify-center gap-x-6 sm:gap-x-20' >
            <CounterCard time="days" timeLeft={remainingTime.days} />
            <CounterCard time="hours" timeLeft={remainingTime.hours} />
            <CounterCard time="minutes" timeLeft={remainingTime.minutes} />
            <CounterCard time="seconds" timeLeft={remainingTime.seconds} />
        </div>
    )
}

export default CounterContainer