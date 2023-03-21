/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

Steps:

1   Salvo il numero di chilometri da percorrere
2   Salvo età passeggero 
3   Verifico se minorenne  
4   Verifico se over 65
5   Calcolo Prezzo Totale
6   Stampo Output su HTML

 */

const priceKm = 0.21,
discountUnder18 = 20,
discountOver65 = 40,
kmTot = 501, //prompt('Quanti chilometri devi percorrere?'),
age = 80; //prompt('Quanti anni hai?');

let message,
totalPrice;

totalPrice = kmTot * priceKm;
console.log(totalPrice)

// Calcolo sconti

if(age >= 65){
  
  totalPrice *= 1 - (discountOver65/100);
}else if(age < 18){
  totalPrice *= 1 - (discountUnder18/100);
}

message =`
  Il prezzo del biglietto è di &euro; ${totalPrice.toFixed(2)}.
 `

document.getElementById('header').innerHTML = message

console.log(priceKm, discountUnder18, discountOver65, kmTot, age)
console.log('totalPrice',totalPrice)
console.log('message',message)

document.getElementById('output').innerHTML = message;