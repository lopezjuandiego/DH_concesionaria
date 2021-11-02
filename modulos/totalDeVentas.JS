const totalDeVentas = function () {
    return this.listaDeVentas().reduce(
      (acumulador, numero) => acumulador + numero,
      0
    );
  }
  module.exports = totalDeVentas; 