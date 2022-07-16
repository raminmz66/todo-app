import { createApp } from 'vue'

// Import F7 Bundle
import Framework7 from 'framework7/lite-bundle'

import '../node_modules/framework7/framework7-bundle.min.css'

import '../node_modules/framework7-icons/css/framework7-icons.css';

import '../src/assets/app.css';

// Import F7-Vue Plugin Bundle (with all F7 components registered)
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle'

// Init F7-Vue Plugin
Framework7.use(Framework7Vue);

import App from './App.vue'

const app = createApp(App)

// Register all Framework7 Vue components
registerComponents(app);

app.mount('#app')
