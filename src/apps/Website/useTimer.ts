import { useEffect, useState } from "react";

const useTimer = () => {

const [timer, setTimer] = useState(0)
const [isRunnings, setIsRunning] = useState(false)

    const handleReset = () => {
        setTimer(0)
    }

    useEffect(() => {
    if(isRunnings) {
        const interval = setInterval(() => {
            setTimer((prev) => prev + 1)
        },10)
        return () => clearInterval(interval)
    }
    },[isRunnings])
    return {
    timer,
    isRunnings,
    setIsRunning,
    handleReset
    }
}

export default useTimer

