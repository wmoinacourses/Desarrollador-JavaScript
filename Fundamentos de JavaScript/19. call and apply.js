const wmoina= {
  nombre : 'Wilmer',
  apellido: 'Moina'
}
function saludar(veces){
  for (let i = 0 ; i< veces; i++){
    console.log(`Hola  ${this.nombre} ${this.apellido}`);
  }
}

saludar.call(wmoina, 3)

const wmoina= {
  nombre : 'Wilmer',
  apellido: 'Moina'
}
function saludar(veces){
  for (let i = 0 ; i< veces; i++){
    console.log(`Hola  ${this.nombre} ${this.apellido}`);
  }
}
const pararms = [3]
saludar.call(wmoina, ...pararms)
