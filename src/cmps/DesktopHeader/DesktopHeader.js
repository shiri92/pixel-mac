import React, { Component } from 'react';
import Apple from '../../assets/img/apple.png';
import Dropbox from '../../assets/img/dropbox.png';
import Wifi from '../../assets/img/wifi.jpg';



class DesktopHeader extends Component {
    render() {
        return (
            <div className="desktop-header">
                <div className="content d-flex justify-content-between">
                    <div className="left d-flex align-items-center">
                        <img className="ml-3" src={Apple} style={{ width: 17 + "px", height: 17 + "px" }} alt="apple" />
                        <div className="ml-3">Finder</div>
                        <div className="ml-3">File</div>
                        <div className="ml-3">Edit</div>
                        <div className="ml-3">View</div>
                        <div className="ml-3">Go</div>
                        <div className="ml-3">Window</div>
                        <div className="ml-3">Help</div>
                    </div>
                    <div className="right d-flex align-items-center">
                        <img className="ml-3" src={Dropbox} style={{ width: 20 + "px", height: 17 + "px" }} alt="dropbox" />
                        <img className="ml-3" src={Wifi} style={{ width: 20 + "px", height: 20 + "px" }} alt="wifi" />
                        <div className="ml-3">Battury</div>
                        <div className="ml-3">Language</div>
                        <div className="ml-3">Date and time</div>
                        <div className="ml-3">Search</div>
                        <div className="ml-3">Siri</div>
                        <div className="mx-3">Settings</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DesktopHeader;
