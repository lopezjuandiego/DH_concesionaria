const venderAuto = function (parametro) {
    let resultado = this.buscarAuto(parametro);
    return resultado !== null ? (resultado.vendido = true) : (resultado.vendido = false);
  }
  module.exports = venderAuto;