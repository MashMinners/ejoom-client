<template>
  <div>
    <prime-toolbar>
      <template #start>
        <prime-button :class="[buttons.incomingEmailButton ? 'p-button-danger' : 'p-button-primary']" label="Входящие Email" icon="pi pi-at" class="mr-2"  @click="incomingEmail"/>
        <prime-button :class="[buttons.outgoingEmailButton ? 'p-button-danger' : 'p-button-primary']" label="Исходящие Email" icon="pi pi-at" class="mr-2" @click="outgoingEmail"/>
        <prime-button :class="[buttons.incomingLettersButton ? 'p-button-danger' : 'p-button-primary']" label="Входящие (Бумага)" icon="pi pi-envelope" class="mr-2" @click="incomingLetters"/>
        <prime-button :class="[buttons.outgoingLettersButton ? 'p-button-danger' : 'p-button-primary']" label="Исходящие (Бумага)" icon="pi pi-envelope" class="mr-2" @click="outgoingLetters"/>
      </template>
      <template #end>
        <prime-button class="p-button-success" icon="pi pi-plus" v-tooltip.left="'Добавить запись'" @click="showDialog"/>
      </template>
    </prime-toolbar>
  </div>
  <div id="modals">
    <create-record-dialog></create-record-dialog>
  </div>>
</template>

<script>
import CreateRecordDialog from "@/components/Dialogs/CreateRecordDialog.vue";
import {mapMutations} from "vuex";
export default {
  name: "HeaderToolbar",
  components: {CreateRecordDialog},
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
    ...mapMutations({
      showDialog: "SHOW_CREATE_RECORD_DIALOG",
      setEjournalText: "SET_EJOURNAL_TEXT"
    }),
    toggleButtons(btn){
      for(let k in this.buttons) {
        this.buttons[k] = false;
      }
      this.buttons[btn] = true
    },
    incomingEmail(){
      this.setEjournalText('Входящие Email')
      this.toggleButtons('incomingEmailButton')
    },
    outgoingEmail(){
      this.setEjournalText('Исходящие Email')
      this.toggleButtons('outgoingEmailButton')
    },
    incomingLetters(){
      this.setEjournalText('Входящие (Бумага)')
      this.toggleButtons('incomingLettersButton')
    },
    outgoingLetters(){
      this.setEjournalText('Исходящие (Бумага)')
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