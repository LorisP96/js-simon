// genero array di numeri random
const alertArray = alertGenerator();

alert(alertArray);

let userMessage = document.getElementById('message');

let myTimeOut = setTimeout(function() {
    
    let userArray = []

    let userNum = parseInt(prompt('dimmi un numero'));

    let goodArray = [];

    // fino a quando l'utente non inserirà 5 numeri chiedo i numeri.
    while (userArray.length < 4) {

        // numeri inseriti dall'utente
        userNum = parseInt(prompt('dimmi un numero'));

        // se sono inclusi già nell'array non li inserisco,
        // altrimenti lo pusho,
        // mentre se corrispondono ai numeri random li pusho nell'array good
        if (userArray.includes(userNum)) {

            alert('numero già inserito');

        } else {

            userArray.push(userNum);

            if (alertArray.includes(userNum)) {

                goodArray.push(userNum);
            }
        }
    }
    console.log(alertArray)
    console.log(goodArray)
    console.log(userArray)
    
    userMessage.innerHTML = `hai indovinato ${goodArray.length} numeri = ${goodArray}`

}, 30000);

// funzione 
function alertGenerator() {
    const test = [];
    while (test.length !== 5) {
        let randomNum = Math.floor(Math.random() * 100) + 1;
        if (!test.includes(randomNum)) {
        test.push(randomNum);
       }
    }
    return test;
}