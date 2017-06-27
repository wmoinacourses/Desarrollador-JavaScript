// **********como agregar metodos a un objeto
// calcular la distancia entre dos puntos

const p1 = {
  x: 0,
  y: 4,
  moverEndx(x) {
    this.x += x
  },
  moverEndy(y) {
    this.y += y
  }
}

const p2 = {
  x: 3,
  y: 0,
  moverEndx: function(x) {
    this.x += x
  },
  moverEndy: function(y) {
    this.y += y
  }
}

function distancia(p1, p2) {
  const x = p1.x - p2.x
  const y = p1.y - p2.y
  return Math.sqrt(x * x + y * y)
}

console.log(distancia(p1, p2))
//console.log(distancia(p1,{x:12,y:33}))
