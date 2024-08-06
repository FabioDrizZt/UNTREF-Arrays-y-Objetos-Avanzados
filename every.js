const avengers = [
  { grupo: 'vengadores', nombre: 'Captain America', alias: 'Steve Rogers' },
  { grupo: 'vengadores', nombre: 'Iron Man', alias: 'Tony Stark' },
  { grupo: 'La liga del mal', nombre: 'Doctor Doom', alias: 'Tony Stark' },
  { grupo: 'vengadores', nombre: 'Thor', alias: 'Thor Odinson' },
  { grupo: 'vengadores', nombre: 'Hulk', alias: 'Bruce Banner' },
  { grupo: 'vengadores', nombre: 'Spider-Man', alias: 'Peter Parker' }
]

const todosVengadores = avengers.every(
  (superHeroe) => superHeroe.grupo === 'vengadores'
)

console.log(
  todosVengadores ? 'Si todos son Vengadores' : 'No alguno/s no es vengador'
)
