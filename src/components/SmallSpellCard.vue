<template>
  <div class="card">
    <h2>{{ props.name }}</h2>
    <div class="caract">
      <h3>Level :</h3> <p>{{ props.level }}</p>
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
  @font-face {
    font-family:Sniglet-Regular;
    src: 
      url('/src/assets/font/Sniglet/Sniglet-Regular.ttf');
  }

  .card {
    font-family: Sniglet-Regular;
    display : colums;
    height : 150px;
    width : 350PX;
    background-color : rgb(131, 4, 4);
    color : white;
    border-radius: 10px;
  }

  .caract {
    display : flex;
    flex-wrap : wrap;
    gap : 10px;
    justify-content : center;
    align-items : center;
  }

  .caract > * {
    width : 160px;
    font-size: 60%;
    margin-bottom : -10px;
  }

  .caract p {
    text-align: center;
  }

  .desc {
    display : flex;                                                                                                                                                                                                                                                                                                                                                                               
    flex-direction: column;
    justify-content : center;
    align-items : center;
  }

  .desc > * {
    width : 330px;
    font-size: 50%;
    margin-bottom : 10px;
  }

  .desc p {
    text-align: justify;
  }

  
</style>