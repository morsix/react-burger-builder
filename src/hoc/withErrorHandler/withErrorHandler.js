import React, { Fragment, Component } from 'react';
import Modal from './../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        constructor(props){
            super(props);
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                })
                return req;
            })

            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error
                })
            })
        }
        
        state = {
            error: null
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({
                error: null
            })
        }

        render() {
            return (
                <Fragment>
                    <Modal 
                    show={this.state.error}
                    modalClosed={this.errorConfirmedHandler}>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                    <WrappedComponent {...this.props}></WrappedComponent>
                </Fragment>
            );
        }
    }
}

export default withErrorHandler;