import axios from 'axios'

const url = "https://signup-backend-staging.up.railway.app/users/"

const api = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api