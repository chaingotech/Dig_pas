import getAxiosInstance, {
  AUTH_TOKEN_PATH,
  AUTH_REVOKE_TOKEN_PATH,
  API_CLIENT_ID,
  API_CLIENT_SECRET
} from './instance'

class AuthService {
  refreshTokens (): Promise<Record<'accessToken'|'refreshToken', string|null>|false> {
    const accessToken = localStorage.getItem('token')
    const refreshToken = localStorage.getItem('refresh-token') || null
    if (!(refreshToken && accessToken)) {
      return Promise.resolve(false)
    }
    const instance = getAxiosInstance()
    return instance
      .post(AUTH_TOKEN_PATH, null, {
        params: {
          refresh_token: refreshToken,
          grant_type: 'refresh_token'
        }
      })
      .then((response) => {
        const data = response?.data?.data || {}
        if (data?.attributes?.accessToken) {
          localStorage.setItem('token', `${data.attributes.accessToken}`);
          data.attributes?.refreshToken &&
            localStorage.setItem('refresh-token', `${data.attributes.refreshToken}`);
        }

        return {
          accessToken: data?.attributes?.accessToken || null,
          refreshToken: data?.attributes?.refreshToken || null
        }
      });
  }
  login (payload: Record<'username'|'password', string>): Promise<Record<'accessToken'|'refreshToken', string|null>> {
    const instance = getAxiosInstance()
    
    const fd = new FormData()
    fd.append('grant_type', 'password')
    fd.append('client_id', API_CLIENT_ID)
    fd.append('client_secret', API_CLIENT_SECRET)

    Object.entries(payload)
      .forEach(([key, value]) => {
        fd.append(key, value)
      })

    return instance
      .post(AUTH_TOKEN_PATH, fd)
      .then((response) => {
        const data = response?.data?.data || {}
        if (data?.attributes?.accessToken) {
          localStorage.setItem('token', `${data.attributes.accessToken}`);
          data.attributes?.refreshToken &&
            localStorage.setItem('refresh-token', `${data.attributes.refreshToken}`);
        }

        return {
          accessToken: data?.attributes?.accessToken || null,
          refreshToken: data?.attributes?.refreshToken || null
        }
      });
  }

  logout () {
    const instance = getAxiosInstance()
    localStorage.removeItem('token');
    localStorage.removeItem('refresh-token');
    return instance
    .get(AUTH_REVOKE_TOKEN_PATH)
  }
}

export default new AuthService();