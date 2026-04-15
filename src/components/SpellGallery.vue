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

//FAVORITE GESTION
const favorites = ref([])
const STORAGE_KEY = 'favoriteSpells'

const loadFavorites = () => {
  const data = localStorage.getItem(STORAGE_KEY)
  favorites.value = data ? JSON.parse(data) : []
}
loadFavorites()
const saveFavorites = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites.value))
}
const toggleFavorite = (selectedSpell) => {
  const index = favorites.value.findIndex(f => f.index === selectedSpell.index)
  if (index === -1) {
    favorites.value.push(selectedSpell)
  } else {
    favorites.value.splice(index, 1)
  }
  saveFavorites()
}
const isFavorite = (selectedSpell) => {
  return favorites.value.some(f => f.index === selectedSpell.index)
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
    <div>
      <button v-if="selectedSpell"
      id="favorite"
      :class="{ active: isFavorite(selectedSpell) }"
      @click="toggleFavorite(selectedSpell)">
        ★
      </button>
    </div>
    <div class="cards">
      <SpellCard 
      v-if="selectedSpell"
      :name="selectedSpell.name"
      :level="selectedSpell.level"
      :casting_time="selectedSpell.casting_time"
      :range="selectedSpell.range"
      :component="selectedSpell.components"
      :duration="selectedSpell.duration"
      :school="selectedSpell.school?.name"
      :attack="selectedSpell.attack_type"
      :damage="selectedSpell.damage?.damage_type?.name"
      :description="selectedSpell.desc"/>
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

  #gallery-options {
    display : flex;
    justify-content : center;
    align-items : center;
    gap : 10px;
    margin-bottom : 20px;
  }

  .cards {
    display : flex;
    flex-wrap : wrap;
    gap : 10px;
    justify-content : center;
    align-items : center;
  }

  #favorite {
    font-size :larger;
    color: #8c8c8c;
    background-color: #d0d0d0;
    border :0;
    border-radius: 20px;
    padding : 0px 10px 5px 10px;
  }

  #favorite.active {
    color: #4e0556;
    background-color: #bba0c3;
    border : 0;
  }

  #detail {
    width: 40vw;
    height: 100vh;
    border-left: 1px solid #ccc;
    padding: 10px;
    position: sticky;
    top: 0;
  }
</style>