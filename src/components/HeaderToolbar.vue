<template>
  <prime-toolbar>
    <template #start>
      <prime-button label="Входящие Email" icon="pi pi-at" class="mr-2" :class="[buttons.btn1 ? 'p-button-danger' : '']" @click=toggleButtons() />
      <prime-button label="Исходящие Email" icon="pi pi-at" class="mr-2" :class="[highlightButton2 ? 'p-button-danger' : '']" @click="highlightButton2 = true"/>
      <prime-button label="Входящие (Бумага)" icon="pi pi-envelope" class="mr-2" />
      <prime-button label="Исходящие (Бумага)" icon="pi pi-envelope" class="mr-2" />
    </template>
    <template #end>
      <prime-button class="p-button-success" icon="pi pi-plus" v-tooltip.left="'Добавить запись'" />
    </template>
  </prime-toolbar>
</template>

<script>
export default {
  name: "HeaderToolbar",
  data() {
    return {
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
  methods: {
    toggleButtons(btn){
      console.log(this.buttons)
      console.log(this.buttons[0])
      console.log(btn)
      //this.buttons.btn1 = true
      btn = true;
    }
  }
}
</script>

<style scoped>
.mr-2 {
  margin-right: 0.5rem;
}
</style>