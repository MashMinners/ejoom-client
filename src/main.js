import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import PrimeVueModules from "@/configs/prime.vue.modules";


const app = createApp(App)
app.use(PrimeVue, PrimeVueModules.options[0]);
PrimeVueModules.modules.forEach(component => {
    app.component('Prime'+component.name, component)
})
app.mount('#app')
