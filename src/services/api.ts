import axios from 'axios'
// import authHeaders from './auth-header'

export const BASE_URL = 'https://staging.chaingoapi.com'
export const API_KEY = 'oSpMLUAjsuWlf8Czlh1X6Jk0Zd08w1Wf'
export const AUTH_TOKEN_PATH = '/authentication-ms/v1/api/oauth/token'
export const AUTH_REVOKE_TOKEN_PATH = '/authentication-ms/v1/api/oauth/token/revoke'
export const PASSPORTS_PATH = '/voyages-ms/v1/api/voyages'
export const PASSPORTS_PUBLIC_PATH = '/voyages-public-ms/v1/api/voyages'




const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Api-Key': API_KEY
  }
})

export default axiosInstance