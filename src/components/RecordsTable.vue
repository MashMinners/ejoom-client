<template>
  <div v-if="records.length !==0">
    <prime-data-table editMode="cell" class="editable-cells-table p-datatable-sm"  :value="records"
                        removableSort
                        stripedRows
                        responsiveLayout="scroll"
                        :paginator="true" :rows="10"
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        :rowsPerPageOptions="[10,20,50]"
                        currentPageReportTemplate="Показано {first} - {last} из {totalRecords}">
      <prime-column style="width:10%" field="letterNumber" header="Номер письма" :sortable="true"></prime-column>
      <prime-column field="letterHeader" header="Тема"></prime-column>
      <prime-column field="employeeSurname" header="Сотрудник"></prime-column>
      <prime-column field="counterparty" header="Контрагент"></prime-column>
      <prime-column field="registrationDate" header="Дата" :sortable="true"></prime-column>
      <prime-column header="Действия">
        <template #body="slotProps">
          <prime-button class="p-button-danger p-button-sm mr-2" icon="pi pi-delete-left" v-tooltip.top="'Удалить запись'"
                        @click="confirmDeleteProduct(slotProps.data)"/>
        </template>
      </prime-column>
      </prime-data-table>
  </div>
  <div v-else>
    <prime-message severity="warn">Записи скрыты, либо отсуствуют!</prime-message>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters, mapMutations} from "vuex";
export default {
  name: "RecordsTable",
  computed: {
    ...mapGetters({
      records: 'records'
    })
  },
  methods: {
    ...mapMutations({
      showDialog: "SHOW_CREATE_RECORD_DIALOG",
    }),
    confirmDeleteProduct(record) {
      console.log(record)
    }
  }
}
</script>

<style scoped>
.full-width{
  width: 100%;
}
</style>