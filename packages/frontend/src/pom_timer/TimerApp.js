import "./TimerApp.css"
import Timer from "./Timer"
import Settings from "./Settings"
import { useState } from "react"

function PomTimer() {

    const [showSettings, setShowSettings] = useState(true);

    return (
            <div className="main-div">
                {showSettings ? <Settings /> : <Timer />}
            </div>
    );
}

export default PomTimer;
