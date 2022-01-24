let objetoEstudiante1 = {
    id:"6172184",
    nombre: 'Jesen',
    ciudad: 'Choloma',
    nota: 90,
    observacion: "Aprobado"
}

let objetoEstudiante2 = {
    id:"61721485",
    nombre: 'Andrea',
    ciudad: 'SPS',
    nota: 94,
    observacion: "Aprobado"
}
let objetoEstudiante3 = {
    id:"61721486",
    nombre: 'Dania',
    ciudad: 'Choloma',
    nota: 59,
    observacion: "Reprobado"
}

let objetoEstudiante4 = {
    id:"61721487",
    nombre: 'Fernando',
    ciudad: 'SPS',
    nota: 70,
    observacion: "Aprobado"
}
let arraynumeros = [1,25,34,56]
let arrayEstudiante = [
    {
      id: '61721484', nombre: 'Jesen', ciudad: 'Choloma' , nota: 90, observacion: "Aprobado"
    },
    objetoEstudiante1
 ]

arrayEstudiante.push(objetoEstudiante3)
arrayEstudiante.push(50)

let resultadoFiltro = arrayEstudiante.find(estudiante => estudiante.observacion === 'Reprobado')

console.log(resultadoFiltro)
