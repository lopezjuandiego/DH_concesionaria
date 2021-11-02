const autosNuevos = function () {
    return this.autosParaLaVenta().filter((elemento) => elemento.km <= 100);
  }
  module.exports = autosNuevos;