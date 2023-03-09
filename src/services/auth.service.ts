import getAxiosInstance, {
  AUTH_TOKEN_PATH,
  AUTH_REVOKE_TOKEN_PATH
  // API_CLIENT_ID,
  // API_CLIENT_SECRET
} from './instance'

class AuthService {
  login (payload: Record<'username'|'password', string>) {
    const instance = getAxiosInstance()
    
    const fd = new FormData()
    fd.append('grant_type', 'password')
    // fd.append('client_id', API_CLIENT_ID)
    // fd.append('client_secret', API_CLIENT_SECRET)

    Object.entries(payload)
      .forEach(([key, value]) => {
        fd.append(key, value)
      })

    return instance
      .post(AUTH_TOKEN_PATH, fd)
      .then((response) => {
        const data = response?.data?.data || {}
        if (data?.attributes?.accessToken) {
          localStorage.setItem('token', JSON.stringify(data.attributes.accessToken));
        }

        return data?.attributes?.accessToken || null;
      });
  }

  logout () {
    const instance = getAxiosInstance()

    return instance
    .get(AUTH_REVOKE_TOKEN_PATH)
    .then(() => {
      localStorage.removeItem('token');
    });
  }
}

export default new AuthService();