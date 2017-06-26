const name = 'wilmer'
const dias = [
  'monday',
  'tuesday',
  'wednesday',
  'thurday',
  'friday',
  'saturday',
  'sunday'
]

// math.floor//rendondea hacia abajo 3.9 = 3
// math.ceil//redondea para arriba 3.1 = 4
// math.round// redondea dependiendo 3.1 = 3, 3.5 = 4

function correr() {
  const min = 5
  const max = 15
  return Math.round(Math.random() * (max-min) + min)
}
let totalKms = 0
const length = dias.length
for (let i = 0; i < length; i++){
  const kms = correr()
  totalKms += kms
  console.log(`${name} runs ${kms}Kms of ${dias[i]}`)
}
console.log(`El total de quilometros corridos es ${totalKms} kms y en promedio ${(totalKms/length).toFixed(2)} kms`)
