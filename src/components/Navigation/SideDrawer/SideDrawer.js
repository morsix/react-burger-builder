import React, { Fragment } from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import "./SideDrawer.css"

const sideDrawer = props => {

    return (
        <Fragment>
            <Backdrop show></Backdrop>
            <div className="SideDrawer">
                <div className="LogoSideDrawer">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>

            </div>
        </Fragment>
    )
}


export default sideDrawer;
