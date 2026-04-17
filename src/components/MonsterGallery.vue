<script setup> 
import { ref, computed } from 'vue';
import MonsterCard from './MonsterCard.vue'
import SmallMonsterCard from './SmallMonsterCard.vue';
import { getMonsterList } from '../services/api/MonsterApi.js'
const monsterData = ref([])
const getData = async () => {
  const data = await getMonsterList()
  console.log("DATA:", data)
  monsterData.value = data
}
getData()
console.log(getData())



const search = ref('')
const monstersSortBy = ref('name')
// const monsterType = ref('')
const filteredMonsterData = computed(() => {
  let result = monsterData.value.filter(
    (monster) => monster.name.toLowerCase ().includes(search.value.toLowerCase ())
  )

  // //filter
  // if (monsterType.value) {
  //   result = result.filter((monster) =>
  //     monster.type === monsterType.value
  //   )
  // }

  //sort
  if (monstersSortBy.value === 'name') {
    
    result = result.toSorted((a, b) => {
      return a.name.localeCompare (b.name) // sort in alphabetical order
    
  })}

  return result
})

//DETAILLED CARD
const selectedMonster = ref(null)
import { getMonsterDetails } from '../services/api/MonsterApi.js'

const selectMonster = async (monster) => {
  const data = await getMonsterDetails(monster.url)
  selectedMonster.value = data
  console.log("SELECTED:", selectedMonster)
}

//FAVORITE GESTION
const favorites = ref([])
const STORAGE_KEY = 'favoriteMonsters'

const loadFavorites = () => {
  const data = localStorage.getItem(STORAGE_KEY)
  favorites.value = data ? JSON.parse(data) : []
}
loadFavorites()
const saveFavorites = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites.value))
}
const toggleFavorite = (selectedMonster) => {
  const index = favorites.value.findIndex(f => f.index === selectedMonster.index)
  if (index === -1) {
    favorites.value.push(selectedMonster)
  } else {
    favorites.value.splice(index, 1)
  }
  saveFavorites()
}
const isFavorite = (selectedMonster) => {
  return favorites.value.some(f => f.index === selectedMonster.index)
}

</script>

<template>
  <h2>Monsters</h2>
  
  <div id ="page">

  <div id="gallery"><div id="gallery-options">
    <input type="text" v-model="search" placeholder="Search monster" />
  </div>

  
    <div class="cards">
      <SmallMonsterCard 
      v-for="monster in filteredMonsterData" 
      :key="monster.index"
      :name="monster.name"
      :class="{ selected: selectedMonster?.index === monster.index }"
      @click="selectMonster(monster)"/>
    </div>

  </div>

  <div id="detail">
    <div>
      <button v-if="selectedMonster"
      id="favorite"
      :class="{ active: isFavorite(selectedMonster) }"
      @click="toggleFavorite(selectedMonster)">
        ★
      </button>
    </div>
     <div class="cards">
      <MonsterCard 
      v-if="selectedMonster"
      :name="selectedMonster.name"
      :size="selectedMonster.size"
      :type="selectedMonster.type"
      :align="selectedMonster.alignment"
      :AC="selectedMonster.armor_class"
      :HP="selectedMonster.hit_points"
      :STR="selectedMonster.strength"
      :DEX="selectedMonster.dexterity"
      :CON="selectedMonster.constitution"
      :INT="selectedMonster.intelligence"
      :WIS="selectedMonster.wisdom"
      :CHA="selectedMonster.charisma"
      :img="selectedMonster.image"
      :desc="selectedMonster.desc"/>
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

  .cards > * {
    position : relative;
  }

  .card.selected {
    color : #065e13;
      background-color : #9bcea3;
  }

  #favorite {
    position: absolute;
    top: 0px;
    right: 10px;
    z-index: 10;

    font-size :larger;
    color: #8c8c8c;
    background-color: #d0d0d0;
    border :0;
    border-radius: 20px;
    padding : 0px 10px 5px 10px;
  }

  #favorite:hover {
    color: #4e0556;
    transition: color 1s ease;
  }

  #favorite.active {
    color: #4e0556;
    background-color: #bba0c3;
    border : 0;
  }

  #favorite.active:hover {
    color: #d0d0d0;
    transition: color 1s ease;
  }

  #detail {
    width: 40vw;
    height: 100vh;
    border-left: 1px solid #ccc;
    padding: 10px;
    position: sticky;
    top: 0;
  }

  /* //////////////////////////// */

@media (max-width: 768px) {
  body {
    margin : 0;
  }


  #gallery {
    position: fixed;
    top: 200px;
    left: 0;
    width: 100%;
    height: calc(50vh - 100px);
    overflow-y: auto;
  }

  #detail {
    position: fixed;
    top: calc(50vh + 100px);
    left: 0;
    width: 95%;
    height: calc(50vh - 100px);
    overflow-y: auto;
    border-top: 1px solid #ccc;
    border-left: none;

  }
}
</style>