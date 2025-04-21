import { Route, Routes } from "react-router-dom";
import { Channels } from "../channels/Channels";
import { Settings } from "../settings/Settings";

export const Content = ({channels, getChannels}) => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="channels" element={<Channels channels={channels}/>}/>
                <Route path="settings" element={<Settings/>}/>
            </Routes>
        </div>
    )
}
