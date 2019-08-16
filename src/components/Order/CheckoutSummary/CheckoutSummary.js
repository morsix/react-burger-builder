import React from 'react';

import Burger from './../../Burger/Burger';
import Button from './../../UI/Button/Button';
import "./CheckoutSummary.css"

const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients}></Burger>
            </div>
            <Button
                btnType="Danger"
                clicked={props.checkoutCanceled}>Cancel</Button>
            <Button
                btnType="Success"
                clicked={props.checkoutContinued}>Continue</Button>
        </div>
    )
}

export default checkoutSummary;
