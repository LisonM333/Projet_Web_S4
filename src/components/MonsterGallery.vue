<script setup> 
import { ref, computed } from 'vue'
import MonsterCard from './MonsterCard.vue'
import monsterData from '../monsterData'
// import { getDndData } from '../services/api/SpellDndApi.js'
// const dndData = ref({})
// const getData = async () => {
//   dndData.value = await getDndData()
// }

// getData()
// console.log(getData())



const search = ref('')
const monstersSortBy = ref('HP')
const monsterType = ref('')
const filteredMonsterData = computed(() => {
  let result = monsterData.filter(
    (monster) => monster.name.toLowerCase ().includes(search.value.toLowerCase ())
  )

  //filter
  if (monsterType.value) {
    result = result.filter((monster) =>
      monster.type === monsterType.value
    )
  }

  //sort
  result = result.toSorted((a, b) => {
    if (monstersSortBy.value === 'HP') {
      return (a.HP || 0) - (b.HP || 0) // hp can be null
    } else {
      return a.name.localeCompare (b.name) // sort in alphabetical order
    }
  })
  return result
})
</script>

<template>
  <h2>Monsters</h2>
  
  <div>

    

    <!-- Aberration
    Beast
    Celestial
    Construct
    Dragon
    Elemental
    Fey
    Fiend
    Giant
    Humanoid
    Monstrosity
    Ooze
    Plant
    Undead -->

  <div id="gallery-options">
    <input type="text" v-model="search" placeholder="Search monster" />

    <label for="monster-type">Type :</label>
    <select v-model="monsterType" id="monster-type">
      <option value="">all</option>
      <option value="aberration">aberration</option>
      <option value="beast">beast</option>
      <option value="celestial">celestial</option>
      <option value="construct">construct</option>
      <option value="dragon">dragon</option>
      <option value="elemental">elemental</option>
      <option value="fey">fey</option>
      <option value="fiend">fiend</option>
      <option value="giant">giant</option>
      <option value="humanoid">humanoid</option>
      <option value="monstrosity">monstrosity</option>
      <option value="ooze">ooze</option>
      <option value="plant">plant</option>
      <option value="undead">undead</option>

    </select>
    <label for="monster-sort">Sort by : </label>
    <select v-model="monstersSortBy" id="monster-sort">
      <option value="name">Name</option>
      <option value="HP">HP</option>
    </select>
  </div>

  <div id="monster-gallery">
  <div class="cards">
   <MonsterCard 
    v-for="monster in filteredMonsterData" 
    :name="monster.name"
    :size="monster.size"
    :type="monster.type"
    :align="monster.align"
    :AC="monster.AC"
    :HP="monster.HP"
    :STR="monster.STR"
    :DEX="monster.DEX"
    :CON="monster.CON"
    :INT="monster.INT"
    :WIS="monster.WIS"
    :CHA="monster.CHA"
    :desc="monster.desc"/>
  
  </div></div></div>

</template>

<style scoped>
  .cards {
    display : flex;
    flex-wrap : wrap;
    gap : 10px;
    justify-content : center;
    align-items : center;
  }

  #gallery-options {
    display : flex;
    justify-content : center;
    align-items : center;
    gap : 10px;
    margin-bottom : 20px;
  }
</style>