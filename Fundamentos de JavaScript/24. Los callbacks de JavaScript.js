// Los callbacks de JavaScript:
// JavaScript cuando ejecuta código lo hace de manera síncrona, pero una forma que tiene de ejecutar código asíncrono es con las funciones llamadas “Callbacks”
// Éstas se ejecutan y nos devuelven el proceso, generalmente después de algún evento de tiempo, al completarse un request o al terminar de leer un archivo.
// Recuerda:
// -El tiempo que le demos a los procesos es un tiempo mínimo. JavaScript puede no respetarlos, todo depende del peso de las tareas que tengamos en la cola de ejecución.
// -Para evitar los cuellos de botella en los procesos y delega tareas pesadas y con mucho tiempo de ejecución a otros microservicios.
//
//

setTimeout(function callback(){
  console.log(`Ya paso un segundo`);
}, 3000)

console.log(`Hola`);

setTimeout(function callback(){
  console.log(`A`);
}, 000)

console.log(`B`);


setTimeout(function callback(){
  console.log(`A`);
}, 1000)

for (var i = 0; i < 99999999999999; i++);
  console.log(`B`);

  http://callbackhell.com/
  
