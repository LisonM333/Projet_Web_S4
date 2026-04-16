<template>
  <div class="card">
    <h3>{{ props.name }}</h3>
    <div class="info">
      <div v-if="props.size !== undefined"><p>{{ props.size }}</p></div>
      <div v-if="props.type !== undefined"><p>{{ props.type }}</p></div>
      <div v-if="props.align !== undefined"><p>{{ props.align }}</p></div>
      <div v-if="props.AC !== undefined"><h3>Armor Class :</h3><p>{{ props.AC }}</p></div>
      <div v-if="props.HP !== undefined"><h3>Hit Point :</h3><p>{{ props.HP }}</p></div>
    </div>
    <div class="caract">
      <div v-if="props.STR !== undefined"><h4>STR :</h4><p>{{ props.STR }}</p></div>
      <div v-if="props.DEX !== undefined"><h4>DEX :</h4><p>{{ props.DEX }}</p></div>
      <div v-if="props.CON !== undefined"><h4>CON :</h4><p>{{ props.CON }}</p></div>
      <div v-if="props.INT !== undefined"><h4>INT :</h4><p>{{ props.INT }}</p></div>
      <div v-if="props.WIS !== undefined"><h4>WIS :</h4><p>{{ props.WIS }}</p></div>
      <div v-if="props.CHA !== undefined"><h4>CHA :</h4><p>{{ props.CHA }}</p></div>
    </div>
    <div class ="desc" v-if="props.desc !== undefined">
      <h3>Description :</h3> <p>{{ props.desc }} </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {type: Number},
  name:{type: String},
  size: {type: String, required: false},
  type: {type: String, required: false},
  align: {type: String, required: false},
  AC: {type: String, required: false},
  HP: {type: String, required: false},
  STR: {type: String, required: false},
  DEX: {type: String, required: false},
  CON: {type: String, required: false},
  INT: {type: String, required: false},
  WIS: {type: String, required: false},
  CHA: {type: String, required: false},
  desc: {type: String, required: false},
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
    background-color : rgb(6, 94, 19);
    color : white;
    border-radius: 10px;
  }

  .info {
    display : flex;
    flex-wrap : wrap;
    gap : 15px;
    justify-content : center;
    align-items : center;
  }

  .info > * {
    width : 100px;
    font-size: 60%;
    margin-bottom : -10px;
  }

  .info p {
    text-align: center;
  }

  .caract {
    display : flex;
    flex-wrap : wrap;
    gap : 15px;
    justify-content : center;
    align-items : center;
  }

  .caract > * {
    width : 100px;
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