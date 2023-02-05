<template>
  <div>
    <my-input-text placeholder="text"></my-input-text>
    <my-button>4243</my-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        search: null,
        records: [
          {id: '1', title: 'Title #1'},
          {id: '2', title: 'Title #2'},
          {id: '3', title: 'Title #3'}
        ],
        visibleLeft: false,
        selectedType: null,
        mailTypes: [
          {id: '1', title: 'Входящие'},
          {id: '2', title: 'Исходящие'}
        ]
      }
    },
    methods: {
      //simple change for commit/
    }
  }
</script>
<style></style>
