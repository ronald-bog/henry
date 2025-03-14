function loboEstaONoEsta(array) {
  // La funcion recibe un array 'array' de strings y numeros  como parametro
  // la funcion debe retornar true o false dependiendo de si 'lobo' esta en el array o no
  // Por ej:
  // loboEstaONoEsta(['hola', 1, 3,  'palabra']) debe devolver false
  // ideas(['hola', 'buena', 'lobo', 4, 5, ]) debe devolver true
  // Tu código aca:
    verifica=array.some(palabra => palabra === 'lobo');
  return verifica;
}

console.log(loboEstaONoEsta(['hola', 1, 3, 'palabra'])); // Output: false
console.log(loboEstaONoEsta(['hola', 'buena', 'lobo', 4, 5])); // Output: true

/* let arreglo = { Luna: {
  edad: 25
},
Sebas: {
  edad: 7
},
Marce: {
  edad: 34
},
Nicky: {
 edad: 15
}};
console.log(countUnder18(arreglo).length); */



const crearClasePersona = require("./prueba");

const Persona = crearClasePersona();

const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31},{nombre: 'patrick', edad: 66}]);
persona.addFriend('augusto', 45)
persona.addFriend('Natis', 10)
console.log(persona);
console.log(persona.getFriends());
console.log(persona.getHobbies());
console.log(persona.getPromedioEdad()); 

console.log(persona.getEdad('patrick'));