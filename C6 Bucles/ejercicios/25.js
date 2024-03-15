function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
let d = string.length - 1;
let n = string.length
for (let i = 0; i <= (n/2)-1; i++){
   d = (n-1) - i;
   if (string[i] !== string[d]){
      return false;
   } 
}
      return true;
}

module.exports = esPalindromo;
