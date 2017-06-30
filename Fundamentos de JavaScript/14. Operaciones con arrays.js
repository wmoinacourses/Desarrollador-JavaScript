/*Los arrays son una forma de guardar nuestros datos muy importante en JavaScript, en este vídeo veremos como trabajar con Arrays.
Si queremos hacer una función que reciba N parámetros y devuelva la suma de estos, podemos escribirla como
functionsuma(...params) {    return params.reduce((acumulativo, actual) => {acumulativo + actual}, 0)  }    suma(4,5,6,23,26,7,8)
De esta forma utilizamos el método reduce con el cual cuentan los arrays, este nos permite ir iterando por todo el array y acumulando el valor en una variable.
Ahora queremos ejecutar una operación sobre todos los elementos del array, para esto tenemos un método llamado map
functiondoble(...params) {    return params.map(x=>x*2)  }    doble(2,3,4,5,6,7,5)
Si queremos filtrar ciertos valores de un array, tenemos otro método para poder hacer esto con keyword
const pares = (...numeros) => numeros.filter(x=> x % 2 == 0)*/

function suma(...numbers) {
  let acum = 0
  for (let i = 0; i < numbers.length; i++) {
    acum += numbers[i]
  }
  return acum
}
suma(4, 12, 12, 12, 12)

// Metodo para resolver acumulacion
function suma(...numeros) {
  return numeros.reduce(function(acum, numero) {
    acum += numero
    return acum
  }, 0)
}

const suma = (...numeros) => numeros.reduce((acum, num )=> acum += num)
suma(1,2,3)

function dobles(...numeros) {
  return numeros.map(numero => numero * 2)
}

dobles(4, 12, 12, 12, 12)

const dobles = (...numeros) => numeros.map( numero => numero * 2)
dobles(4, 12, 12, 12, 12)

const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)
pares(1,2,3,4)
