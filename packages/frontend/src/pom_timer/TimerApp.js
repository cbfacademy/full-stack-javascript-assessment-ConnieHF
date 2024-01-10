import "./TimerApp.css"
import Timer from "./Timer"
import Settings from "./Settings"
import { useState } from "react"
import SettingsContext from "./SettingsContext"

function PomTimer() {

    const [showSettings, setShowSettings] = useState(false)
    const [workMinutes, setWorkMinutes] = useState(45)
    const [breakMinutes, setBreakMinutes] = useState(15)
 

    return (
            <div className="main-div">
                {/* context passes data without having to pass props at every level */}
                <SettingsContext.Provider value={{
                    showSettings, 
                    setShowSettings,
                    workMinutes, // same as workMinutes: workMinutes from useState
                    breakMinutes, // same as breakMinutes: breakMinutes from useState
                    setWorkMinutes,
                    setBreakMinutes
                }}>
                    {showSettings ? <Settings /> : <Timer />}
                </SettingsContext.Provider>
            </div>
    )
}

export default PomTimer;
