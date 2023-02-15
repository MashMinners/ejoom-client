<template>
  <div>
    <prime-dialog v-model:visible="display"  :style="{width: '90vw'}" :modal="true" :closable="false">
      <template #header>
        <h4>Добавить запись в журнал</h4>
      </template>
      <div class="card">
        <div class="p-fluid grid">
          <div class="field col-1">
          <span class="p-float-label">
            <prime-input-text id="letter-number" type="text" />
            <label for="number">Номер</label>
          </span>
          </div>

          <div class="field col-3">
          <span class="p-float-label">
            <prime-input-text id="letter-theme" type="text" />
            <label for="letter-theme">Тема письма</label>
          </span>
          </div>

          <div class="field col-2">
          <span class="p-float-label">
            <prime-auto-complete id="employee" v-model="employee" :suggestions="employees" @complete="getEmployees($event)" optionLabel="employeeFullname"></prime-auto-complete>
            <label for="employee">Сотрудник</label>
          </span>
          </div>

          <div class="field col-2">
          <span class="p-float-label">
            <prime-auto-complete id="counterparty"></prime-auto-complete>
            <label for="counterparty">Контрагент</label>
          </span>
          </div>

          <div class="field col-2">
          <span class="p-float-label">
            <prime-input-text type="date" v-model="date" />
          </span>
          </div>

          <div class="field col-2">
          <span class="p-float-label">
            <prime-textarea id="additionally" type="text" />
            <label for="additionally">Дополнительная информация</label>
          </span>
          </div>
        </div>
      </div>
      <template #footer>
        <prime-button label="Сохранить" icon="pi pi-check" class="p-button-success p-button-sm" @click="saveRecord"/>
        <prime-button label="Закрыть" icon="pi pi-check" class="p-button-danger p-button-sm" @click="hideDialog"/>
      </template>
    </prime-dialog>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "CreateRecordDialog",
  data(){
    return {
      employee: ''
    }
  },
  methods: {
    ...mapActions({
      getEmployeesAction: 'getEmployeesAction'
    }),
    ...mapMutations({
      hideDialog: "HIDE_CREATE_RECORD_DIALOG"
    }),
    getEmployees(event){
      this.getEmployeesAction(event.query)
    },
    saveRecord(){
      console.log(this.employee)
    }
  },
  computed: {
    ...mapState({

    }),
    ...mapGetters({
      display: "createRecordDialog",
      date: "currentDate",
      employees: "employees"
    })
  }
}
</script>

<style scoped>

</style>