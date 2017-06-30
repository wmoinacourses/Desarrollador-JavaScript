//* FORMA 1
var nombre = 'wilmer'

function saludar(){
  console.log(`hola ${nombre}`);
}
saludar()

//* FORMA 2
var nombre = 'wilmer'

function saludar(nombre){
  console.log(`hola ${nombre}`);
}
saludar('Mundo')
console.log(`La variable nombre tiene el valor ${nombre}`)

//* FORMA 3
var nombre = 'wilmer'

function saludar(){
  var nombre= 'Kenai'
  console.log(`hola ${nombre}`);
}
saludar()
console.log(`La variable nombre tiene el valor ${nombre}`)

//* FORMA 4
var nombre = 'wilmer'

function saludar(){
  nombre= 'Kenai'
  console.log(`hola ${nombre}`);
}
saludar()
console.log(`La variable nombre tiene el valor ${nombre}`)

// * FORMA 5
var nombre = 'wilmer'

function saludar() {
  if (true) {
    var nombre = 'Adelain'
  }
  console.log(`hola ${nombre}`);
}
saludar()
console.log(`La variable nombre tiene el valor ${nombre}`)

//* FORMA 6
var nombre = 'wilmer'

function saludar10(nombre) {
  for (var i = 0; i < 10; i++) {
    console.log(`hola ${nombre}`)
  }

  console.log(`El valor de i es ${i}`)
}
saludar10('Wilmer')
console.log(`La variable nombre tiene el valor ${nombre}`)

//* FORMA 7
var nombre = 'wilmer'

function saludar10(nombre) {
  for (let i = 0; i < 10; i++) {
    console.log(`hola ${nombre}`)
  }

  console.log(`El valor de i es ${i}`)
}
saludar10('Wilmer')
console.log(`La variable nombre tiene el valor ${nombre}`)

// * FORMA 8
var nombre = 'wilmer'

function saludar10() {
  const nombre = 'Adelain'
  for (let i = 0; i < 10; i++) {
    console.log(`hola ${nombre}`)
  }
}
saludar10()
console.log(`La variable nombre tiene el valor ${nombre}`)
