<template>
  <prime-dialog v-model:visible="display"  :style="{width: '30vw'}" :modal="true" :closable="false">
    <template #header>
      <h4>Добавить нового сотрудника</h4>
    </template>
    <div class="card mt-2">
      <div class="p-fluid grid">
        <div class="field col-12">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-user"></i>
            </span>
            <span class="p-float-label">
              <prime-input-text id="surname" :class="[form.surname]" type="text" v-model="employee.employeeSurname" />
              <label for="surname">Фамилия</label>
            </span>
          </div>
          <small v-if="form.surname!==''" class="p-error">Фамилию заполни да?!</small>
        </div>
        <div class="field col-12">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-user"></i>
            </span>
            <span class="p-float-label">
              <prime-input-text id="first-name" :class="[form.firstName]" type="text" v-model="employee.employeeFirstName" />
              <label for="first-name">Имя</label>
            </span>
          </div>
          <small v-if="form.firstName!==''" class="p-error">Имя заполни да?</small>
        </div>
        <div class="field col-12">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-user"></i>
            </span>
            <span class="p-float-label">
              <prime-input-text id="second-name" :class="[form.secondName]" type="text" v-model="employee.employeeSecondName" />
              <label for="second-name">Отчество</label>
            </span>
          </div>
          <small v-if="form.secondName!==''" class="p-error">Отчество заполни да?</small>
        </div>
        <div class="field col-12">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-phone"></i>
            </span>
            <span class="p-float-label">
             <prime-input-mask id="phone-number" v-model="employee.phoneNumber" mask="+9(999)999-99-99" />
              <label for="phone-number">Телефон</label>
            </span>
          </div>
        </div>
        <div class="field col-12">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-at"></i>
            </span>
            <span class="p-float-label">
              <prime-input-text id="email" type="text" v-model="employee.email" />
              <label for="email">Почта</label>
            </span>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <prime-button icon="pi pi-check" class="p-button-success p-button-sm" @click="createEmployee"/>
      <prime-button icon="pi pi-times" class="p-button-danger p-button-sm" @click="close"/>
    </template>
  </prime-dialog>
  <prime-toast position="top-left" group="tl"></prime-toast>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "CreateEmployeeDialog",
  data(){
    return {
      employee: {
        employeeSurname: '',
        employeeFirstName: '',
        employeeSecondName: '',
        employeePhoneNumber: '',
        employeeEmail: ''
      },
      form: {
        surname: '',
        firstName: '',
        secondName: ''
      }
    }
  },
  methods:{
    ...mapActions({
      create: "createEmployee"
    }),
    createEmployee(){
      if(this.employee.employeeSurname.length === 0 || this.employee.employeeFirstName.length === 0 || this.employee.employeeSecondName.length === 0){
        for (let k in [this.employee.employeeSurname, this.employee.employeeFirstName, this.employee.employeeSecondName]){
          this.employee.employeeSurname === '' ? this.form.surname = 'p-invalid' : ''
          this.employee.employeeFirstName === '' ? this.form.firstName = 'p-invalid' : ''
          this.employee.employeeSecondName === '' ? this.form.secondName = 'p-invalid' : ''
        }
      }
     else{
        this.create(this.employee)
        this.clearForm(this.employee)
      }
    },
    clearForm(){
      for(let k in this.employee) {
        this.employee[k] = '';
      }
      this.form.surname = ''
      this.form.firstName = ''
      this.form.secondName = ''
    },
    ...mapMutations({
      close: "HIDE_CREATE_EMPLOYEE_DIALOG"
    })
  },
  computed:{
    ...mapGetters({
      display: 'createEmployeeDialog'
    })
  }
}
</script>

<style scoped>

</style>