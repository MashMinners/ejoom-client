<template>
  <div>
    <prime-toolbar>
      <template #start>
        <prime-button :class="[buttons.incomingEmailButton ? 'p-button-danger' : 'p-button-primary']" label="Входящие Email" icon="pi pi-at" class="mr-2"  @click="incomingEmail"/>
        <prime-button :class="[buttons.outgoingEmailButton ? 'p-button-danger' : 'p-button-primary']" label="Исходящие Email" icon="pi pi-at" class="mr-2" @click="outgoingEmail"/>
        <prime-button :class="[buttons.incomingLettersButton ? 'p-button-danger' : 'p-button-primary']" label="Входящие (Бумага)" icon="pi pi-envelope" class="mr-2" @click="incomingLetters"/>
        <prime-button :class="[buttons.outgoingLettersButton ? 'p-button-danger' : 'p-button-primary']" label="Исходящие (Бумага)" icon="pi pi-envelope" class="mr-2" @click="outgoingLetters"/>
      </template>
    </prime-toolbar>
  </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";
export default {
  name: "HeaderToolbar",
  data() {
    return {
      buttons: {
        incomingEmailButton: true,
        outgoingEmailButton: false,
        incomingLettersButton: false,
        outgoingLettersButton: false
      }
    }
  },
  //Работа с мутациями и экшенами
  methods: {
    ...mapActions({
      search: 'getMails'
    }),
    ...mapMutations({
      setEjournalText: "SET_EJOURNAL_TEXT",
      setEjournalType: "SET_EJOURNAL_TYPE",
    }),
    toggleButtons(btn){
      for(let k in this.buttons) {
        this.buttons[k] = false;
      }
      this.buttons[btn] = true
    },
    incomingEmail(){
      this.setEjournalText('Входящие Email')
      this.setEjournalType(1)
      this.toggleButtons('incomingEmailButton')
      this.search()
    },
    outgoingEmail(){
      this.setEjournalText('Исходящие Email')
      this.setEjournalType(2)
      this.toggleButtons('outgoingEmailButton')
      this.search()
    },
    incomingLetters(){
      this.setEjournalText('Входящие (Бумага)')
      this.setEjournalType(3)
      this.toggleButtons('incomingLettersButton')
    },
    outgoingLetters(){
      this.setEjournalText('Исходящие (Бумага)')
      this.setEjournalType(4)
      this.toggleButtons('outgoingLettersButton')
    }
  }
}
</script>

<style scoped>
.mr-2 {
  margin-right: 0.5rem;
}
</style>