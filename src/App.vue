<template>
  <div>
    <header id="app-header">
      <MyToolbar>
        <template #start>
          <MyButton label="New" icon="pi pi-plus" class="mr-2"></MyButton>
          <MyButton label="Upload" icon="pi pi-upload" class="p-button-success"></MyButton>
          <i class="pi pi-bars p-toolbar-separator mr-2"></i>
        </template>
        <template #end>
          <span class="p-input-icon-left" style="width:50%;">
            <i class="pi pi-search"></i>
            <MyInputText type="text" placeholder="Search" style="width:500px;"></MyInputText>
          </span>
        </template>
      </MyToolbar>
    </header>
    <div id="app-content">
      <div id="side-bar">
        <MySidebar v-model:visible="visibleLeft" position="left">
          Content
        </MySidebar>
      </div>
      <div id="workplace">
        <div class="card">
          <MyDataTable :value="records" class="p-datatable-sm" responsiveLayout="scroll">
            <template #header>
              Small Table
            </template>
            <MyColumn field="id" header="Code"></MyColumn>
            <MyColumn field="title" header="Name"></MyColumn>
          </MyDataTable>
        </div>
      </div>
    </div>
    <footer id="app-footer"></footer>
  </div>
</template>
<script>
import {ref} from "vue";
  export default {
    data() {
      return {
        search: null,
        records: [
          {id: '1', title: 'Title #1'},
          {id: '2', title: 'Title #2'},
          {id: '3', title: 'Title #3'}
        ],
        visibleLeft: false,
        selectedType: null,
        mailTypes: [
          {id: '1', title: 'Входящие'},
          {id: '2', title: 'Исходящие'}
        ]
      }
    },
    methods: {

    }
  }
</script>
<style>
body {
  margin: 0;
}
#app {
  /*color: green;*/
}
#app-content {
  /*background-color: yellow;*/
  height: calc(100vh - 50px);
}
#app-header {
  width: 100%;
  min-height: 50px;
}
table, th, td {
  border: solid 1px;
}
</style>
