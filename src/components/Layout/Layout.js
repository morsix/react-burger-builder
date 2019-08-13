import React, { Fragment } from 'react';
import "./Layout.css"

const layout = (props) =>
    (
        <Fragment>
            <div>
                Toolbar, SideDrawer, Backdrop
            </div>

            <main className="Content">
                {props.children}
            </main>
        </Fragment>
    )

export default layout;