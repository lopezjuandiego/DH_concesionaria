const autosParaLaVenta = function () {
    return this.autos.filter((elemento) => elemento.vendido == false);
  }
  module.exports = autosParaLaVenta;