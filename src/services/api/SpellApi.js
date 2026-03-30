const BASE_URL = "https://www.dnd5eapi.co"

const getSpellList = async function() {
  const response = await fetch(
    "https://www.dnd5eapi.co/api/2014/spells"
  )
  const spells = await response.json()
  return spells.results
}

const getSpellDetails = async (url) => {
  const response = await fetch(`${BASE_URL}${url}`)
  return await response.json()
}

const getAllSpells = async function() {

  const list = await getSpellList()

  const spells = []

  for (const spell of list) {
    try {
      const data = await getSpellDetails(spell.url)
      spells.push(data)
    } catch (err) {
      console.error("Erreur sur", spell.url, err)
    }
  }

  return spells
}

export { getSpellList, getSpellDetails, getAllSpells}




