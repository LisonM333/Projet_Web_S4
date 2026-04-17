<template>
  <div class="card">
    <div class="title"><h2>{{ props.name }}</h2></div>
    <div class="caract">
      <h3>Lvl :</h3> <p>{{ props.level }}</p>
    </div>
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
    width : 350PX;
    background-color : #830404;
    color : #e2bdbd;
    border-radius: 10px;
    padding: 10px;
  }

  .card:hover{
    color : #830404;
    background-color : #e2bdbd;
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