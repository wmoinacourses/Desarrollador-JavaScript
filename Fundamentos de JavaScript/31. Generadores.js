GeneradoresenJavaScript:
Para decirle a JavaScript que nuestra función es un generador debemos
indicarlo con un asterisco de la siguiente forma : function(asterisco)
Si creamos un generador debemos colocar la palabra clave yield la cual indica
 que cuando llamemos la función después de la primera vez,
esta iniciará en la línea después de yield.{}

function* fibonacci(){
  let a = 0, b = 1

  while(true){
    let f = a
    a = b
    b = f + a
    let reset = yield f
    if (reset==1) a = 0 , b = 1
  }
}
