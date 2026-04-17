<script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue'
  import SpellCard from './SpellCard.vue'
  import MonsterCard from './MonsterCard.vue'

  const favoritesSpells = ref([])
  const favoritesMonsters = ref([])

  const loadFavorites = () => {
    const dataSpell = localStorage.getItem('favoriteSpells')
    favoritesSpells.value = dataSpell ? JSON.parse(dataSpell) : []
    const dataMonster = localStorage.getItem('favoriteMonsters')
    favoritesMonsters.value = dataMonster ? JSON.parse(dataMonster) : []
  }

  onMounted(() => {
    loadFavorites()
  })

  //FILTRE SPELLS
  const search_spell = ref('')
  const search_spell_lvl = ref('')
  const spellsSortBy = ref('name')
  const damageType = ref('')
  const schoolType = ref('')

  const filteredSpellsData = computed(() => {
  let result = favoritesSpells.value.filter(
  (spell) => spell.name.toLowerCase ().includes(search_spell.value.toLowerCase ())
  )
  
  //filtre
  if (search_spell_lvl.value !== '') {
    result = result.filter(
      (spell) => spell.level === parseInt(search_spell_lvl.value)
    )
  }

  if (damageType.value) {
    result = result.filter((spell) => {
      if (damageType.value === 'none') {
        return !spell.damage || !spell.damage.damage_type
      }

      return spell.damage?.damage_type?.index === damageType.value
    })
  }
  if (schoolType.value) {
    result = result.filter((spell) =>
      spell.school?.index === schoolType.value
    )
  }

  //sort
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

    //FILTRE MONSTERS
  const search_monster = ref('')
  const monstersSortBy = ref('name')
  const monsterType = ref('')
  const monsterSize = ref('')


  const filteredMonstersData = computed(() => {
  let result = favoritesMonsters.value.filter(
  (monster) => monster.name.toLowerCase ().includes(search_monster.value.toLowerCase ())
  )
  //filtre
  if (monsterType.value) {
    result = result.filter((monster) =>
      monster.type === monsterType.value
    )
  }
  if (monsterSize.value) {
    result = result.filter((monster) =>
      monster.size === monsterSize.value
    )
  }

  //sort
  result = result.toSorted((a, b) => {
    if (monstersSortBy.value === 'name') {
      return a.name.localeCompare (b.name)// sort in alphabetical order
    } else {
      const hpDiff = (a.hit_points || 0) - (b.hit_points || 0)
      if (hpDiff !== 0) {
        return hpDiff
      }
      return a.name.localeCompare(b.name)
    }
    })
    return result
  })

  //RESPONSIVE
  onMounted(() => {
    checkScreen()
    window.addEventListener('resize', checkScreen)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkScreen)
  })

  const showSpell = ref(true)
  const isMobile = ref(false)

  const checkScreen = () => {
    isMobile.value = window.innerWidth <= 768
  }

const changeView = () => {
  if (isMobile.value) {
    showSpell.value = !showSpell.value
  }
}


</script>

<template>
    <h2>Favorites</h2>
  <button id="change_view" @click="changeView"> Spells / Monsters </button>
  <div id = page>
    
  <div id = "spells" v-if="!isMobile || showSpell">

  <div class="filter-options">
    <input type="text" v-model="search_spell" placeholder="Search spell" />
    <label for="spell-lvl">Level  : </label>
    <input id="spell-lvl" type="number" v-model="search_spell_lvl" placeholder=" " min="0" max="9"/>
    <label for="spell-sort">Sort by : </label>
    <select v-model="spellsSortBy" id="spell-sort">
      <option value="name">Name</option>
      <option value="level">Level</option>
    </select>


    <label for="spell-school">School :</label>
    <select v-model="schoolType" id="spell-school">
      <option value="">all</option>
      <option value="abjuration">Abjuration</option>
      <option value="conjuration"> Conjuration</option>
      <option value="divination">Divination</option>
      <option value="enchantment">Enchantment</option>
      <option value="evocation">Evocation</option>
      <option value="illusion">Illusion</option>
      <option value="necromancy">Necromancy</option>
      <option value="transmutation">Transmutation</option>
    </select>

    <label for="spell-damage">Damage Type :</label>
    <select v-model="damageType" id="spell-damage">
      <option value="">all</option>
      <option value="acid">Acid</option>
      <option value="bludgeoning">Bludgeoning</option>
      <option value="cold">Cold</option>
      <option value="fire">Fire</option>
      <option value="force">Force</option>
      <option value="lightning">Lightning</option>
      <option value="necrotic">Necrotic</option>
      <option value="piercing">Piercing</option>
      <option value="poison">Poison</option>
      <option value="psychic">Psychic</option>
      <option value="radiant">Radiant</option>
      <option value="slashing">Slashing</option>
      <option value="thunder">Thunder</option>
      <option value="none">None</option>
    </select>
  </div>
      


  <div v-if="favoritesSpells.length === 0">
    No favorite here ...
  </div>

  <div class="cards">
    <SpellCard 
      v-for="spell in filteredSpellsData"
      :name="spell.name"
      :level="spell.level"
      :casting_time="spell.casting_time"
      :range="spell.range"
      :component="spell.components"
      :duration="spell.duration"
      :school="spell.school?.name"
      :attack="spell.attack_type"
      :damage="spell.damage?.damage_type?.name"
      :description="spell.desc"/>
  </div>
  
  </div>
  <div id = "separation"></div>
  <div id = "monsters" v-if="!isMobile || !showSpell">

  <div class="filter-options">
    <input type="text" v-model="search_monster" placeholder="Search monster" />
    <label for="monster-sort">Sort by : </label>
    <select v-model="monstersSortBy" id="monster-sort">
      <option value="name">Name</option>
      <option value="hp">Hit points</option>
    </select>


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

    <label for="monster-size">Size :</label>
    <select v-model="monsterSize" id="monster-size">
      <option value="">all</option>
      <option value="tiny">Tiny</option>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
      <option value="huge">Huge</option>
      <option value="gargantuan">Gargantuan</option>
    </select>
  </div>



      


  <div v-if="favoritesMonsters.length === 0">
    No favorite here ...
  </div>

  <div class="cards">
    <MonsterCard 
      v-for="monster in filteredMonstersData"
      :name="monster.name"
      :size="monster.size"
      :type="monster.type"
      :align="monster.alignment"
      :AC="monster.armor_class"
      :HP="monster.hit_points"
      :STR="monster.strength"
      :DEX="monster.dexterity"
      :CON="monster.constitution"
      :INT="monster.intelligence"
      :WIS="monster.wisdom"
      :CHA="monster.charisma"
      :img="monster.image"
      :desc="monster.desc"/>
  </div>
  
  </div>
  </div>
</template>

<style>
  #page {
    display : flex; 
    justify-content: space-around;
  }

  #change_view {
    display : none;
    margin : none;
    padding : none;
  }

  #spells{
    width: 49%;
  }
  #separation{
    width: 2px;
    /* border-left: 2px solid #ccc; */
    background-color: #ccc;
  }
  #monsters{
    width: 49%;
  }

  .filter-options {
    display : flex;
    flex-wrap: wrap;
    justify-content : center;
    align-items : center;
    gap : 10px;
    margin: 20px 0px;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

   /* //////////////////////////// */

@media (max-width: 768px) {
  #change_view { 
    display : block;
    margin : 10px auto;
    padding : 5px 10px;
    font-size : larger;
    color: #4e0556;
    background-color: #bba0c3;
    border :0;
    border-radius: 20px;
  }

  #change_view:hover{ 

    background-color: #4e0556;
    color: #bba0c3;
    border :0;

  }

  #spells, #monsters {
    width: 100%;
  }

  #separation {
    display : none;
  }
} 




</style>