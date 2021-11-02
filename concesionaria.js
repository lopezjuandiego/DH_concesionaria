const autos = require("./modulos/autos");
const persona = require("./modulos/persona");
const buscarAuto = require("./modulos/buscarAuto");
const venderAuto = require("./modulos/venderAuto");
const autosParaLaVenta = require("./modulos/autosParaLaVenta");
const autosNuevos = require("./modulos/autosNuevos");
const listaDeVentas = require("./modulos/listaDeVentas");
const totalDeVentas = require("./modulos/totalDeVentas");
const puedeComprar = require("./modulos/puedeComprar");
const autosQuePuedeComprar = require("./modulos/autosQuePuedeComprar");

let concesionaria = {
  persona: persona,
  autos: autos,
  buscarAuto : buscarAuto,
  venderAuto : venderAuto,
  autosParaLaVenta : autosParaLaVenta,
  autosNuevos : autosNuevos, 
  listaDeVentas : listaDeVentas,
  totalDeVentas : totalDeVentas,
  puedeComprar : puedeComprar,
  autosQuePuedeComprar : autosQuePuedeComprar
};

//console.log(concesionaria.autosQuePuedeComprar(persona));
//console.log(concesionaria.puedeComprar("Toyota", persona));
//console.log(concesionaria.buscarAuto("APL123"));
//console.log(concesionaria.venderAuto("APL123"));
//console.log("autos en venta",concesionaria.autosParaLaVenta());
//console.log("autos NUEVOS 0km",concesionaria.autosNuevos());
//console.log("Lista de ventas",concesionaria.listaDeVentas());
//console.log("Ventas totales", concesionaria.totalDeVentas())


/*   
DE ESTE MODO NO ME FUNCIONA EN PG
buscarAuto: function (chapa) {
    for (let i = 0; i < autos.length; i++) {
      if (autos[i].patente === chapa) {
        return autos[i];
      } else {
        return null;
      }
    }
   },
  venderAuto: function (chapa) {
    if (this.buscarAuto != null) {
    return autos[0].vendido = true;
    }  
}, */

/*MODULARIZADO
  buscarAuto: function (patente) {
    const autoBuscado = this.autos.find((auto) => auto.patente === patente);
    return autoBuscado ? autoBuscado : null;
  },

  venderAuto: function (parametro) {
    let resultado = this.buscarAuto(parametro);
    return resultado !== null ? (resultado.vendido = true) : (resultado.vendido = false);
  },
*/
/* CON IF TRADICIONAL
    if (resultado !== "null") {
      return (resultado.vendido = true);
    } else return (resultado.vendido = false);*/

  /* autosParaLaVenta: function () {
    return this.autos.filter((elemento) => elemento.vendido == false);
  }, */
  /* autosNuevos: function () {
    return this.autosParaLaVenta().filter((elemento) => elemento.km <= 100);
  }, */
  //CON map
 /*  listaDeVentas: function () {
    let filtroVendido = this.autos.filter(
      (elemento) => elemento.vendido == true
    );
    return filtroVendido.map((elemento) => elemento.precio);
  }, */
  /* lista de ventas con FOR
listaDeVentas: function(){
 let acumulador =[]
 for (let i = 0; i < this.autos.length; i++){
if (this.autos[i].vendido == true){
 acumulador.push(this.autos[i].precio)
}
 } return acumulador
} 
};*/
 /*  totalDeVentas: function () {
    return this.listaDeVentas().reduce(
      (acumulador, numero) => acumulador + numero,
      0
    );
  }, */

 /*  puedeComprar: function (autos, persona) {
    return (
      this.persona.capacidadDePagoTotal >= this.autos.precio &&
      this.persona.capacidadDePagoEnCuotas >= autos.precio / autos.cuotas
    );
  }, */

 /*  autosQuePuedeComprar: function (persona) {
    return this.autosParaLaVenta().filter((elemento) =>
      this.puedeComprar(elemento, persona)
    );
  }, */

//console.log(concesionaria.autosQuePuedeComprar(persona));
//console.log(concesionaria.puedeComprar("Toyota", persona));
//console.log(concesionaria.buscarAuto("APL123"));
//console.log(concesionaria.venderAuto("APL123"));
//console.log("autos en venta",concesionaria.autosParaLaVenta());
//console.log("autos NUEVOS 0km",concesionaria.autosNuevos());
//console.log("Lista de ventas",concesionaria.listaDeVentas());
//console.log("Ventas totales", concesionaria.totalDeVentas())
