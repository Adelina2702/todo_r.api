import axios from "axios"

const BASE_URL = 'https://todolistapi.pythonanywhere.com/api'

export const API = {
    register: (username, email, password) => {
        return axios.post(`${BASE_URL}/users/`, {username, email, password})
    },
    login: (username, password) => { 
        return axios.post(`${BASE_URL}/token/`, {username, password})
    },
    postTodo: (accessToken, data) => {
        return axios.post(`${BASE_URL}/todo/`, data, {
        headers: {
            'Authorization':`Bearer ${accessToken}`
        }
        })
    },
    getTodos: (accessToken) => {
        return axios.get(`${BASE_URL}/todo/`,  {
        headers: {
            'Authorization':`Bearer ${accessToken}`
        }
        })
    },
    getTodo: (id, accessToken, data) => {
        return axios.put(`${BASE_URL}/todo/${id}`, data, {
        headers: {
            'Authorization': `Bearer ${accessToken}`  
        }
        })
    },
    deleteTodo: (id, accessToken) => {
        return axios.delete(`${BASE_URL}/todo/${id}/`,  {
        headers: {
            'Authorization':`Bearer ${accessToken}`
        }
        })
    },
    editTodo: (id, accessToken, data) => {
        return axios.patch(`${BASE_URL}/todo/${id}/`, data, {
        headers: {
            'Authorization': `Bearer ${accessToken}`  
        }
        })
    },
}