import axios from 'axios'

const service = axios.create({
  baseURL: 'http://123.207.32.32:8000/api/h8',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    return Promise.reject(err)
  }
)

export default service
