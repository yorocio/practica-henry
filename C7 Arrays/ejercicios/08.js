function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   let encontrarIndice = array.indexOf(num);
   if (encontrarIndice !== -1){
      return encontrarIndice;
   }
   else {
      return -1;
   }
}

module.exports = encontrarElemento;
