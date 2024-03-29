import ReactSlider from 'react-slider' // imported slider
import "./SettingsSlider.css"
import SettingsContext from "./SettingsContext"
import { useContext } from "react"
import BackButton from "./BackButton"

function Settings() {
    const settingsInfo = useContext(SettingsContext)
    
    return (
        <div style={{textAlign:'left'}}>
        <h2>Settings</h2>
            <div className="label">{settingsInfo.workMinutes} minute activity</div>
                {/* slider for work minutes */}
                <ReactSlider 
                    className={'slider'}
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={settingsInfo.workMinutes}
                    onChange={newWorkValue => settingsInfo.setWorkMinutes(newWorkValue)}
                    min={1}
                    max={120} // 2 hours
                />

            <div className="label">{settingsInfo.breakMinutes} minute break</div>
                {/* slider for break minutes */}
                <ReactSlider 
                    className={'slider green'}
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={settingsInfo.breakMinutes}
                    onChange={newBreakValue => settingsInfo.setBreakMinutes(newBreakValue)}
                    min={1}
                    max={120} // 2 hours
                />
            <div style={{textAlign:'center', marginTop:'20px'}}>
                <BackButton onClick={() => settingsInfo.setShowSettings(false)}/>
            </div>
        </div>
    )
}

export default Settings;