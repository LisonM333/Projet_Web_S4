<script setup> 
import {ref} from 'vue';
import {RouterView} from "vue-router";

// import { getDndData } from './services/api/SpellDndApi.js'
// const dndData = ref({})
// const getData = async () => {
//   dndData.value = await getDndData()
// }

// getData()
// console.log(getData())
</script>

<template>
  <body>
  <h1> DND infos </h1>
  <div id="table">
    <div>
      <router-link to="/spells">Spells</router-link>
    </div><div>
      <router-link to="/monsters">Monsters</router-link>
    </div><div>
      <router-link to="/favorites">Favorites</router-link>
    </div>
  </div>
  <div id="app">
    <RouterView/>
  </div>
  </body>
</template>

<style scoped>
@font-face {
  font-family:Sniglet-Regular;
  src: 
    url('/src/assets/font/Sniglet/Sniglet-Regular.ttf');
}

body{
  font-family: Sniglet-Regular;
}

#table{
  display : flex;
  gap :0px;
  justify-content : start;
  align-items : end;
  height : 50px;
  width : 100%;
  border-bottom: 2px solid #ccc;
}

#table div {
  font-size: larger;
  position: relative; /* IMPORTANT */
  border: 1px solid #ccc;
  border-bottom: 0;
  background-color: #eeeeee;
  color: rgb(40, 40, 40);
  border-top-right-radius: 15px;
}

#table div:hover {
  border: 1px solid #bba0c3;
  border-bottom: 0;
  background-color: #bba0c3;
  color: #4e0556;
}

#table div:last-child {
  z-index: 1;
  margin-left: -35px;
  padding: 5px 15px 5px 45px;
}

#table div:nth-child(2) {
  z-index: 2;
  margin-left: -20px;
  padding: 5px 15px 5px 30px;
}

#table div:first-child {
  z-index: 3;
  margin-left: 0;
  padding: 5px 15px 5px 15px;
}

#table div:has(a.router-link-exact-active) {
  border : 1px solid #bba0c3;
  border-bottom: 0;
  background-color: #4e0556;
  color: #bba0c3;
}

a {
  color : inherit;
  text-decoration: none;
}

</style>
