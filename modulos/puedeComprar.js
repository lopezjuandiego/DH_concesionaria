const puedeComprar= function (autos, persona) {
    return (
      this.persona.capacidadDePagoTotal >= this.autos.precio &&
      this.persona.capacidadDePagoEnCuotas >= autos.precio / autos.cuotas
    );
  }
  module.exports = puedeComprar