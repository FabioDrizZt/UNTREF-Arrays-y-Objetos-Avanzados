const frutas = ['anana', 'pera', 'uva']

const encontrado = frutas.indexOf('pera')
const encontrarConFindIndex = frutas.findIndex((fruta) => fruta === 'pera')
const encontrarConFind = frutas.find((fruta) => fruta === 'pera')

console.log(encontrado)
console.log(encontrarConFindIndex)
console.log(encontrarConFind)

const avengers = [
  { nombre: 'Captain America', alias: 'Steve Rogers' },
  { nombre: 'Iron Man', alias: 'Tony Stark' },
  { nombre: 'Thor', alias: 'Thor Odinson' },
  { nombre: 'Hulk', alias: 'Bruce Banner' },
  { nombre: 'Spider-Man', alias: 'Peter Parker' },
  { nombre: 'Spider-Man', alias: 'Miles Morales' },
  { nombre: 'Spider-Man', alias: 'Gwen Stacy' }
]

const ironMan = avengers.find((superHeroe) => superHeroe.nombre === 'Iron Man')
console.log(ironMan)

const deadPool = avengers.find((superHeroe) => superHeroe.nombre === 'Deadpool')
console.log(deadPool)

const primerSpiderMan = avengers.find(
  (superHeroe) => superHeroe.nombre === 'Spider-Man'
)
console.log(primerSpiderMan)

const ultimoSpiderMan = avengers.findLast(
  (superHeroe) => superHeroe.nombre === 'Spider-Man'
)
console.log(ultimoSpiderMan)
