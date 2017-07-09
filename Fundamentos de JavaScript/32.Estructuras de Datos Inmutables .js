Estructuras de Datos Inmutables en JavaScript
La inmutabilidad de los objetos es algo muy importante para la programación funcional.
El operador === nos ayuda a comparar objetos, ejecutando la comparación no directamente
a los datos del objeto sino, a la referencia del objeto.
Cuando asignamos un objeto a otro estamos haciendo que ambos apunten a la misma referencia,
por eso al modificar un objeto el otro también se verá afectado, porque ambos tienen la misma
referencia de memoria.
La inmutabilidad tiene por objetivo hacer que los parámetros de un objeto sean no modificables o inmutables
Si quieres aprender más sobre inmutabilidad de objetos en JavaScript en la sección de Enlaces
dejamos el link de una librería diseñada por Facebook que nos permite crear distintos tipos de objetos inmutables

let wmoina = {nombre:'Wilmer', apellido:'Moina', edad: 24}
let otrowmoina = wmoina
otrowmoina === wmoina
wmoina.edad = 34

function cumple(persona){
  const clone = Object.assign({},persona)
  clone.edad++
  return clone
}
