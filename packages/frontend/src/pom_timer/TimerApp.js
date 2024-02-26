import "./TimerApp.css"
import Timer from "./Timer"
import Settings from "./Settings"
import { useState } from "react"
import SettingsContext from "./SettingsContext"


function PomTimer() {

    const [showSettings, setShowSettings] = useState(false)
    const [workMinutes, setWorkMinutes] = useState(10)
    const [breakMinutes, setBreakMinutes] = useState(5)
 

    return (
            <div className="main-div">
                {/* context passes data without having to pass props at every level */}
                <SettingsContext.Provider value={{
                    showSettings: showSettings, 
                    setShowSettings,
                    workMinutes: workMinutes,
                    setWorkMinutes,
                    breakMinutes: breakMinutes,
                    setBreakMinutes
                }}>
                    {showSettings ? <Settings /> : <Timer />}
                </SettingsContext.Provider>
            </div>
    )
}

export default PomTimer;
