import { useEffect, useState } from "react";

const useTimer = () => {

const [timer, setTimer] = useState(0)
const [isRunning, setIsRunning] = useState(false)

    const handleReset = () => {
        setTimer(0)
    }

    useEffect(() => {
    if(isRunning) {
        const interval = setInterval(() => {
            setTimer((prev) => prev + 1)
        },10)
        return () => clearInterval(interval)
    }
    },[isRunning])
    return {
    timer,
    isRunning,
    setIsRunning,
    handleReset
    }
}

export default useTimer

