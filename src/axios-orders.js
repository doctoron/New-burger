import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-build-a-burger-9884a.firebaseio.com/'
});

export default instance;