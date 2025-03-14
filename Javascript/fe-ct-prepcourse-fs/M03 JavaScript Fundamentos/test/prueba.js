/* function filtrar(funcion) {
    // Escribi una función filtrar en el prototipo de Arrays,
    // que recibe una funcion (callback) que devuelve true o false.
    // filtrar los elementos de ese arreglo en base al resultado de esa funcion
    // comparadora, devolver un nuevo arreglo con los elementos filtrados.
    // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
    // ej:
    // var productos = [{
    //   price: 100,
    //   name: 'tv'
    // }, {
    //   price: 50,
    //   name: 'phone'
    // }, {
    //   price: 30,
    //   name: 'lamp'
    // }]
    // productos.filtrar(function(p) {
    //   return p.price >= 50;
    // }) => [{price: 100, name:'tv'}]
    Array.prototype.filtrar = function (funcion) {
        var arregloModificado = [];
        for (var i = 0; i < this.length; i++) {
               if (this[ i ] > 3) {
                      arregloModificado.push(false);
               } else {
                      arregloModificado.push(this[ i ]);
               }
        }
        return arregloModificado;
     };
  
  };
  
  // No modifiques nada debajo de esta linea //
  
  module.exports = filtrar */


function crearClasePersona() {
    class Persona {
        constructor(nombre, edad,hobbies,amigos) {
            // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
            // Inicializar las propiedades de la persona con los valores recibidos como argumento
            // Tu código aca:
            this.nombre = nombre;
            this.edad = edad;
            this.hobbies = hobbies;
            this.amigos = amigos;
        }
        addFriend(nombre, edad) {
            // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
            // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
            // No debe retornar nada.
            // Tu código aca:
            let objeto = { 'nombre': nombre, 'edad': edad };
            this.amigos.push(objeto);
        }
        addHobby(hobby) {
            // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de la persona.
            // No debe retornar nada.
            // Tu código aca:
            let string = hobby;
            this.hobbies.push(string);
        }
        getFriends() {
            // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
            // de la persona.
            // Ej:
            // Suponiendo que la persona tiene estos amigos: [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]
            // persona.getFriends() debería devolver ['martin', 'toni']
            // Tu código aca:

            let values = this.amigos.map(item => item.nombre);
            return values;
        }

        getHobbies() {
            // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
            // Ej:
            // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']
            // Tu código aca:
            return this.hobbies;
        }

        getPromedioEdad() {
            // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
            // Ej:
            // Si la persona tuviera estos amigos:
            // {
            //   amigos: [{
            //     nombre: 'toni',
            //     edad: 33,
            //   }, {
            //     nombre: 'Emi',
            //     edad: 25
            //   }]
            // }
            // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29
            // Tu código aca:
            let edades = this.amigos.map(item => item.edad);
            let prom = edades.reduce((a, b) => a + b) / edades.length;
            return prom;
        }
        getEdad(amigo) {
            return this.amigos.find(actividadObj => actividadObj.nombre===amigo).edad;
          }
    }
    return Persona;
    
}

module.exports = crearClasePersona
