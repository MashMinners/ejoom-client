<template>
  <div class="p-fluid grid">
    <div class="field col-1">
      <prime-button class="p-button-success" icon="pi pi-plus" @click="showCreateRecordDialog">+</prime-button>
    </div>
    <div class="field col-11">
         <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <prime-input-text type="text" v-model="searchParams.searchString" placeholder="Поиск" @keyup.enter="getEmails"/>
        </span>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "Search",
  data(){
    return {
      searchParams: {
        searchString : '',
        startDate : '',
        endDate : '',
        employeeId : '',
        counterpartyId : ''
      },
    }
  },
  methods: {
    ...mapActions({
      search: 'getMails'
    }),
    ...mapMutations({
      showCreateRecordDialog: "SHOW_CREATE_RECORD_DIALOG"
    }),
    getEmails(){
      this.search(this.searchParams)
    }
  },
  computed:{
    ...mapGetters({
      display: 'createRecordDialog'
    })
  }
}
</script>

<style scoped>

</style>