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
              <prime-input-text id="inputgroup" type="text" v-model="employee.surname" />
              <label for="inputgroup">Фамилия</label>
            </span>
          </div>
        </div>
        <div class="field col-12">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-user"></i>
            </span>
            <span class="p-float-label">
              <prime-input-text id="inputgroup" type="text" v-model="employee.firstName" />
              <label for="inputgroup">Имя</label>
            </span>
          </div>
        </div>
        <div class="field col-12">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-user"></i>
            </span>
            <span class="p-float-label">
              <prime-input-text id="inputgroup" type="text" v-model="employee.secondName" />
              <label for="inputgroup">Отчество</label>
            </span>
          </div>
        </div>
        <div class="field col-12">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-phone"></i>
            </span>
            <span class="p-float-label">
             <prime-input-mask v-model="employee.phoneNumber" mask="+9(999)999-99-99" />
              <label for="inputgroup">Телефон</label>
            </span>
          </div>
        </div>
        <div class="field col-12">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-at"></i>
            </span>
            <span class="p-float-label">
              <prime-input-text id="inputgroup" type="text" v-model="employee.email" />
              <label for="inputgroup">Почта</label>
            </span>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <prime-button label="Сохранить" icon="pi pi-check" class="p-button-sm" @click="createEmployee"/>
    </template>
  </prime-dialog>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CreateEmployeeDialog",
  data(){
    return {
      employee: {
        surname: '',
        firstName: '',
        secondName: '',
        phoneNumber: '',
        email: ''
      }
    }
  },
  methods:{
    ...mapActions({
      create: "createEmployee"
    }),
    createEmployee(){
      this.create(this.employee)
    }
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