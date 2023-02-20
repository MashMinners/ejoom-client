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
              <prime-input-text :class="[form.counterpartyName]" type="text" v-model="counterparty.counterpartyName" />
              <label for="surname">Название контрагента</label>
            </span>
          </div>
          <small v-if="form.counterpartyName!==''" class="p-error">Название заполни да?!</small>
        </div>
      </div>
    </div>
    <template #footer>
      <prime-button icon="pi pi-check" class="p-button-success p-button-sm" @click="createCounterparty"/>
      <prime-button icon="pi pi-times" class="p-button-danger p-button-sm" @click="close"/>
    </template>
  </prime-dialog>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "CreateCounterpartyDialog",
  data(){
    return {
      counterparty: {
        counterpartyName: '',
        counterpartyDescription: ''
      },
      form: {
        counterpartyName: '',
        counterpartyDescription: ''
      }
    }
  },
  methods:{
    ...mapActions({
      create: "createCounterpartyAction"
    }),
    ...mapMutations({
      close: "HIDE_CREATE_COUNTERPARTY_DIALOG"
    }),
    createCounterparty(){
      if(this.counterparty.counterpartyName.length === 0){
        for (let k in [this.counterparty.counterpartyName]){
          this.counterparty.counterpartyName === '' ? this.form.counterpartyName = 'p-invalid' : ''
        }
      }
      else{
        this.create(this.counterparty)
        this.clearForm()
      }
    },
    clearForm(){
      for(let k in this.counterparty) {
        this.counterparty[k] = '';
      }
      this.form.counterpartyName = ''
      this.form.counterpartyDescription = ''

    }
  },
  computed:{
    ...mapGetters({
      display: 'createCounterpartyDialog'
    })
  },
}
</script>

<style scoped>

</style>