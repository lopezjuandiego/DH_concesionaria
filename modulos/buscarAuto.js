const buscarAuto = function (patente) {
  const autoBuscado = this.autos.find((auto) => auto.patente === patente);
  return autoBuscado ? autoBuscado : null;
};
module.exports = buscarAuto;
