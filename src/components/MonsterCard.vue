<template>
  <div class="card">
    <h2>{{ props.name }}</h2>
    <div class="info">
      <div><p>{{ props.size }}</p></div>
      <div><p>{{ props.type }}</p></div>
      <div><p>{{ props.align }}</p></div>
      <div><h3>Armor Class :</h3><p>{{ props.AC }}</p></div>
      <div><h3>Hit Point :</h3><p>{{ props.HP }}</p></div>
    </div>
    <div class="caract">
      <div><h3>STR :</h3><p>{{ props.STR }}</p></div>
      <div><h3>DEX :</h3><p>{{ props.DEX }}</p></div>
      <div><h3>CON :</h3><p>{{ props.CON }}</p></div>
      <div><h3>INT :</h3><p>{{ props.INT }}</p></div>
      <div><h3>WIS :</h3><p>{{ props.WIS }}</p></div>
      <div><h3>CHA :</h3><p>{{ props.CHA }}</p></div>
    </div>
    <div class ="desc">
      <h3>Description :</h3> <p>{{ props.desc }} </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {type: Number},
  name:{type: String},
  size: {type: String},
  type: {type: String},
  align: {type: String},
  AC: {type: String},
  HP: {type: String},
  STR: {type: String},
  DEX: {type: String},
  CON: {type: String},
  INT: {type: String},
  WIS: {type: String},
  CHA: {type: String},
  desc: {type: String},
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