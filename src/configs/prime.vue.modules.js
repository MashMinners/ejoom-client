import InputText from 'primevue/inputtext';
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Fieldset from 'primevue/fieldset';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tooltip from 'primevue/tooltip';
import Dialog from 'primevue/dialog';
import InputNumber from 'primevue/inputnumber';
import ToastService from 'primevue/toastservice';
import Textarea from 'primevue/textarea';
import ('primevue/resources/themes/tailwind-light/theme.css')
import ('primevue/resources/primevue.min.css')
import ('primeicons/primeicons.css')
export default {
  modules: [
      InputText, Button, Toolbar, Fieldset, DataTable, Column, Dialog, InputNumber, Textarea
  ],
  directives: [
        {name: "tooltip", subject: Tooltip}
    ],
  options: [
      {
          ripple: true
      }
  ],
  services: [
      {name: "toast", subject: ToastService}
  ]
}
