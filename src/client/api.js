import axios from 'axios'

const url = API_URL

const api = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api