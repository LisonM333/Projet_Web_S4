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
  <div>
    <router-link to="/spells">Spells</router-link>
  </div><div>
    <router-link to="/monsters">Monsters</router-link>
  </div>
  <div id="app">
   <RouterView/>
  </div>
</template>

<style scoped>
</style>
