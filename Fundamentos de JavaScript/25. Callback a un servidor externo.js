https://codepen.io/

function get(URL, callback){
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange =  () => {
		const DONE = 4
		const OK = 200
		if (this.readyState === DONE) {
			if(this.status === OK){
				//Todo OK
		callback(null, JSON.parse(this.responseText))
			}
      else {
				//hubo un error
				callback(new Error(`Se produjo un error al realizar el request ${this.status}`))
			}
		}
	}

	xhr.open('GET', URL);
	xhr.send(null);
}

function handleError(err){
  console.log(`Request failed: ${err}`)
}

get('https://swapi.co/api/people/1/', function onResponse(err, luke) {
    if (err) return handleError(err)
    get('https://swapi.co/api/planets/1/', function onHomeworldResponse (err, homeworld) {
     if (err) return handleError(err)
      luke.homeworld = homeworld
      console.log(`${luke.name} nacio en ${luke.homeworld.name}`)
    })
  console.log(`Request succeded`)
  console.log('luke', luke)
} )
