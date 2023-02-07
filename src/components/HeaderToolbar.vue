<template>
  <div>
    <prime-toolbar>
      <template #start>
        <prime-button label="Входящие Email" icon="pi pi-at" class="mr-2" :class="[buttons.btn1 ? 'p-button-danger' : '']" @click=toggleButtons(0) />
        <prime-button label="Исходящие Email" icon="pi pi-at" class="mr-2" :class="[highlightButton2 ? 'p-button-danger' : '']" @click="highlightButton2 = true"/>
        <prime-button label="Входящие (Бумага)" icon="pi pi-envelope" class="mr-2" />
        <prime-button label="Исходящие (Бумага)" icon="pi pi-envelope" class="mr-2" />
      </template>
      <template #end>
        <prime-button class="p-button-success" icon="pi pi-plus" v-tooltip.left="'Добавить запись'" @click="showCreateRecordDialog()"/>
      </template>
    </prime-toolbar>
  </div>
  <div id="modals">
    <create-record-dialog :display="display"></create-record-dialog>
  </div>>
</template>

<script>
import CreateRecordDialog from "@/components/Dialogs/CreateRecordDialog.vue";

export default {
  name: "HeaderToolbar",
  components: {CreateRecordDialog},
  data() {
    return {
      display: false,
      buttons : [
        {'btn1': false},
        {'btn2': false},
        {'btn3': false},
        {'btn4': false}

      ],
      highlightButton1: false,
      highlightButton2: false
    }
  },
  methods: {}
}
</script>

<style scoped>
.mr-2 {
  margin-right: 0.5rem;
}
</style>