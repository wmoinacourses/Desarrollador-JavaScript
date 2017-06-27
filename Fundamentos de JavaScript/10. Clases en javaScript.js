// Prototipos de clases

function Punto(x, y) {
  this.x = x
  this.y = y
}

Punto.prototype.moverEndx = function moverEndx(x) {
  this.x += x
}

Punto.prototype.moverEndy = function moverEndy(y) {
  this.y += y
}

Punto.prototype.distancia = function distancia(p) {
  const x = this.x - p.x
  const y = this.y - p.y
  return Math.sqrt(x * x + y * y)
}

const p1 = new Punto(0, 4)
const p2 = new Punto(3, 0)

console.log(p1.distancia(p2))
p1.moverEndy(12)
p2.moverEndx(1)
console.log(p1.distancia(p2))
// 
