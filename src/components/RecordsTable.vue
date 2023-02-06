<template>
    <div>
      <prime-data-table class="p-datatable-sm" :value="records"
                        removableSort
                        stripedRows
                        responsiveLayout="scroll"
                        :paginator="true" :rows="10"
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        :rowsPerPageOptions="[10,20,50]"
                        currentPageReportTemplate="Показано {first} - {last} из {totalRecords}">
        <template #header>
          <div class="table-header">
            <span class="p-input-icon-left full-width">
                <i class="pi pi-search" />
                <prime-input-text class="full-width p-inputtext-sm" placeholder="Поиск" @keyup.enter="getMails"/>
            </span>
          </div>
        </template>
        <prime-column field="letterNumber" header="Номер письма" :sortable="true"></prime-column>
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
    <div id="modals">
      <prime-dialog v-model:visible="deleteProductDialog" :style="{width: '450px'}" header="Ахтунг!" :modal="true">
        <div class="confirmation-content">
          <span v-if="record">Удалить запись <b>{{record.title}}</b> из журнала?</span>
        </div>
        <template #footer>
          <prime-button label="Нет" icon="pi pi-times" class="p-button-success p-button-sm" @click="deleteProductDialog = false"/>
          <prime-button label="Да" icon="pi pi-check" class="p-button-danger p-button-sm" @click="deleteRecord" />
        </template>
      </prime-dialog>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RecordsTable",
  data() {
    return {
      deleteProductDialog: false,
      searchString: 'числ',
      searchQuery: {
        "searchType" : "ByParams",
        "correspondenceTypeId" : 2,
        "searchString" : "",
        "startDate" : "2023-01-28",
        "endDate" : "2023-01-29",
        "employeeId" : "7f93ce5e-9ef4-11ed-aec8-08002745bf63",
        "counterpartyId" : "2417cd49-9ef4-11ed-aec8-08002745bf63"
      },
      record: null,
      records: [
        //{id: '1', mail_number: 1, title: 'Первое письмо', employee: 'Воробьева Е.В.', counterparty: 'МИАЦ', date: '12.01.2023'},
        //{id: '2', mail_number: 2, title: 'Письмо о чем то', employee: 'Воробьева Е.В.', counterparty: 'МИАЦ', date: '12.01.2024'},
        //{id: '3', mail_number: 3, title: 'Отчет', employee: 'Маркова Л.А.', counterparty: 'МЗПК Сосиськина Т.А.', date: '15.01.2024'},
      ]
    }
  },
  methods: {
    confirmDeleteProduct(record) {
      console.log(record)
      this.record = record;
      this.deleteProductDialog = true;
    },
    deleteRecord(){
      this.records = this.records.filter(val => val.id !== this.record.id);
      this.deleteProductDialog = false;
      this.record = {};
    },
    async getMails(){
      try {
        const params =  {
          "searchType" : "ByParams",
          "correspondenceTypeId" : 2,
          "searchString" : "",
          "startDate" : "2023-01-28",
          "endDate" : "2023-01-29",
          "employeeId" : "7f93ce5e-9ef4-11ed-aec8-08002745bf63",
          "counterpartyId" : "2417cd49-9ef4-11ed-aec8-08002745bf63"
        }
        const search = JSON.parse(JSON.stringify(this.searchQuery))


        const response = await axios.get('http://192.168.0.10/?XDEBUG_SESSION_START=PHPSTORM', {params});

        this.records = response.data.results;
      }
      catch (e) {
        //ss
      }
      finally {
        //fsdf
      }
    }
  }
}
</script>

<style scoped>
.full-width{
  width: 100%;
}
</style>