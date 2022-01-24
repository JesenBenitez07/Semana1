let objetoPersona1 = {
    id:"6172184",
    nombre: 'Jesen',
    ciudad: 'Choloma'
}

let objetoPersona2 = {
    id:"61721485",
    nombre: 'Andrea',
    ciudad: 'SPS'
}
let objetoPersona3 = {
    id:"61721486",
    nombre: 'Dania',
    ciudad: 'Choloma'
}

let objetoPersona4 = {
    id:"61721487",
    nombre: 'Fernando',
    ciudad: 'SPS'
}

let arraynumeros = [1,25,34,56]
let arrayPersona = {
      id: '61721484', nombre: 'Jesen', ciudad: 'Choloma'
}

arrayPersona.push(objetoPersona2)
arrayPersona.push(50)

let resultadoFiltro = arrayPersona.find(persona => persona.ciudad == 'SPS')

console.log(resultadoFiltro)
