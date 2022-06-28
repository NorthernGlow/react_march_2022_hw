import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const getUsers = () => {
 return  axiosInstance.get('').then(value => value);
}

const getUserPosts = (id) => axiosInstance.get('/'+id+'/posts').then(value => value);

export {getUsers,getUserPosts}
