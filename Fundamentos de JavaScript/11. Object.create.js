// Definiendo la clase Punto - Object.create en JavaScript
//En JavaScript tenemos varias formas para crear objetos, ahora vamos a crear un nuevo constructor del objeto punto

const Punto = {
  init: function(x, y) {
    this.x = x
    this.y = y
  },
  moverEndx: function moverEndx(x) {
    this.x += x
  },
  moverEndy: function moverEndy(y) {
    this.y += y
  }
  distancia: function distancia(p) {
    const x = this.x - p.x
    const y = this.y - p.y
    return Math.sqrt(x * x + y * y)
  }
}

const p1 = Objet.create(Punto)
p1.init(0,4)

const p2 = Objet.create(Punto)
p2.init(3,0)

console.log(p1.distancia(p2))
p1.moverEndy(12)
p2.moverEndx(1)
console.log(p1.distancia(p2))
