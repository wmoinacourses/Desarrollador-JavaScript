This,
_this y los arrow functions
This hace referencia a un objeto y su valor depende de donde lo usemos,
por ejemplo

class Persona {
  constructor(nombre, amigos = []) {
    this.nombre = nombre
    this.amigos = amigos
  }

  listarAmigos() {
    const _this = this
    this.amigos.forEach(function(amigo) {
      console.log(`Hola, mi nombre es ${amigo} y soy amigo de ${_this.nombre}`);
    })
  }
}
const wilmer = new Persona("Wilmer", ["pedro", "juan", "pepe"])

wilmer.listarAmigos()

///////////////////////

class Persona {
  constructor(nombre, amigos = []) {
    this.nombre = nombre
    this.amigos = amigos
  }

  listarAmigos() {
    const _this = this
    this.amigos.forEach(function(amigo) {
      console.log(`Hola, mi nombre es ${amigo} y soy amigo de ${this.nombre}`);
    }.bind(this))
  }
}
const wilmer = new Persona("Wilmer", ["pedro", "juan", "pepe"])

wilmer.listarAmigos()

///////////////////////

class Persona {
  constructor(nombre, amigos = []) {
    this.nombre = nombre
    this.amigos = amigos
  }

  listarAmigos() {
    this.amigos.forEach((amigo) => {
      console.log(`Hola, mi nombre es ${amigo} y soy amigo de ${this.nombre}`)
    })
  }
}
const wilmer = new Persona("Wilmer", ["pedro", "juan", "pepe"])

wilmer.listarAmigos()

////////////////////////////

https://medium.com/entendiendo-javascript/entendiendo-this-javascript-cba60c8cec8c
