<template>
  <div class="card">
    <h3>{{ props.name }}</h3>
    <!-- <div class="img-container"><div v-if="props.img !== undefined">
      <img :src="`https://www.dnd5eapi.co${props.img}`" :alt="props.name" />
    </div></div> -->
    <div class="info">
      <div>
        <div v-if="props.size !== undefined"><p>{{ props.size }}</p></div>
        <div v-if="props.type !== undefined"><p>{{ props.type }}</p></div>
        <div v-if="props.align !== undefined"><p>{{ props.align }}</p></div>
      </div>
      <div>
        <div v-if="props.HP !== undefined"><h4>Hit Point :</h4><p>{{ props.HP }}</p></div>
        <div v-if="props.AC !== undefined"><h4>Armor Class :</h4><p>{{ props.AC[0].value}} ({{ props.AC[0].type}})</p></div>
    </div>
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
      <h4>Description :</h4> <p>{{ props.desc }} </p>
    </div>
    <div class="img-container"><div v-if="props.img !== undefined">
      <img :src="`https://www.dnd5eapi.co${props.img}`" :alt="props.name" />
    </div></div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {type: Number},
  name:{type: String},
  size: {type: String, required: false},
  type: {type: String, required: false},
  align: {type: String, required: false},
  img: {type: String, required: false},
  AC: {type: Array, required: false},
  HP: {type: Number, required: false},
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

  h3 {
    font-size: larger;
  }

  h4 {
    font-size: large;
  }
  p{
    font-size : medium;
  }

  .card {
    font-family: Sniglet-Regular;

    display : colums;
    width : 90%;
    height : auto;
    color : #065e13;
    background-color : #9bcea3;
    border-radius: 10px;
    padding : 10px;
    position: relative;
  }

  /* .img-container {
    position: absolute;
    top: 0;
    right: 0;
    padding:10px;
  }

  img {
    height : 125px;
    width : auto;
    border-radius: 10px;
  } */

  .info > div:first-child {
    display : flex;
    flex-flow : column wrap;
    margin : -10px, 0px, 10px, 0px;
    align-items: start;
  }

  .info > div:last-child {
    display : flex;
    flex-wrap : wrap;
    align-items: center;
    justify-content: space-around;
  }

  .info > div:last-child div {
    display : flex;
    flex-wrap : wrap;
    gap : 10px;
  }

  .info > div:last-child div *{
    margin : 10px 0px;
  }

  .info p {
    margin: 0px;
  }

  .caract {
    display : flex;
    flex-wrap : wrap;
    gap : 15px;
    justify-content : space-around;
    align-items : center;
  }

  .caract div {
    display : flex;
    flex-wrap : wrap;
    gap : 10px;
    margin : 0px;
    width: 30%;
  }

  .caract div > * {
    margin : 10px 0px;
  }

  .desc {
    display : flex;                                                                                                                                                                                                                                                                                                                                                                               
    flex-wrap: wrap;
    gap: 10px;
    justify-content : start;
    align-items : center;
    margin : 10px 0px;
  }

  .desc * {
    text-align: justify;
    margin : 0px;
  }

  .img-container {
    display : flex;
    flex-wrap: wrap;
    justify-content : center;
    align-items : center;
    margin : 10px;
  }

  .img-container img {
    height : auto;
    width : 100%;
    border-radius: 10px;

  }
  
</style>