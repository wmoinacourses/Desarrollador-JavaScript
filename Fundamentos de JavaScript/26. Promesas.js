// const promise = new Promise(function(resolve, reject){
//   setTimeout(function (){
//     reject(new Error(`Se produjo un error`))
//   },1000)

// promise
// .then(function(){

// })
// .catch(function(err)){

// }
// Las promesas pueden estar en 3 estados el primero de ellos es PENDIENTE, la promesa va ha estar sujeta a una tarea asincronica
//, luego la promesa puede pasar a se TERMINO o SE PRODUJO UN ERROR

function get(URL) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
      const DONE = 4
      const OK = 200
      if (this.readyState === DONE) {
        if (this.status === OK) {
          //Todo OK
          resolve(JSON.parse(this.responseText))
        } else {
          //hubo un error
          reject(new Error(`Se produjo un error al realizar el request ${this.status}`))
        }
      }
    }
    xhr.open('get', URL);
    xhr.send(null);
  })
}

function handleError(err) {
  console.log(`Request failed: ${err}`)
}

let luke
get('https://swapi.co/api/people/1/').then((response) => {
  luke = response
  return get('https://swapi.co/api/planets/1/')
}).then((homeworld) => {
  luke.homeworld = homeworld
  console.log(`${luke.name} nacio en ${luke.homeworld.name}`)
}).catch(err => handleError(err))
