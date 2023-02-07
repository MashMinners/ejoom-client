<template>
  <div>
  <prime-dialog  v-model:visible="display" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}" header="Добавить запись!" :modal="true">
    <template #header>
      <h3>Вы добавляете запись в журнал</h3>
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
      <prime-button label="" icon="pi pi-check" class="p-button-sm p-button-success" @click="confirm()" />
    </template>
  </prime-dialog>
  </div>
</template>

<script>
export default {
  name: "CreateRecordDialog",
  data() {
    return {
      display:true
    }
  },
  methods: {
    confirm(){
      this.display = false;
    }
  }
}
</script>

<style scoped>

</style>