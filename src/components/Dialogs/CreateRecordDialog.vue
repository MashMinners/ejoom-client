<template>
  <div>
    <prime-dialog v-model:visible="display"  :style="{width: '90vw'}" :modal="true" :closable="false">
      <template #header>
        <h4>Добавить запись в журнал</h4>
      </template>
      <div class="card mt-2">
        <div class="p-fluid grid">
          <div class="field col-1">
          <span class="p-float-label">
            <prime-input-text id="inputtext" type="text" v-model="value1" />
            <label for="inputtext">Номер</label>
          </span>
          </div>

          <div class="field col-2">
          <span class="p-float-label">
            <prime-input-text id="inputtext" type="text" v-model="letterTheme" />
            <label for="inputtext">Тема письма</label>
          </span>
          </div>

          <div class="field col-2">
          <span class="p-float-label">
            <prime-auto-complete v-model="value2" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name"></prime-auto-complete>
            <label for="autocomplete">Сотрудник</label>
          </span>
          </div>

          <div class="field col-2">
          <span class="p-float-label">
            <prime-auto-complete v-model="value2" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name"></prime-auto-complete>
            <label for="autocomplete">Контрагент</label>
          </span>
          </div>

          <div class="field col-2">
          <span class="p-float-label">
            <prime-input-text id="inputtext" type="date" v-model="date" />
          </span>
          </div>

          <div class="field col-2">
          <span class="p-float-label">
            <prime-textarea id="inputtext" type="text" v-model="value1" />
            <label for="inputtext">Номер</label>
          </span>
          </div>

          <div class="col-12 sm:col-1">
            <prime-button label="" icon="pi pi-plus" class="p-button-sm p-button-success p-button-rounded"/>
          </div>

        </div>
      </div>
      <template #footer>
        <prime-button label="Сохранить" icon="pi pi-check" class="p-button-sm" @click="hideDialog"/>
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
      display: 'createRecordDialog',
      date: 'currentDate'
    })
  }
}
</script>

<style scoped>

</style>