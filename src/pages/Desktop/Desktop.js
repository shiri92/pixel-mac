import React, { Component } from 'react';
import DesktopHeader from '../../cmps/DesktopHeader/DesktopHeader';

import Background from '../../assets/img/background-desktop.jpg';

class Desktop extends Component {
    render() {
        return (
            <div className="desktop" style={{ backgroundImage: `url(${Background})` }}>
                <DesktopHeader></DesktopHeader>
            </div>
        );
    }
}

export default Desktop;
