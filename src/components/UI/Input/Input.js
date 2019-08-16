import React from 'react';
import "./Input.css"

const input = (props) => {
    let inputElement = null;

    switch(props.inputtype) {
        case('input'):
            inputElement = <input 
            className="Input" 
            {...props.elementConfig} 
            value={props.value}/>
            break;
        case('textarea'):
            inputElement = <textarea 
            className="Input" 
            {...props.elementConfig}
            value={props.value}/>
            break;
        default:
            inputElement = <input 
            className="Input" 
            {...props.elementConfig}
            value={props.value}/>
    }
    return (
        <div>
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;
