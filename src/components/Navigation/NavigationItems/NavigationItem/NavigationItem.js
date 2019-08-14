import React from 'react';
import "./NavigationItem.css"

const navigationItem = props => {

    const isActive = props.active ? "active" :  null;

    return (
        <li className="NavigationItem">
            <a href={props.link}
                className={isActive} >
                {props.children}</a>
        </li>
    )
}


export default navigationItem;
