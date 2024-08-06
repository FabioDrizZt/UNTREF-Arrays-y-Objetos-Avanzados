const avengers = [
  { grupo: 'vengadores', nombre: 'Captain America', alias: 'Steve Rogers' },
  { grupo: 'vengadores', nombre: 'Iron Man', alias: 'Tony Stark' },
  { grupo: 'vengadores', nombre: 'Doctor Doom', alias: 'Tony Stark' },
  { grupo: 'vengadores', nombre: 'Thor', alias: 'Thor Odinson' },
  { grupo: 'vengadores', nombre: 'Hulk', alias: 'Bruce Banner' },
  { grupo: 'vengadores', nombre: 'Spider-Man', alias: 'Peter Parker' }
]

const estaTony = avengers.some(
  (superHeroe) => superHeroe.alias === 'Tony Stark'
)

console.log(estaTony ? 'Si esta Tony Stark' : 'No esta Tony =(')
