import React, { Fragment } from 'react';
import "./Layout.css"
import Toolbar from './../Navigation/Toolbar/Toolbar';
import SideDrawer from './../Navigation/SideDrawer/SideDrawer';

const layout = (props) =>
    (
        <Fragment>
            <Toolbar/>
            <SideDrawer></SideDrawer>
            <main className="Content">
                {props.children}
            </main>
        </Fragment>
    )

export default layout;