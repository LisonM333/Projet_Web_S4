<template>
  <div class="card">
    <div class="title"><h2>{{ props.name }}</h2></div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {type: String},
  name:{type: String},
  level: {type: String},

  })
</script>

<style scoped>
  .card {
    display : flex;
    justify-content: space-between;
    gap : 20px;
    /* height : 75px; */
    width : 250PX;
    background-color : #065e13;;
    color : #9bcea3;;
    border-radius: 10px;
    padding: 10px;
  }

  .caract {
    display : flex;
    flex-wrap : wrap;
    gap : 10px;
    justify-content : center;
    align-items : center;
  }

  .title{
    display : flex;
    justify-content : center;
    align-items : center;
  }

</style>