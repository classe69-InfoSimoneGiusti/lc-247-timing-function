/* simulo un loader della pagina */

setTimeout(simulateLoadInProgress, 3000);

function simulateLoadInProgress() {
    const loadInProgressDom = document.querySelector('.load-in-progress');
    loadInProgressDom.classList.add('d-none');

    const timerDom = document.querySelector('.timer');
    timerDom.classList.add('d-flex');
    timerDom.classList.remove('d-none');
}


/* Gestione degli interval */

const startDom = document.querySelector('.start');
const pauseDom = document.querySelector('.pause');
const stopDom = document.querySelector('.stop');

let clock; // uso una variabile globale per salvare l'id di interval
let time = 0;

startDom.addEventListener('click', function() {

    //creo un nuovo interval ed assegno il riferimento a clock
    if (clock == undefined) { // impedisco di poter premete play più volte
        clock = setInterval(function() {
            time += 0.1;
            writeTimeToDisplay(time.toFixed(2)); // puo essere utile per mostrare come js tratta i numeri a virgola mobile
        }, 100);                                 // https://www.w3schools.com/js/js_numbers.asp
                                                 // https://www.w3schools.com/js/tryit.asp?filename=tryjs_numbers_inaccurate2
    }

})

pauseDom.addEventListener('click', function() {

    clearInterval(clock);
    clock = undefined;

})

stopDom.addEventListener('click', function() {

    clearInterval(clock);

    clock = undefined;  //resetto la variabile clock in modo che possa assegnarci un nuovo interval
    time = 0;           //resetto il timer

    writeTimeToDisplay(time);

})

function writeTimeToDisplay(number) {

    const displayDom = document.getElementById('display');
    displayDom.innerText = number;

}
