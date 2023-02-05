import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import PrimeVueModules from "@/configs/prime.vue.modules";

const app = createApp(App)
app.use(PrimeVue);
PrimeVueModules.forEach(component => {
    app.component('My'+component.name, component)
})
app.mount('#app')
