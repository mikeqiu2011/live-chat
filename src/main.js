import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import { auth } from './firebase/config'

let app

auth.onAuthStateChanged(() => { // when page refresh, wait until user login info is fetched
    if (!app) { // if app already created, no need to recreate
        app = createApp(App).use(router).mount('#app')
    }

})

