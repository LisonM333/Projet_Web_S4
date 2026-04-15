<script setup>
  import { ref, onMounted, computed } from 'vue'
  import SpellCard from './SpellCard.vue'

  const favorites = ref([])

  const loadFavorites = () => {
    const data = localStorage.getItem('favoriteSpells')
    favorites.value = data ? JSON.parse(data) : []
  }

  onMounted(() => {
    loadFavorites()
  })

  //FILTRE SPELLS
  const search = ref('')
  const spellsSortBy = ref('name')
  const damageType = ref('')
  const schoolType = ref('')



  const filteredSpellsData = computed(() => {
  let result = favorites.value.filter(
  (spell) => spell.name.toLowerCase ().includes(search.value.toLowerCase ())
  )
  //filtre
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


</script>

<template>
    <h2>Favorites</h2>

  <div id="filter-options">
    <input type="text" v-model="search" placeholder="Search spell" />
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
      


  <div v-if="favorites.length === 0">
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
</template>

<style>
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
</style>