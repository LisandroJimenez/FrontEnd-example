import { Route, Routes } from "react-router-dom";
import { Channels } from "../channels/Channels";
import { Settings } from "../settings/Settings";
import { ChannelView } from "../channels/ChannelView";

export const Content = ({channels, getChannels}) => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="channels" element={<Channels channels={channels}/>}/>
                <Route path="settings" element={<Settings/>}/>
                <Route path='channel/:id' element={<ChannelView getChannels={getChannels}/>}/>
            </Routes>
        </div>
    )
}
