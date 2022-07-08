import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
})

const getPosts = () => axiosInstance.get('');

const createUser = (obj) => {
    return fetch("https://jsonplaceholder.typicode.com/users",
        {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(value => value.json())
}

const createComment = (obj) => {
    return fetch("https://jsonplaceholder.typicode.com/comments",
        {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(value => value.json())
}

export {createComment, createUser,getPosts}
