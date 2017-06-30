Entiende los closures de JavaScript
Los closure son funciones que recuerdan el entorno en el cual fuerón creadas,
esto quiere decir que al llamar la función van a recordar las variables que tenian en ese momento.Por ejemplo,
si queremos hacer una función para saludar determinada familia

functionsaludarFamilia(apellido) {
  returnfunction(nombre) {
    console.log(Hola < span class = "hljs-subst" > $ {
      nombre
    } < /span><span class="hljs-subst">${apellido}</span >)
  }
}
let saludarPerez = saludarFamilia('perez');
`` De esta forma podemos crear nuevas funciones partiendo de funciones que recuerdan variables internas

function saludarFamilia(apellido) {
  return function saludarMiembroDeFamilia(nombre){
    console.log(`Hola ${nombre} ${apellido}`);
  }
}

const saludarGomez = saludarFamilia('Gomez')
const saludarMoina = saludarFamilia('Moina')

saludarMoina("Wilmer")
saludarMoina("Evelin")
saludarMoina("Kenai")
saludarMoina("Adelain")

saludarPerez("Wilmer")
saludarPerez("Evelin")
saludarPerez("Kenai")
saludarPerez("Adelain")
