const starWars7= 'Start Wars: El despertar de la fuerza'
const pgStarWars7= 13

const nameWmoina='Wilmer'
const ageWmoina= 24

const nameMaycol= 'Maycol'
const ageMaycol= 10

// function canWatchStartWars7(name,age){
//   if (age>=pgStarWars7){
//     alert(`${name} puede pasar a ver ${starWars7}`)
//   }else {
//     alert(`${name} no puede pasar a ver ${starWars7}.
//       tiene ${age} años y necesita tener ${pgStarWars7}`)
//   }
// }

function canWatchStartWars7(name,age,isWithAdult=false){
  if (age>=pgStarWars7){
    alert(`${name} puede pasar a ver ${starWars7}`)
  } else if (isWithAdult) {
    alert(`${name} puede pasar a ver ${starWars7}.
      Auque su edad es ${age} a;os, se encuentra acompa;ado por un adulto`)
  } else {
    alert(`${name} no puede pasar a ver ${starWars7}.
      tiene ${age} años y necesita tener ${pgStarWars7}`)
  }
}

canWatchStartWars7(nameWmoina,ageWmoina)
canWatchStartWars7(nameMaycol,ageMaycol, true)
