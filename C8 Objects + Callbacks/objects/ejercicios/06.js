const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let acc = 0;
  for (let prop in objeto){
    if (objeto.hasOwnProperty(prop));
    acc++;
  }
  return acc;
};

module.exports = contarPropiedades;
