import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from './../../components/UI/Button/Button';
import Input from './../../components/UI/Input/Input';
import * as actions from '../../store/actions/index';
import './Auth.css'

class Auth extends Component {

    state = {
        controls:{
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true, 
                    isEmail: true
                },
                valid: false,
                touched:false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true, 
                    minLength: 6
                },
                valid: false,
                touched:false
            }
        },
        isSignup: true
    }

    checkValidity(value, rules){
        let isValid = true;

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }


    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName] : {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };

        this.setState({
            controls: updatedControls
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }

    switchAuthModeHandler = () =>{
        this.setState(prevState => {
            return {
                isSignup: !prevState.isSignup
            };
        })
    }

    render() {

        const formElementsArray = [];

        for(let key in this.state.controls){
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        const form  = formElementsArray.map( formEl => (
            <Input 
                    key={formEl.id}
                    inputtype = {formEl.config.elementType}
                    elementConfig = {formEl.config.elementConfig}
                    value = {formEl.config.value}
                    invalid = {!formEl.config.valid}
                    shouldValidate={formEl.config.validation}
                    touched={formEl.config.touched}
                    changed={ (event) => this.inputChangedHandler(event, formEl.id)} />
                ));

        return (
            <div className="Auth">
                <form onSubmit={this.submitHandler}>
                {form}
                <Button btnType="Success">Submit</Button>
                </form>
                <Button 
                clicked={this.switchAuthModeHandler}
                btnType="Danger">SWITCH TO {this.state.isSignup ? 'SIGN IN':'SIGN UP'}</Button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAuth:(email,password, isSignUp) => dispatch(actions.auth(email,password,isSignUp))
    }
}

export default connect(null, mapDispatchToProps)(Auth);