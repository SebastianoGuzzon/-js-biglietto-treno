const eta = inputEta.value;
console.log(eta);

const eta = inputEta.value;
console.log(eta);

const percorrenza = parseInt(inputKm.value);
console.log(percorrenza);

const prezzoAlKilometro = 0.21;
const prezzoBigliettoSenzaSconto = prezzoAlKilometro * percorrenza;
console.log(prezzoBigliettoSenzaSconto);

const  offerta = "Tariffa Standard"

  if (eta == "minorenne") {
    ((prezzoBigliettoSenzaSconto / 100) * 80);
    offerta = "Sconto Minorenne";
} else if (eta == "over65") {
    ((prezzoBigliettoSenzaSconto / 100) * 60);
    offerta = "Sconto Maggiorenne";
} else {
    (prezzoBigliettoSenzaSconto);
}
