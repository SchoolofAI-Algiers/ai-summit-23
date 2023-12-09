import * as React from 'react'

const CounterCard = ({ time, timeLeft }) => {
    return (
        <div className="flex flex-col items-center gap-4 sm:gap-8 ">
            <div className="relative">
                <span className="absolute font-bold  top-2/3 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center text-2xl sm:text-7xl font-kanit ">
                    {timeLeft}
                </span>
            </div>
            <p className="uppercase text-sm sm:text-base font-kanit">{time}</p>
        </div>
    )
}

export default CounterCard