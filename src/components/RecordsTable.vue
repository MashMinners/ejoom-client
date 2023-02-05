<template>
    <div>
      <prime-data-table class="p-datatable-sm" :value="records" stripedRows responsiveLayout="scroll">
        <template #header>
          <div class="table-header">
            <span class="p-input-icon-left p-input-icon-right full-width">
                <i class="pi pi-search" />
                <prime-input-text class="full-width" placeholder="Поиск" />
            </span>
          </div>
        </template>
        <prime-column field="id" header="Code"></prime-column>
        <prime-column field="title" header="Name"></prime-column>
      </prime-data-table>
    </div>
</template>

<script>
export default {
  name: "RecordsTable",
  data() {
    return {
      search: null,
      records: [
        {id: '1', title: 'Title #1'},
        {id: '2', title: 'Title #2'},
        {id: '3', title: 'Title #3'}
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