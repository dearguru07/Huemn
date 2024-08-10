import React from "react";
import { Link } from "react-router-dom";

const FastButton=()=>{
    return <div className="fast-btn">
        <div className="flex-btn">
        <ul>
          <button className="btn">Updates</button>
          <button className="btn">Yours</button>
          <button className="btn">Safe</button>
          <Link to="/fast"><button className="btn">Fast</button></Link>
          <button className="btn">By Google</button>
        </ul>
      </div>
        <div className="f-headings">
            <h1>The <span className="round"><i className="bi bi-speedometer2"></i> fast</span> way to do</h1>
            <h1>things online</h1>
        </div>

        {/* --------------------------topNote---------------------- */}


        <div className="video-flex">
            <div className="scrol-video">
                <video loop autoPlay controls className="video" src="https://www.google.com/chrome/static/videos/dev-components/non-chrome.webm"></video>
            </div>
            
            <div className="v-mainbox">
            <div className="v-inner">
                <div className="inside">
                    <h2>Stay on top</h2>
                    <h2>of tabs</h2>
                </div>
                <div className="v-text">
                    <p>Chrome has tools to help you manage the tabs you’re not quite ready to close. Group, label, and colour-code your tabs to stay organised and work faster.</p>
                </div>
            </div>
            <img className="v-flex-img" src="https://www.google.com/chrome/static/images/homepage/fast/tabs-groups_desktop.webp"></img>
            </div>
            <div className="v-mainbox-two">
                <div className="v-two">
                    <h2>Optimised for</h2>
                    <h2>your device</h2>
                    <p>Chrome is built to work with your device across platforms. That means a smooth experience on whatever you’re working with.</p>
                    <div className="scanner">
                        <img className="qr-code" src="https://www.google.com/chrome/static/images/campaigns/chrome-download/qr-code.webp"></img>
                        <p>Scan for the</p>
                        <p>Chrome app</p>
                    </div>
                </div>
                <div>
                <img className="v-img" src="https://www.google.com/chrome/static/images/homepage/fast/devices_desktop.webp"></img>

                </div>
            </div>
        </div>
    </div>
}
export default FastButton;
