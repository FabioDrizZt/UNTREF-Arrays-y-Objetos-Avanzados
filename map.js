const frutasObjetos = [
  { nombre: 'anana', color: 'amarillo', precio: 1 },
  { nombre: 'pera', color: 'verde', precio: 3 },
  { nombre: 'uva', color: 'violeta', precio: 5 }
]

const nombresFrutas = frutasObjetos.map((fruta) => fruta.nombre)
const frutasConInflacion = frutasObjetos.map((fruta) => {
  return { ...fruta, precio: fruta.precio * 2 }
})

console.log(frutasObjetos)
console.log(nombresFrutas)
console.log(frutasConInflacion)
