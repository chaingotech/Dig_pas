class TokenService {
  getTokens (): Record<'accessToken'|'refreshToken', string|null> {
    const storedAuthData = localStorage?.getItem?.('auth-data') as string
    let data = {
      accessToken: null,
      refreshToken: null
    }
    try {
      const parsedData = JSON.parse(storedAuthData || "{}") || {}
      data = {
        accessToken: parsedData?.accessToken || null,
        refreshToken: parsedData?.refreshToken || null
      }
    } catch (_err) {
      data = {
        accessToken: null,
        refreshToken: null
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

  setAuthData (data: Record<'accessToken'|'refreshToken', string|null>) { // setUser

    localStorage.setItem('auth-data', JSON.stringify(data));
  }

  removeAuthData () { // removeUser
    localStorage.removeItem('auth-data');
  }
}

export default new TokenService();