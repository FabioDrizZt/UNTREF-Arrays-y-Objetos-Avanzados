const edades = [22, 8, 17, 14, 15, 21]
const aMiMeGustan = edades.filter((edad) => {
  return edad > 20
})

console.log(aMiMeGustan)

const frutas = [
  { nombre: 'anana', color: 'amarillo', precio: 8 },
  { nombre: 'pera', color: 'verde', precio: 20 },
  { nombre: 'uva', color: 'violeta', precio: 15 },
  { nombre: 'manzana', color: 'rojo', precio: 12 },
  { nombre: 'cereza', color: 'rojo', precio: 5 }
]

const frutasCaras = frutas.filter((fruta) => {
  return fruta.precio > 14
})

console.log(frutasCaras)

const frutasRojas = frutas.filter(f => f.color === 'rojo')

console.log(frutasRojas)
