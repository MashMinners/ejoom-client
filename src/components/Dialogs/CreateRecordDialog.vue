<template>
  <div>
  <prime-dialog v-model:visible="display" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}" :modal="true" :closable="false">
    <template #header>
      <h4>Вы добавляете запись в журнал</h4>
    </template>
    <div class="col-12 md:col-4">
      <h5>Номер письма</h5>
      <div class="p-inputgroup">
           <span class="p-inputgroup-addon">
               <i class="pi pi-user"></i>
           </span>
        <prime-input-number class="p-inputtext-sm" mode="decimal" placeholder="Номер письма"/>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <h5>Тема письма</h5>
      <div class="p-inputgroup">
           <span class="p-inputgroup-addon">
               <i class="pi pi-user"></i>
           </span>
        <prime-input-text class="p-inputtext-sm" placeholder="Тема письма" />
      </div>
    </div>
    <div class="col-12 md:col-4">
      <h5>Сотрудник</h5>
      <div class="p-inputgroup">
           <span class="p-inputgroup-addon">
               <i class="pi pi-user"></i>
           </span>
        <prime-input-text class="p-inputtext-sm" placeholder="Сотрудник" />
      </div>
    </div>
    <div class="col-12 md:col-4">
      <h5>Контрагент</h5>
      <div class="p-inputgroup">
           <span class="p-inputgroup-addon">
               <i class="pi pi-user"></i>
           </span>
        <prime-input-text class="p-inputtext-sm" placeholder="Контрагент" />
      </div>
    </div>
    <div class="col-12 md:col-4">
      <h5>Дата</h5>
      <div class="p-inputgroup">
           <span class="p-inputgroup-addon">
               <i class="pi pi-user"></i>
           </span>
        <prime-input-text type="date" class="p-inputtext-sm" placeholder="Контрагент" />
      </div>
    </div>
    <div class="col-12 md:col-4">
      <h5>Дополнительно</h5>
      <prime-textarea :auto-resize="true" rows="5" cols="30"></prime-textarea>
    </div>
    <template #footer>
      <prime-button label="" icon="pi pi-check" class="p-button-sm p-button-success" @click="hideDialog"/>
    </template>
  </prime-dialog>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "CreateRecordDialog",
  methods: {
    ...mapMutations({
      hideDialog: "HIDE_CREATE_RECORD_DIALOG"
    })
  },
  computed: {
    ...mapState({

    }),
    ...mapGetters({
      display: 'createRecordDialog'
    }),
    /*display() {
      return this.$store.state.createRecordDialog
    }*/
  }
}
</script>

<style scoped>

</style>