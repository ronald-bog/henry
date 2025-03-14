/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if(x===y){
      resultado=true;
   }else{
      resultado=false;
   }
   return resultado;
}

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if(str1.length===str2.length){
      resultado=true;
   }else{
      resultado=false;
   }
   return resultado;
}

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if(num<90){
      resultado=true;
   }else{
      resultado=false;
   }
   return resultado;
}

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if(num>50){
      resultado=true;
   }else{
      resultado=false;
   }
   return resultado;
}

function esPar(num) {
   if(num%2===0){
      resultado=true;
   }else{
      resultado=false;
   }
   return resultado;
}

function esImpar(num) {
   if(num%2!=0){
      resultado=true;
   }else{
      resultado=false;
   }
   return resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
