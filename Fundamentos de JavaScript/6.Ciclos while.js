// VIDA
let vidaGoku = 100
let vidaSuper = 100

//PODER
const min_power = 5
const max_power =12

let round = 1

////LUCHA
const ambosSiguenVivos= () => vidaGoku > 0 && vidaSuper > 0
const calcularGolpe = () => Math.round(Math.random() * (max_power - min_power) + min_power)

while(ambosSiguenVivos()){
  console.log(`Round ${round++}`)

  const golpeGoku = calcularGolpe()
  const golpeSuper = calcularGolpe()

  if(golpeGoku > golpeSuper){
    //ataca goku
    console.log(`Goku ataca a Superman con un golpe de ${golpeGoku} ***`)
    vidaSuper-=golpeGoku
    console.log(`Superman queda en ${vidaSuper} de vida`)
  }else if(golpeSuper>golpeGoku){
    //ataca superman
    console.log(`Superman ataca a Goku con un golpe de ${golpeSuper} ===`)
    vidaGoku-=golpeSuper
    console.log(`Goku queda en ${vidaGoku} de vida`)
  }else{
    console.log(`Ambos esquivan el ataque.
      El ataque lo sufrio la tierra (((.)))`);
  }
}

// VENCEDOR
const ganador = () => vidaGoku <= 0 ? 'Gano Superman !!!' : 'Gano Goku!!!'
console.log(`${ganador()}`)
