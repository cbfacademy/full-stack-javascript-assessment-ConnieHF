import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
// import "./TimerApp.css"
// import "./SVGgradient"
import PlayButton from "./PlayButton"
import PauseButton from "./PauseButton"
import SettingsButton from "./SettingsButton"
import { useContext, useState, useEffect, useRef } from "react"
import SettingsContext from "./SettingsContext"

function Timer() {
    const settingsInfo = useContext(SettingsContext)

    const [isPaused, setIsPaused] = useState(true)
    const [mode, setMode] = useState('work') // work/break/null
    const [secondsLeft, setSecondsLeft] = useState(0)

    const secondsLeftRef = useRef(secondsLeft)
    const isPausedRef = useRef(isPaused)
    const modeRef = useRef(mode)

    // remove 1 second from secondsleft every time the timer component runs
    function tick() {
        // below is equivalent to secondsLeftRef.current = secondsLeftRef.current -1
        secondsLeftRef.current--
        setSecondsLeft(secondsLeftRef.current)
    }

    // the timer component runs every time settingsInfo changes
    useEffect(() => {

        function switchMode() {
            // if the current mode is work, switch to break, otherwise pause
                const nextMode = modeRef.current === 'work' ? 'break' : isPausedRef.current = true
            const nextSeconds = nextMode === 'work' 
                ? settingsInfo.workMinutes * 60
                : settingsInfo.breakMinutes * 60
    
            setMode(nextMode)
            modeRef.current = nextMode
    
            setSecondsLeft(nextSeconds)
            secondsLeftRef.current = nextSeconds
        }


        secondsLeftRef.current = settingsInfo.workMinutes * 60;
        setSecondsLeft(secondsLeftRef.current);


        // when the timer starts, run this function every second, when stopped clear interval
        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return;  // if paused return nothing
            }
            if(secondsLeftRef.current === 0) {
                return switchMode(); // if seconds left is zero, change mode
            }
            tick()
        }, 1000) // speed of timer is seconds

        // return a function that clears interval
        return () => clearInterval(interval)
    }, [settingsInfo])

    const totalSeconds = mode === 'work'
        ? settingsInfo.workMinutes * 60
        : settingsInfo.breakMinutes * 60;
    // calculate percentage of progress bar remaining
    const percentage = Math.round(secondsLeft / totalSeconds * 100)

    // calculate minutes and secconds to show in the progress bar
    let minutes = Math.floor(secondsLeft / 60) // Math.floor rounds down
        if(minutes < 10) minutes =  '0' + minutes
    let seconds = secondsLeft % 60
        if(seconds < 10) seconds = '0' + seconds


    return (
        <div>
            {/* React Circluar Progressbar from npmjs.com */}
            <CircularProgressbar
                value={percentage} 
                text={minutes + ':' + seconds}
                strokeWidth={2}
                background={true}
                backgroundPadding={10}
                styles={buildStyles({
                        // rotation, strokeLinecap,
                        pathColor:mode === 'work' ? '#f54e4e' : '#4aec8c', // red, green
                        textColor: '#fff',
                        trailColor:'rgba(255,255,255,.2)', // transparent white
                        backgroundColor: 'rgba(0,17,82,.8)',
                        // gradientTransform: 90,
                        // startColor: '#fff',
                        // endColor: '#000',
                        })}
            />
            <div style={{marginTop:'-115px'}}>
                {isPaused
                    ? <PlayButton onClick={() => { setIsPaused(false); isPausedRef.current = false; }} /> 
                    : <PauseButton onClick={() => { setIsPaused(true); isPausedRef.current = true; }} />} 
            </div>
            <div style={{marginTop:'20px'}}>
                <SettingsButton onClick={() => {settingsInfo.setShowSettings(true)}}/>
            </div>
        </div>
    )
}

export default Timer;