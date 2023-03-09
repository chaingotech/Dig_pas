/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import AuthService from '@/services/auth.service'

const token = localStorage.getItem('token')
const refreshToken = localStorage.getItem('refresh-token')

const initialState = {
  loggedIn: !!token,
  token: token || null,
  refreshToken: refreshToken || null
}

type AuthState = {
  loggedIn: boolean
  token: string|null
  refreshToken: string|null
}

type LoginPayload = {
  username: string
  password: string
}

const AuthModule = {
  namespaced: true,
  state: initialState,
  actions: {
    async refreshTokens ({ commit }: any) {
      const data = await AuthService.refreshTokens()
      data && data?.accessToken && commit('login', data)
    },
    async login ({ commit }: any, credentials: LoginPayload): Promise<void> {
      const data = await AuthService.login(credentials)
      if (data?.accessToken) {
        commit('login', data)
      }
    },
    logout({ commit }: any) {
      AuthService.logout();
      commit('logout');
    }
  },
  mutations: {
    login (state: AuthState, data: Record<'accessToken'|'refreshToken', string|null>) {
      state.loggedIn = true;
      state.token = data?.accessToken || null;
      state.refreshToken = data?.refreshToken || null;
    },
    logout (state: AuthState) {
      state.loggedIn = false;
      state.token = null;
      state.refreshToken = null;
    }
  }
}

export default AuthModule