const edades = [22, 8, 17, 14, 15, 21]

const sumaEdades = edades.reduce((sum, edad) => {
  return sum + edad
})

console.log(sumaEdades)
console.log(`El promedio de edades es: ${sumaEdades / edades.length}`)

const personas = [
  { nombre: 'fabio', edad: 22 },
  { nombre: 'pablo', edad: 8 },
  { nombre: 'adriana', edad: 17 },
  { nombre: 'noemi', edad: 14 },
  { nombre: 'cassandra', edad: 15 },
  { nombre: 'ariel', edad: 21 }
]

const sumaEdadesPersonas = personas.reduce((sum, persona) => {
  return sum + persona.edad
}, 0)

console.log(sumaEdadesPersonas)
console.log(`El promedio de edades es: ${sumaEdadesPersonas / personas.length}`)
