import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:5027/"
})

export default api