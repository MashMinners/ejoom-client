<template>
  <prime-toolbar>
    <template #start>
      <prime-button label="Входящие Email" icon="pi pi-at" class="mr-2" />
      <prime-button label="Исходящие Email" icon="pi pi-at" class="mr-2" />
      <prime-button label="Входящие (Бумага)" icon="pi pi-envelope" class="p-button-success mr-2" />
      <prime-button label="Исходящие (Бумага)" icon="pi pi-envelope" class="p-button-success mr-2" />
    </template>
  </prime-toolbar>
</template>

<script>
export default {
  name: "HeaderToolbar"
}
</script>

<style scoped>
.mr-2 {
  margin-right: 0.5rem;
}
</style>