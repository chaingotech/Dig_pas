import axiosInstance, {
  AUTH_TOKEN_PATH,
  AUTH_REVOKE_TOKEN_PATH
} from './api'
import TokenService from './token.service'

class AuthService {
  login (payload: Record<'username'|'password', string>): Promise<Record<'accessToken'|'refreshToken', string|null>> {
    const fd = new FormData()
    fd.append('grant_type', 'password')
    // fd.append('client_id', API_CLIENT_ID)
    // fd.append('client_secret', API_CLIENT_SECRET)

    Object.entries(payload)
      .forEach(([key, value]) => {
        fd.append(key, value)
      })

    return axiosInstance
      .post(AUTH_TOKEN_PATH, fd)
      .then((response) => {
        const data = response?.data?.data || {}
        const { accessToken = null, refreshToken = null } = data?.attributes || {}

        TokenService.setAuthData({
          accessToken: accessToken,
          refreshToken: refreshToken
        })

        return {
          accessToken: accessToken,
          refreshToken: refreshToken
        }
      });
  }

  logout () {
    return axiosInstance
      .get(AUTH_REVOKE_TOKEN_PATH)
      .catch(() => false)
      .finally(() => {
        TokenService.removeAuthData()
      })
  }
}

export default new AuthService();