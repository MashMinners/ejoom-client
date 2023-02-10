<template>
  <div>
    <prime-toolbar>

      <template #start>
        <prime-button label="Входящие Email" icon="pi pi-at" class="mr-2"  />
        <prime-button label="Исходящие Email" icon="pi pi-at" class="mr-2" />
        <prime-button label="Входящие (Бумага)" icon="pi pi-envelope" class="mr-2" />
        <prime-button label="Исходящие (Бумага)" icon="pi pi-envelope" class="mr-2" />
      </template>
      <template #end>
        <prime-button class="p-button-success" icon="pi pi-plus" v-tooltip.left="'Добавить запись'"/>
      </template>
    </prime-toolbar>
  </div>
  <div id="modals">
    <create-record-dialog></create-record-dialog>
  </div>>
</template>

<script>
import CreateRecordDialog from "@/components/Dialogs/CreateRecordDialog.vue";
export default {
  name: "HeaderToolbar",
  components: {CreateRecordDialog},
  data() {
    return {}
  }
}
</script>

<style scoped>
.mr-2 {
  margin-right: 0.5rem;
}
</style>