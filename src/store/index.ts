import { createStore } from "vuex";
import auth from './auth.module'
import admin from './admin.module'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    admin
  }
})