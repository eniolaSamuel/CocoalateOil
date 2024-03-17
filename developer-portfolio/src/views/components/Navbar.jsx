import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/monogram-logo.svg'

const Navbar = () => {
    return(
        <div className="nav-main-frame">
            <div className="logo-frame">
                <img src={Logo}
                     alt={Logo}
                     className="logo-image"/>
            </div>
            <div className="nav-links-frame"></div>
        </div>
    )
}

export default Navbar;