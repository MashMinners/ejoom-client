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
            <prime-input-text id="letter-number" v-model="record.letterNumber" type="text" />
            <label for="letter-number">Номер</label>
          </span>
          </div>

          <div class="field col-3">
          <span class="p-float-label">
            <prime-input-text id="letter-theme" v-model="record.letterHeader" type="text" />
            <label for="letter-theme">Тема письма</label>
          </span>
          </div>

          <div class="field col-2">
          <span class="p-float-label">
            <prime-auto-complete id="employee" v-model="employee" loadingIcon="pi pi-compass" :delay="1000"
                                 :suggestions="employees" @complete="getEmployees($event)"
                                 optionLabel="employeeFullname">

            </prime-auto-complete>
            <label for="employee">Сотрудник</label>
          </span>
          </div>

          <div class="field col-2">
          <span class="p-float-label">
           <prime-auto-complete id="counterparty" v-model="counterparty" loadingIcon="pi pi-compass" :delay="1000"
                                :suggestions="counterparties" @complete="getCounterparties($event)"
                                optionLabel="counterpartyName">

            </prime-auto-complete>
            <label for="counterparty">Контрагент</label>
          </span>
          </div>

          <div class="field col-2">
          <span class="p-float-label">
            <prime-input-text type="date" v-model="record.registrationDate" />
          </span>
          </div>

          <div class="field col-2">
          <span class="p-float-label">
            <prime-textarea id="additionally" v-model="record.additionally" type="text" />
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
      employee: '',
      counterparty: '',
      record: {
        letterNumber: '',
        letterHeader: '',
        additionally: '',
        registrationDate: ''

      }
    }
  },
  methods: {
    ...mapActions({
      getEmployeesAction: 'getEmployeesAction',
      getCounterpartiesAction: 'getCounterpartiesAction',
      addRecordAction: 'addRecordAction'
    }),
    ...mapMutations({
      hideDialog: "HIDE_CREATE_RECORD_DIALOG"
    }),
    getEmployees(event){
      if(event.query.length > 3){
        this.getEmployeesAction(event.query)
      }
    },
    getCounterparties(event){
      if(event.query.length > 3){
        this.getCounterpartiesAction(event.query)
      }
    },
    saveRecord(){
      this.addRecordAction({'employee': this.employee, 'counterparty':this.counterparty, 'record': this.record})
    }
  },
  computed: {
    ...mapState({

    }),
    ...mapGetters({
      display: "createRecordDialog",
      date: "currentDate",
      employees: "employees",
      counterparties: "counterparties"
    })
  }
}
</script>

<style scoped>

</style>