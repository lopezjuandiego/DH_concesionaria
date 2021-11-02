const listaDeVentas = function () {
    let filtroVendido = this.autos.filter(
      (elemento) => elemento.vendido == true
    );
    return filtroVendido.map((elemento) => elemento.precio);
  }
  module.exports = listaDeVentas; 