<template>
  <div class="card">
    <h3>{{ props.name }}</h3>
    <div class="caract">
      <div><h4>Level :</h4> <p>{{ props.level }}</p></div>
      <div v-if="props.casting_time !== undefined"><h4>Casting Time :</h4><p>{{ props.casting_time }}</p></div>
      <div v-if="props.range !== undefined"><h4>Range/Area :</h4><p>{{ props.range }}</p></div>
      <div v-if="props.component !== undefined"><h4>Components :</h4><p>{{ props.component }}</p></div>
      <div v-if="props.duration !== undefined"><h4>Duration :</h4><p>{{ props.duration }}</p></div>
      <div v-if="props.school !== undefined"><h4>School :</h4><p>{{ props.school}}</p></div>
      <div v-if="props.attack !== undefined"><h4>Attack :</h4><p>{{ props.attack}}</p></div>
      <div v-if="props.damage !== undefined"><h4>Damage Type :</h4><p>{{ props.damage}}</p></div>
    </div>
    <div class ="desc">
      <div v-if="props.description !== undefined"><h4>Description :</h4> <p>{{ props.description[0]}} </p></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {type: Number},
  name:{type: String},
  level: {type: Number, required: false},
  casting_time: {type: String, required: false},
  range: {type: String, required: false},
  component: {type: Array, default: () => [], required: false},
  duration: {type: String, required: false},
  school: {type: String, required: false},
  attack: {type: String, required: false},
  damage: {type: String, required: false},
  description: {type: Array, required: false},
  
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
    height : 450px;
    width : 350PX;
    background-color : rgb(131, 4, 4);
    color : white;
    border-radius: 10px;
    font-size: 50%;
  }

  /* .caract {
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
  }*/

  
</style>