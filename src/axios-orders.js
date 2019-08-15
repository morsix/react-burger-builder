import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-max-burger-builder-acb42.firebaseio.com/'
});

export default instance;