import React from 'react';
import "./Input.css"

const input = (props) => {
    let inputElement = null;
    const inputClasses = ['Input'];

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push('Invalid')
    }

    switch(props.inputtype) {
        case('input'):
            inputElement = <input 
            className={inputClasses.join(' ')}
            {...props.elementConfig} 
            value={props.value} onChange={props.changed}/>
            break;
        case('textarea'):
            inputElement = <textarea 
            className={inputClasses.join(' ')}
            {...props.elementConfig}
            value={props.value} onChange={props.changed}/>
            break;
        case('select'):
            inputElement = (<select 
            className={inputClasses.join(' ')}
            value={props.value} onChange={props.changed}>
               {props.elementConfig.options.map(op =>(
                   <option key={op.value} value={op.value}>
                       {op.displayValue}
                   </option>
               ))}
            </select>
            );
            break;
        default:
            inputElement = <input 
            className={inputClasses.join('')}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}/>
    }
    return (
        <div>
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;
