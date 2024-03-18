function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
   let cadenas = [str1, str2, str3]
   let masLargo = cadenas[0].length

   for (let i = 0; i < cadenas.length; i++) {
      if (cadenas[i].length > masLargo) {
         masLargo = cadenas[i].length;
      }
   }
   const arrayFinal = []
   for (let i = 0; i < masLargo; i++) {
      if (str1[i]) {
         arrayFinal.push(str1[i]);
      }
      if (str2[i]) {
         arrayFinal.push(str2[i]);
      }
      if (str3[i]) {
         arrayFinal.push(str3[i]);
      }
   }
   return arrayFinal.join('');
}
module.exports = combine;
