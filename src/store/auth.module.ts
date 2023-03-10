/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import AuthService from '@/services/auth.service'
import TokenService from '@/services/token.service'

const accessToken = TokenService.getLocalAccessToken()

const initialState = {
  loggedIn: !!accessToken,
  token: accessToken || null
}

type AuthState = {
  loggedIn: boolean
  token: string|null
}

type LoginPayload = {
  username: string
  password: string
}

const AuthModule = {
  namespaced: true,
  state: initialState,
  actions: {
    async login ({ commit }: any, credentials: LoginPayload): Promise<void> {
      console.log('credentials', credentials)
      const data = await AuthService.login(credentials)
      console.log('login data', data)
      data?.accessToken && commit('login', data)
    },
    logout({ commit }: any) {
      AuthService.logout();
      commit('logout');
    },
    refreshToken({ commit }: any, accessToken: string) {
      commit('refreshToken', accessToken);
    }
  },
  mutations: {
    refreshToken (state: AuthState, accessToken: string) {
      state.token = accessToken
      state.loggedIn = true
    },
    login (state: AuthState, data: Record<'accessToken'|'refreshToken', string|null>) {
      state.loggedIn = true;
      state.token = data?.accessToken || null;
    },
    logout (state: AuthState) {
      state.loggedIn = false;
      state.token = null;
    }
  }
}

export default AuthModule