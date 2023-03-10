import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import setupInterceptores from './services/setupInterceptores'
import "./assets/styles/style.css"
import i18n from './i18n'

createApp(App)
  .use(i18n)
  .use(router)
  .use(store)
  .mount('#app')

setupInterceptores(store)