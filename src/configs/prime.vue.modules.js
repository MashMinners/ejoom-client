import InputText from 'primevue/inputtext';
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Fieldset from 'primevue/fieldset';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ('primevue/resources/themes/tailwind-light/theme.css')
import ('primevue/resources/primevue.min.css')
import ('primeicons/primeicons.css')
export default {
  modules: [
      InputText, Button, Toolbar, Fieldset, DataTable, Column
  ],
  options: [
      {
          ripple: true
      }
  ]
}
