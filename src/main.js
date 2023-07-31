import { defaultConfig, plugin } from '@formkit/vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './rout'
createApp(App).use(router).use(plugin, defaultConfig).mount('#app')
