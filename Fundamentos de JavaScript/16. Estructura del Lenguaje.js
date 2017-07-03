variables
No son fuertemente tipadas
  var wilmer = "hola"
  wilmer = 24
  wilmer = new Data()

Valores complejos
  wilmer = function saludar() {alert('hola')}

Pueden tener objetos
  wilmer = {
    nombre: 'Wilmer',
    apellido: 'Moina',
    edad: 24,
    saludar: function saludar() {
      alert (`Hola mi nombre es ${this.nombre} ${this.apellido}`)
    }
  }

Si usamos un const no se puede reasignar valore a esta variable
  const edad = 24
  edad++ // esto no se puede realizar

Variables ... muy Variables
  function saludar (nombre){
    var nombre = "Wilmer"
    alert(`Hola ${nombre}`)
  }

  nombre // undefined

  function saludar (nombre){
    nombre = "Wilmer" // sin declara
    alert(`Hola ${nombre}`)
  }

  nombre // Wilmer
  window.nombre == nombre // true

  var dias= [
    "Lunes",
    "Martes",
    "..."
  ]

  for (var i =1; i<= dias.length; i++){
    console.log(`${i}. dia es ${dias[i]}`);
  }
  i// ? tiene un valor

  for (let i =1; i<= dias.length; i++){
    console.log(`${i}. dia es ${dias[i]}`);
  }
  i// undefined

  Palabras reservadas

  break delete function return typeof case do if ....


  Funciones que se ivocan inmediatamente iife
  Immediately Invoked Function Expression

  
