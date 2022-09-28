module.exports = function () {
  var data = {

    doctor: [
      {
        idDoctor: 1,
        nombre: "jeff",
        Apellido: "Argar",
        telefono: "+54 934",
      },
      {
        idDoctor: 2,
        nombre: "jeff",
        Apellido: "Argar",
        telefono: "+54 934",
      },
      {
        idDoctor: 3,
        nombre: "jeff",
        Apellido: "Argar",
        telefono: "+54 934",
      },
      {
        idDoctor: 4,
        nombre: "jeff",
        Apellido: "Argar",
        telefono: "+54 934",
      }
    ],
    pacientes: [
      {
        Dni: "67947392",
        Nombre: "Javier",
        Apellido: "Arias",
        FechaNacimiento: "15-02-00",
        Telefono: "937165936",
        NumHistoria: "01",
        Diagnostico: "1",
        Version: "2"
      },
      {
        Dni: "49270637",
        Nombre: "Miluska",
        Apellido: "Fina",
        FechaNacimiento: "27-06-98",
        Telefono: "940736022",
        NumHistoria: "02",
        Diagnostico: "false",
        Version: "2"
      },
      {
        Dni: "59438759",
        Nombre: "Michelle",
        Apellido: "Valdizan",
        FechaNacimiento: "06-04-01",
        Telefono: "992133626",
        NumHistoria: "04",
        Diagnostico: "true",
        Version: "1"
      }],

    preguntas: [
      {
        id: 1,
        Descripcion: "Pregunta 1",
        Respuesta: "Respuesta 1",

      },
      {
        id: 2,
        Descripcion: "Pregunta2",
        Respuesta: "Respuesta 2",

      },
      {
        id: 3,
        Descripcion: "jPregunta 3",
        Respuesta: "respuesta 3",

      },
      {
        id: 4,
        Descripcion: "Pregunta 4",
        Respuesta: "Respuesta 4",

      }
    ],

    
    consultas: [
      {
        id: 1,
        FechaConsulta: "FechaConsulta 1",
        Paciente: "Pasiente 1",
        Medico: "Medico 1",
        Diagnostico: "Diagnostico 1",
        Obserbacion: "Obserbacion 1",

      },
      {
        id: 2,
        FechaConsulta: "FechaConsulta 2",
        Paciente: "Pasiente 2",
        Medico: "Medico 2",
        Diagnostico: "Diagnostico 2",
        Obserbacion: "Obserbacion 2",

      },
      {
        id: 3,
        FechaConsulta: "FechaConsulta 3",
        Paciente: "Pasiente 3",
        Medico: "Medico 3",
        Diagnostico: "Diagnostico 3",
        Obserbacion: "Obserbacion 3",

      },
      {
        id: 4,
        FechaConsulta: "FechaConsulta 4",
        Paciente: "Pasiente 4",
        Medico: "Medico 4",
        Diagnostico: "Diagnostico 4",
        Obserbacion: "Obserbacion 4",

      }
    ]


  }

  return data
}
