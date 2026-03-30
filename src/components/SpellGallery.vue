<script setup> 
import { ref, computed } from 'vue';
import SpellCard from './SpellCard.vue'
import SmallSpellCard from './SmallSpellCard.vue';
//import spellDataTEST from '../spellData'
//import { getDndData } from '../services/api/SpellDndApi.js'
import { getSpellList } from '../services/api/SpellApi.js'
const spellData = ref([])
const getData = async () => {
  // spellData.value = await getSpellList()
  const data = await getSpellList()
  console.log("DATA:", data)
  spellData.value = data
}
getData()
console.log(getData())


//FILTRE GALLERIE
const search = ref('')
const spellsSortBy = ref('name')

const filteredSpellsData = computed(() => {
let result = spellData.value.filter(
(spell) => spell.name.toLowerCase ().includes(search.value.toLowerCase ())
)
result = result.toSorted((a, b) => {
if (spellsSortBy.value === 'name') {
  return a.name.localeCompare (b.name)// sort in alphabetical order
} else {
  const levelDiff = (a.level || 0) - (b.level || 0)
  if (levelDiff !== 0) {
    return levelDiff
  }
  return a.name.localeCompare(b.name)// level can be null  
}
})
return result
})

//DETAILLED CARD
const selectedSpell = ref(null)
import { getSpellDetails } from '../services/api/SpellApi.js'

const selectSpell = async (spell) => {
  const data = await getSpellDetails(spell.url)
  selectedSpell.value = data
  console.log("SELECTED:", selectedSpell)
}


</script>

<template>
  <h2>Spells</h2>
  
<div id="page">


<div id="gallery">
  <div id="gallery-options">
    <input type="text" v-model="search" placeholder="Search spell" />
    <label for="spell-sort">Sort by : </label>
    <select v-model="spellsSortBy" id="spell-sort">
      <option value="name">Name</option>
      <option value="level">Level</option>
    </select>
  </div>

  <div class="cards">
    <SmallSpellCard 
    v-for="spell in filteredSpellsData" 
    :key="spell.index"
    :name="spell.name"
    :level="spell.level"
    @click="selectSpell(spell)"/>
  </div>
</div>

<div id="detail">
  <div id="spell-gallery">
    <div class="cards">
      <SpellCard 
      v-if="selectedSpell"
      :name="selectedSpell.name"
      :level="selectedSpell.level"
      :casting_time="selectedSpell.casting_time"
      :range="selectedSpell.range"
      :component="selectedSpell.component"
      :duration="selectedSpell.duration"
      :school="selectedSpell.school.name"
      :attack="selectedSpell.attack_type"
      :damage="selectedSpell.damage"
      :description="selectedSpell.desc"
      :available="selectedSpell.available"/>
    </div>
  </div>
</div>

</div>
</template>

<style scoped>

  #page {
    display : flex;
    
  }

  #gallery{
    width : 60vw;
  }

  #detail {
    width: 40vw;
    height: 100vh;
    border-left: 1px solid #ccc;
    padding: 10px;
    position: sticky;
    top: 0;
  }

  .cards {
    display : flex;
    flex-wrap : wrap;
    gap : 10px;
    justify-content : center;
    align-items : center;
  }
</style>