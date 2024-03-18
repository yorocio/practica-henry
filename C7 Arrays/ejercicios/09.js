function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   let indiceAleatorio = Math.floor(Math.random(array) * array.length)
   if(array.length <= 0){
      return undefined;
   }
   else{
   return array[indiceAleatorio] ;
   }
}

module.exports = obtenerElementoAleatorio;
