const autos = require("./autos");
let concesionaria = {
  autos: autos,

/*   
COMENTE PORQUE DE ESTE MODO NO ME FUNCIONA EN PG
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

buscarAuto: function (patente) {
    const autoBuscado = this.autos.find((auto) => auto.patente === patente);
    return autoBuscado ? autoBuscado : null;
  },

  venderAuto: function (parametro){
        let resultado = this.buscarAuto(parametro)
        if (resultado !== "null"){
            return resultado.vendido = true
        } else return resultado.vendido = false
        },
autosParaLaVenta : function () {
    return this.autos.filter(elemento => elemento.vendido ==false);
},
autosNuevos : function () {
return this.autosParaLaVenta().filter(elemento => elemento.km <=100); 

},


listaDeVentas: 

};


//console.log(concesionaria.buscarAuto("APL123"));
//console.log(concesionaria.venderAuto("APL123"));
console.log("autos en venta",concesionaria.autosParaLaVenta());
console.log("autos 0km",concesionaria.autosNuevos());

/*
PIDE: una funcion de autos nuevos.
QUE HACE: Utilizar la funcion autos para la venta y filtrarla por km <100
QUE DEVUELVE return autos con menos de 100km

María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. 
Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la 
venta son 0 km. 
Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. 
Vas a tener que desarrollar la funcionalidad autosNuevos.
¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?
Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior.


*/