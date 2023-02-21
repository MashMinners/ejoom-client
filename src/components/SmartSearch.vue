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
      <div class="p-fluid grid mt-1">
        <div class="col-1">
          <prime-button :class="[buttons.allButton ? 'p-button-danger' : 'p-button-outlined']" label="Все" class="p-button-sm p-button-rounded p-button-secondary" @click="getEmailsByPeriod(0)"></prime-button>
        </div>
        <div class="field col-1">
          <prime-button :class="[buttons.todayButton ? 'p-button-danger' : 'p-button-outlined']" label="Сегодня" class="p-button-sm p-button-rounded p-button-secondary" @click="getEmailsByPeriod(1)"></prime-button>
        </div>
        <div class="field col-1">
          <prime-button :class="[buttons.yesterdayButton ? 'p-button-danger' : 'p-button-outlined']" label="Вчера" class="p-button-sm p-button-rounded p-button-secondary" @click="getEmailsByPeriod(2)"></prime-button>
        </div>
        <div class="col-1">
          <prime-button :class="[buttons.threeDaysButton ? 'p-button-danger' : 'p-button-outlined']" label="За 3 дня" class="p-button-sm p-button-rounded p-button-secondary" @click="getEmailsByPeriod(3)"></prime-button>
        </div>
        <div class="col-1">
          <prime-button :class="[buttons.weekButton ? 'p-button-danger' : 'p-button-outlined']" label="Неделя" class="p-button-sm p-button-rounded p-button-secondary" @click="getEmailsByPeriod(7)"></prime-button>
        </div>
        <div class="col-1">
          <prime-button :class="[buttons.monthButton ? 'p-button-danger' : 'p-button-outlined']" label="Месяц" class="p-button-sm p-button-rounded p-button-secondary" @click="getEmailsByPeriod(30)"></prime-button>
        </div>
      </div>
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
        //startDate : '',
        //endDate : '',
        //employeeId : '',
        //counterpartyId : ''
      },
      buttons: {
        allButton: true,
        todayButton: false,
        yesterdayButton: false,
        threeDaysButton: false,
        weekButton: false,
        monthButton: false
      }
    }
  },
  methods: {
    ...mapActions({
      search: 'getMails'
    }),
    ...mapMutations({
      showCreateRecordDialog: "SHOW_CREATE_RECORD_DIALOG",
      setDates: "SET_DATES"
    }),
    toggleButtons(btn){
      for(let k in this.buttons) {
        this.buttons[k] = false;
      }
      this.buttons[btn] = true
    },
    getEmails(){
      this.search(this.searchParams)
    },
    getEmailsByPeriod(period){
      let endDate = new Date();
      let startDate = new Date();
      switch (period){
        case 0 :
          this.toggleButtons('allButton');
          this.setDates({
            startDate: '',
            endDate: ''
          });
          this.search(this.searchParams); break
        case 1 :
          this.toggleButtons('todayButton');
          //this.searchParams.startDate = startDate.toISOString().slice(0, 10);
          //this.searchParams.endDate = endDate.toISOString().slice(0, 10);
          this.setDates({
            startDate: startDate.toISOString().slice(0, 10),
            endDate: endDate.toISOString().slice(0, 10)
          });
          this.search(this.searchParams); break
        case 2 :
          this.toggleButtons('yesterdayButton')
          startDate.setDate((startDate.getDate() - 1));
          //this.searchParams.startDate = startDate.toISOString().slice(0, 10);
          //this.searchParams.endDate = endDate.toISOString().slice(0, 10);
          this.setDates({
            startDate: startDate.toISOString().slice(0, 10),
            endDate: endDate.toISOString().slice(0, 10)
          });
          this.search(this.searchParams); break
        case 3 :
          this.toggleButtons('threeDaysButton')
          startDate.setDate((startDate.getDate() - 2));
          //this.searchParams.startDate = startDate.toISOString().slice(0, 10);
          //this.searchParams.endDate = endDate.toISOString().slice(0, 10);
          this.setDates({
            startDate: startDate.toISOString().slice(0, 10),
            endDate: endDate.toISOString().slice(0, 10)
          });
          this.setDates(3);
          this.search(this.searchParams); break
        case 7 :
          this.toggleButtons('weekButton')
          startDate.setDate((startDate.getDate() - 7));
          //this.searchParams.startDate = startDate.toISOString().slice(0, 10);
          //this.searchParams.endDate = endDate.toISOString().slice(0, 10);
          this.setDates({
            startDate: startDate.toISOString().slice(0, 10),
            endDate: endDate.toISOString().slice(0, 10)
          });
          this.search(this.searchParams); break
        case 30 :
          this.toggleButtons('monthButton')
          startDate.setDate((startDate.getDate() - 30));
          //this.searchParams.startDate = startDate.toISOString().slice(0, 10);
          //this.searchParams.endDate = endDate.toISOString().slice(0, 10);
          this.setDates({
            startDate: startDate.toISOString().slice(0, 10),
            endDate: endDate.toISOString().slice(0, 10)
          });
          this.search(this.searchParams); break
      }
    }
  },
  computed:{
    ...mapGetters({
      display: 'createRecordDialog',
      date: "currentDate",
    })
  }
}
</script>

<style scoped>

</style>