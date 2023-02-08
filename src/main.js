import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import PrimeVueModules from "@/configs/prime.vue.modules";
import store from "@/store";


const app = createApp(App)
app.use(PrimeVue, PrimeVueModules.options[0]);
PrimeVueModules.modules.forEach(component => {
    app.component('Prime'+component.name, component)
})
PrimeVueModules.directives.forEach(directive => {
    app.directive(directive.name, directive.subject)
})
PrimeVueModules.services.forEach(service => {
    app.use(service.name, service.subject)
})
app.use(store);
app.mount('#app');
