const Estudiante = [
    { id: 6172184, nombre: 'Jesen', ciudad: 'Choloma', nota: 90, observacion: 'Aprobado'},
    { id: 61721485, nombre: 'Andrea', ciudad: 'SPS', nota: 94, observacion: 'Aprobado'},
    { id: 61721486, nombre: 'Dania', ciudad: 'Choloma', nota: 95, observacion: 'Aprobado'},
    { id: 61721487, nombre: 'Fernando', ciudad: 'SPS', nota: 70, observacion: 'Aprobado'},
    { id: 61721488, nombre: 'Alejandro', ciudad: 'SPS', nota: 90, observacion: 'Aprobado'},
    { id: 61721489, nombre: 'Fernando', ciudad: 'SPS', nota: 52, observacion: 'Reprobado'},
    { id: 61721490, nombre: 'Glenda', ciudad: 'Choloma', nota: 87, observacion: 'Aprobado'},
    { id: 61721491, nombre: 'Fabian', ciudad: 'Choloma', nota: 40, observacion: 'Reprobado'},
    { id: 61721492, nombre: 'Fernanda', ciudad: 'SPS', nota: 54, observacion: 'Reprobado'},
    { id: 61721493, nombre: 'Daniel', ciudad: 'SPS', nota: 89, observacion: 'Aprobado'}
]

const Reprobado = Estudiante.filter(item => {
    return item.observacion === 'Reprobado'})

console.log(Reprobado)
