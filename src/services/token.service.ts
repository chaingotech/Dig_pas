type AuthData = {
  accessToken: string|null
  refreshToken: string|null
  organizationId: string|null
  userId: string|null
}

class TokenService {
  getTokens (): AuthData {
    const storedAuthData = localStorage?.getItem?.('auth-data') as string
    let data = {
      accessToken: null,
      refreshToken: null,
      organizationId: null,
      userId: null
    }
    try {
      const parsedData = JSON.parse(storedAuthData || "{}") || {}
      data = {
        accessToken: parsedData?.accessToken || null,
        refreshToken: parsedData?.refreshToken || null,
        organizationId: parsedData?.organizationId || null,
        userId: parsedData?.userId || null
      }
    } catch (_err) {
      data = {
        accessToken: null,
        refreshToken: null,
        organizationId: null,
        userId: null
      }
    }
    return data
  }

  getLocalRefreshToken() {
    const { refreshToken } = this.getTokens()
    return refreshToken
  }

  getLocalAccessToken() {
    const { accessToken } = this.getTokens()
    return accessToken
  }

  updateLocalAccessToken(token: string) {
    const data = this.getTokens()
    data.accessToken = token;
    localStorage.setItem('auth-data', JSON.stringify(data));
  }

  getAuthData () { // getUser
    return this.getTokens()
  }

  setAuthData (data: AuthData) { // setUser

    localStorage.setItem('auth-data', JSON.stringify(data));
  }

  removeAuthData () { // removeUser
    localStorage.removeItem('auth-data');
  }
}

export default new TokenService();