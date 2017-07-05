function get (URL) {
  return new Promise ((resolve, reject)=>{
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
		const DONE = 4
		const OK = 200
		if (this.readyState === DONE) {
			if(this.status === OK){
				//Todo OK
		      resolve ( JSON.parse(this.responseText))
			}
      else {
				//hubo un error
			 	  reject(new Error(`Se produjo un error al realizar el request ${this.status}`))
			}
    }
   }
  xhr.open('get', URL);
	xhr.send(null);
})
}


function handleError(err){
  console.log(`Request failed: ${err}`)
}

async function getLuke(){
  try{
    const response = await fetch('https://swapi.co/api/people/1/')
    const luke = await response.json()
    const responseHomeworld  = await fetch('https://swapi.co/api/planets/1/')
    luke.homeworld = await responseHomeworld.json()//'https://swapi.co/api/planets/1/'
    console.log(`${luke.name} nacio en ${luke.homeworld.name}`)

  } catch (err){
    handleError(err)
  }
}

// Usamos el codigo transformado por babel y importamos la libreria https://cdnjs.com/libraries/babel-polyfill
