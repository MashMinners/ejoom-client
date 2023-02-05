import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Sidebar from 'primevue/sidebar';
import SpeedDial from 'primevue/speeddial';
//Table
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';                     //optional for row
import Dock from 'primevue/dock';
import SelectButton from 'primevue/selectbutton';

import router from './router'

import ('primevue/resources/themes/bootstrap4-light-blue/theme.css')
import ('primevue/resources/primevue.min.css')
import ('primeicons/primeicons.css')


const app = createApp(App)
app.use(PrimeVue);
app.component('MyInputText', InputText)
app.component('MyButton', Button)
app.component('MyToolbar', Toolbar)
app.component('MySidebar', Sidebar)
app.component('MySpeedDial', SpeedDial)
//Table
app.component('MyDataTable', DataTable)
app.component('MyColumn', Column)
app.component('MyColumnGroup', ColumnGroup)
app.component('MyRow', Row)
//Dock
app.component('MyDock', Dock)
app.component('MySelectButton', SelectButton)
app.use(router);
app.mount('#app')
