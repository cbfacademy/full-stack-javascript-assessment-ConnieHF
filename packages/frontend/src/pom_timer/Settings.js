import ReactSlider from 'react-slider'
import "./Slider.css"

function Settings() {
    return (
        <div style={{textAlign:'left'}}>

            <div className="label">work minutes:</div>
                <ReactSlider 
                    className={'slider'}
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={45}
                    min={1}
                    max={120} // 2 hours
                />

            <div className="label">break minutes:</div>
                <ReactSlider 
                    className={'slider green'}
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={45}
                    min={1}
                    max={120} // 2 hours
                />

        </div>
    )
}

export default Settings;