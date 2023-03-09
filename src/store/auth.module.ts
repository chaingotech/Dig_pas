/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import AuthService from '@/services/auth.service'

const token = localStorage.getItem('token')
const initialState = token
  ? { loggedIn: true, token }
  : { loggedIn: false, token: null };

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
      const token = await AuthService.login(credentials)
      commit('login', token)
    },
    logout({ commit }: any) {
      AuthService.logout();
      commit('logout');
    }
  },
  mutations: {
    login (state: AuthState, token: string) {
      state.loggedIn = true;
      state.token = token;
    },
    logout (state: AuthState) {
      state.loggedIn = false;
      state.token = null;
    }
  }
}

export default AuthModule