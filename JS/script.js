// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



// chiedo all'utente il numero di kilometri da percorrere
let distance = parseInt(prompt("Inserisci il numero di kilometri"));

// chiedo all'utente l'età
let age = parseInt(prompt("Inserisci l'età"));

console.log("distanza in km ", distance, "età ", age);


// definisco il prezzo del biglietto
let price = distance * 0.21;

console.log("prezzo intero: € ", price);

// verifico se l'età del cliente permette lo sconto
// se l'età del cliente è inferiore a 18 applica sconto 20%
let discount = 0;

if (age < 18) {
    discount = price * 0.20
} else if (age > 65) {
    discount = price * 0.40
} else {discount = 0}



let finalPrice = price - discount;

console.log("ammontare sconto: € ", discount);

console.log("Totale: € ", finalPrice.toFixed(2));


