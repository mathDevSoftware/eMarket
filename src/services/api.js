import axios from 'axios'

const api = axios.create({
    baseURL: "http://192.168.1.22:5027/"
})

export default api