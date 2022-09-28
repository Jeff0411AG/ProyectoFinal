


module.exports = function () {
  var data = {


      doctor: [
        {
          id: 1,
          nombre: "jeff",
          Apellido: "Argar",
          telefono: "+54 934",
        },
        {
          id: 2,
          nombre: "jeff",
          Apellido: "Argar",
          telefono: "+54 934",
        },
        {
          id: 3,
          nombre: "jeff",
          Apellido: "Argar",
          telefono: "+54 934",
        },
        {
          id: 4,
          nombre: "jeff",
          Apellido: "Argar",
          telefono: "+54 934",
        }
      ],
      pacientes: [
        {
          id:67947392,
          Nombre: "Javier",
          Apellido: "Arias",
          FechaNacimiento: "15-02-00",
          Telefono: "937165936",
          NumHistoria: "01",
          Diagnostico: "Covid",
          Version: "2"
        },
        {
          id:89270637,
          Nombre: "Miluska",
          Apellido: "Vargas",
          FechaNacimiento: "27-06-98",
          Telefono: "940736022",
          NumHistoria: "02",
          Diagnostico: "No Covid",
          Version: "2"
        },
        {	
          id:5943875,
          Nombre: "Michelle",
          Apellido: "Valdizan",
          FechaNacimiento: "06-04-01",
          Telefono: "992133506",
          NumHistoria: "04",
          Diagnostico: "Gripe",
          Version: "1"
        }
      ],
      tarjetas: [
          {
            id:1,
            Metodo:"Débito",
            Nombre: "Edwin",
            Apellido: "Rodriguez",
            NumCuenta: "4557775828454662",
            FechaVen: "09-24",
            NumCvc: "958"
          },
          {
            id:2,
            Metodo:"Crédito",
            Nombre: "Juan",
            Apellido: "Silva",
            NumCuenta: "4846125312454662",
            FechaVen: "08-23",
            NumCvc: "745"
          },
          {	
            id:3,
            Metodo:"Crédito",
            Nombre: "David",
            Apellido: "Torres",
            NumCuenta: "4518462374581564",
            FechaVen: "04-25",
            NumCvc: "456"
          }
      ],
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

