const autosQuePuedeComprar =function (persona) {
    return this.autosParaLaVenta().filter((elemento) =>
      this.puedeComprar(elemento, persona)
    );
  }
  module.exports = autosQuePuedeComprar