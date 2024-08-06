/* const frutas = ['anana', 'pera', 'uva']

frutas.forEach((valor, indice, array) => {
  console.log(`valor actual: ${valor}`)
  console.log(`indice actual: ${indice}`)
  console.log(`array completo: ${array}`)
}) */

const frutasObjetos = [
  { nombre: 'anana', color: 'amarillo', precio: 1 },
  { nombre: 'pera', color: 'verde', precio: 3 },
  { nombre: 'uva', color: 'violeta', precio: 5 }
]

frutasObjetos.forEach((valor, indice) => {
  valor.precio = valor.precio * 2
  console.log(
    `nombre: ${valor.nombre}, color: ${valor.color} y precio: ${valor.precio}`
  )
  console.log(`indice actual: ${indice}`)
})
