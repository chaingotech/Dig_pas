import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import setupInterceptores from './services/setupInterceptores'
import "./assets/styles/style.css"
import i18n from './i18n'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VueProgressBar from "@aacassandra/vue3-progressbar"

const options = {
  color: "#6a3534",
  failedColor: "rgb(47, 19, 13)",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

createApp(App)
  .use(i18n)
  .use(VueProgressBar, options)
  .use(router)
  .use(store)
  .mount('#app')

setupInterceptores(store)