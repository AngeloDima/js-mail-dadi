


// Giocatore umano
const playerScore =  Math.floor( Math.random() * 6 ) + 1
console.log('playerScore', playerScore);

// Giocatore PC
const pcScore =  Math.floor( Math.random() * 6 ) + 1
console.log('pcScore', pcScore);


// se punteggio giocatore > PC vince giocatore

if (playerScore > pcScore){
    console.log('vince il giocatore');
} else if (pcScore > playerScore){
     // se punteggio PC > giocatore vince PC
    console.log('vince il PC');
   
} else {
    // altrimenti uguale parità
    console.log('pareggio');
}