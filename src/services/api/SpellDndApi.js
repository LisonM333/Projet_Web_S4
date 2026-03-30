const getDndData = async function() {
  const response = await fetch(
    "https://www.dnd5eapi.co/api/2014/spells?limit=1000"
  )

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const data = await response.json()

  const spells = await Promise.allSettled(
    data.results.map(async (spell) => {
      const res = await fetch(`https://www.dnd5eapi.co${spell.url}`)
      if (!res.ok) throw new Error(res.status)
      return res.json()
    })
  )

  return spells
    .filter(r => r.status === "fulfilled")
    .map(r => r.value)
}

export { getDndData }





// const getDndData = async function() {
//     const response = await fetch("https://www.dnd5eapi.co/api/2014/spells")
//     if (response.status == 200) {

//         const data = await response.json()

//         const spells = []

//         // for (const spell of data.results) {
//         //     const res = await fetch(`https://www.dnd5eapi.co${spell.url}`)

//         //     if (!res.ok) {
//         //     throw new Error(res.statusText)
//         //     }

//         //     const spellData = await res.json()
//         //     spells.push(spellData)
//         // }
//         for (const spell of data.results.slice(0, 50)) {
//             try {
//             const res = await fetch(`https://www.dnd5eapi.co${spell.url}`)
//             const spellData = await res.json()
//             spells.push(spellData)
//             } catch (err) {
//             console.error("Erreur sur", spell.url, err)
//             }
//         }


        

//         return spells
//         }




//     // const data = await response.json()
//     // console.log(data)
//     // return data.results
//     // } else {
//     // throw new Error(response.statusText)
//     // }
// }
// export { getDndData }