<template>
  <div class="p-fluid grid">
    <div class="field col-11">
         <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <prime-input-text type="text" v-model="searchParams.searchString" placeholder="Поиск" @keyup.enter="getEmails"/>
        </span>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Search",
  data(){
    return {
      searchParams: {
        searchType : "ByParams",
        correspondenceTypeId : 2,
        searchString : '',
        startDate : "2023-01-28",
        endDate : "2023-01-29",
        employeeId : "7f93ce5e-9ef4-11ed-aec8-08002745bf63",
        counterpartyId : "2417cd49-9ef4-11ed-aec8-08002745bf63"
      },
    }
  },
  methods: {
    ...mapActions({
      search: 'getMails'
    }),
    getEmails(){
      this.search(this.searchParams)
    }
  }
}
</script>

<style scoped>

</style>