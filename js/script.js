// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.

var eta = parseInt(prompt('quanti anni hai?'));
console.log(eta);
var km = parseInt(prompt('quanti km devi percorrere?'));
console.log(km);
var prezzo = 0.21 * km;
console.log(prezzo);
if (eta < 18) {
  prezzo = prezzo * 0.8;
}
else if (eta > 65) {
  prezzo = prezzo * 0.6;
}

document.getElementById('risultato').innerHTML = "il prezzo del biglietto è: " + prezzo + " €";
