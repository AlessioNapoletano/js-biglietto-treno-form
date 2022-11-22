/*                                          Descrizione:
SCRIVERE un programma che chieda all’utente:
    - Il numero di chilometri da percorrere
    - Età del passeggero

CALCOLARE il prezzo del biglietto:
    - Biglietto 0.2762 € al km

APPLICARE la scontistica:
    - va applicato uno sconto del 17.5% per i minorenni
    - va applicato uno sconto del 33.3% per gli over 65.


MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console.
*/

//Chiedo al cliente i valori da tastiera di chilometri e anni del passeggero
const inputKilometresElement = document.getElementById("kilometres");
const inputAgeElement = document.getElementById("age");

//prendo il bottone
const button = document.querySelector('div.buttons a.btn');

//assegno al bottone un evento
button.addEventListener('click', function () {

    //salvo i risultati in una variabile costante, che avrà come tipo di dato un intero
    const age = parseInt(inputAgeElement.value);
    const kilometres = parseInt(inputKilometresElement.value);

    const priceKm = 0.2762 ;
    let priceTicket = priceKm * kilometres;
    let PriceTicketFixed;

    if(age<18){
        priceTicket = priceTicket - (priceTicket * 0.175);
        priceTicketFixed = priceTicket.toFixed(2);
        console.log("Il cliente è minorenne ed il prezzo del biglietto è: " + priceTicketFixed);

        document.getElementById("price").innerHTML= "il passeggero usufruisce della scontistica under-18, il prezzo è: " + priceTicketFixed + "&euro;"
    } else if(age>=65){
        priceTicket = priceTicket - (priceTicket * 0.333);
        priceTicketFixed = priceTicket.toFixed(2);
        console.log("Il cliente è over 65 ed il prezzo del biglietto è: " + priceTicketFixed);

        document.getElementById("price").innerHTML= "il passeggero usufruisce della scontistica Over-65, il prezzo è: " + priceTicketFixed + "&euro;"
    } else{
        priceTicketFixed = priceTicket.toFixed(2);
        console.log("Per il cliente non è prevista una scontistica, il prezzo è: " + priceTicketFixed);

        document.getElementById("price").innerHTML= "il passeggero non usufruisce di nessuna scontistica, il prezzo è: " + priceTicketFixed + "&euro;"
    }


});

