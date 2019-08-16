import React, { Component } from 'react'
import Button from './../../../components/UI/Button/Button';
import axios from '../../../axios-orders'
import "./ContactData.css"
import Spinner from './../../../components/UI/Spinner/Spinner';
import Input from './../../../components/UI/Input/Input';

export default class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postCode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        })

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Cele Jemcheru",
                address: {
                    street: "Roady road",
                    zipCode: "4332",
                    country: "United Kingdom"
                },
                email: "test@test.com"
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(res => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                    <Input inputtype="input" type="text" name="name" placeholder="Your name" />
                    <Input inputtype="input" type="email" name="email" placeholder="Your email" />
                    <Input inputtype="input" type="text" name="street" placeholder="Street" />
                    <Input inputtype="input" type="text" name="postCode" placeholder="Post code" />
                    <Button btnType="Success" clicked={this.orderHandler}> ORDER </Button>

                </form>
        );
        if(this.state.loading){
            form =<Spinner/>;
        }
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}
