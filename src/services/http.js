import Axios from 'axios'
import { API_URL } from '../constants'

const HTTP = Axios.create({
    baseURL: API_URL
})

export { HTTP }
