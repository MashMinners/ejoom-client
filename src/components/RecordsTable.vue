<template>
    <div>
      <prime-data-table class="p-datatable-sm" :value="records" stripedRows responsiveLayout="scroll">
        <template #header>
          <div class="table-header">
            <span class="p-input-icon-left full-width">
                <i class="pi pi-search" />
                <prime-input-text class="full-width p-inputtext-sm" placeholder="Поиск" />
            </span>
          </div>
        </template>
        <prime-column field="mail_number" header="Номер письма"></prime-column>
        <prime-column field="title" header="Тема"></prime-column>
        <prime-column field="employee" header="Сотрудник"></prime-column>
        <prime-column field="counterparty" header="Контрагент"></prime-column>
        <prime-column field="date" header="Дата"></prime-column>
      </prime-data-table>
    </div>
</template>

<script>
export default {
  name: "RecordsTable",
  data() {
    return {
      EJournalType: 'incoming-emails',
      search: null,
      records: [
        {id: '1', mail_number: 1, title: 'Первое письмо', employee: 'Воробьева Е.В.', counterparty: 'МИАЦ', date: '12.01.2023'},
        {id: '2', mail_number: 2, title: 'Письмо о чем то', employee: 'Воробьева Е.В.', counterparty: 'МИАЦ', date: '12.01.2024'},
        {id: '3', mail_number: 3, title: 'Отчет', employee: 'Маркова Л.А.', counterparty: 'МЗПК Сосиськина Т.А.', date: '15.01.2024'},
      ]
    }
  }
}
</script>

<style scoped>
.full-width{
  width: 100%;
}
</style>