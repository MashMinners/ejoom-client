<template>
  <div id="wrapper">
    <div id="app-header">
      <header-toolbar></header-toolbar>
    </div>
    <div id="app-content">
      <prime-fieldset>
        <template #legend>
          {{ EJournalText }}
        </template>
        <records-table></records-table>
      </prime-fieldset>
    </div>
    <div id="app-footer"></div>
    <div id="app-modals">

    </div>
  </div>
</template>
<script>
  import HeaderToolbar from "@/components/HeaderToolbar.vue";
  import RecordsTable from "@/components/RecordsTable.vue";

  export default {
    components: {RecordsTable, HeaderToolbar},
    computed:{
      EJournalText(){
        return this.$store.state.EJournalText
      }
    }
  }
</script>
<style>
#app-header{

}
#app-content{
  padding: 20px;
  border: 1px solid #dee2e6;
}
#app-footer{
  background-color:blue;
}
</style>
