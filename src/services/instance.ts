import axios from 'axios'
import authHeaders from './auth-header'

export const BASE_URL = 'https://staging.chaingoapi.com'
export const API_KEY = 'oSpMLUAjsuWlf8Czlh1X6Jk0Zd08w1Wf'
export const AUTH_TOKEN_PATH = '/authentication-ms/v1/api/oauth/token'
export const AUTH_REVOKE_TOKEN_PATH = '/authentication-ms/v1/api/oauth/token/revoke'
export const API_CLIENT_ID = 'zsel0J1YBT6g0QXoqBpBiJt-gpRQ0wHQwZDKlGds4zg'
export const API_CLIENT_SECRET = 'EUythev1HBm1aa4o6PlHvFnO7cjgompKEee3SFF9XfQ'
// export const USER_PATH = '/ma-users-ms/v1/api/users'



const getAxiosInstance = () => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      'Api-Key': API_KEY,
      ...authHeaders()
    }
  })
}

export default getAxiosInstance