import React, { Fragment } from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import "./SideDrawer.css"

const sideDrawer = props => {
    let attachedClasses = ["SideDrawer", "Close"];
    if(props.open){
        attachedClasses = ["SideDrawer", "Open"]
    }
    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
            <div className={attachedClasses.join(' ')}>
                <div className="LogoSideDrawer">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth} ></NavigationItems>
                </nav>

            </div>
        </Fragment>
    )
}


export default sideDrawer;
