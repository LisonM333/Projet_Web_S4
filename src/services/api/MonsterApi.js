const BASE_URL = "https://www.dnd5eapi.co"

const getMonsterList = async function() {
  const response = await fetch(
    "https://www.dnd5eapi.co/api/2014/monsters"
  )
  const monsters = await response.json()
  return monsters.results
}

const getMonsterDetails = async (url) => {
  const response = await fetch(`${BASE_URL}${url}`)
  return await response.json()
}

const getAllMonsters = async function() {

  const list = await getMonsterList()

  const monsters = []

  for (const monster of list) {
    try {
      const data = await getMonsterDetails(monster.url)
      monsters.push(data)
    } catch (err) {
      console.error("Erreur sur", monster.url, err)
    }
  }

  return monsters
}

export { getMonsterList, getMonsterDetails, getAllMonsters}