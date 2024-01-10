import ReactSlider from 'react-slider' // imported slider
import "./Slider.css"
import SettingsContext from "./SettingsContext"
import { useContext } from "react"
import BackButton from "./BackButton"

function Settings() {
    const settingsInfo = useContext(SettingsContext)
    return (
        <div style={{textAlign:'left'}}>

            <div className="label">work: {settingsInfo.workMinutes}:00 minutes</div>
                {/* slider for work minutes */}
                <ReactSlider 
                    className={'slider'}
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={settingsInfo.workMinutes}
                    onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
                    min={1}
                    max={120} // 2 hours
                />

            <div className="label">break: {settingsInfo.breakMinutes}:00 minutes</div>
                {/* slider for break minutes */}
                <ReactSlider 
                    className={'slider green'}
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={settingsInfo.breakMinutes}
                    onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
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