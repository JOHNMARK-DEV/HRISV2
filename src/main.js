import './assets/plugins/simplebar/css/simplebar.css'
import './assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css'
import './assets/plugins/metismenu/css/metisMenu.min.css'

import './assets/css/pace.min.css'
import './assets/js/pace.min.js'
import './assets/css/bootstrap.min.css'

import './assets/css/bootstrap-extended.css'
import './assets/css/app.css'
import './assets/css/icons.css'

import './assets/css/dark-theme.css'
import './assets/css/semi-dark.css'
import './assets/css/header-colors.css'

import'./assets/js/jquery.min.js'
import './assets/js/app.js'

 



import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

const app = createApp(App)

app.use(router)

app.mount('#app')
