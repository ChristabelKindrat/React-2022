import axios from "axios";
const axiosInstance = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/users'})
const baseURL = 'https://jsonplaceholder.typicode.com/users';
const getUsers = () => axiosInstance.get('');
const getUser =(id) => fetch(baseURL+'/'+ id);
const getPosts =(id) => fetch(baseURL+ '/'+ 'posts'+'/'+id)
const getCommentUsers =(id) => axiosInstance.get(`/${id}/posts`).then(value => value);

export {getUsers,getUser,getPosts,getCommentUsers}