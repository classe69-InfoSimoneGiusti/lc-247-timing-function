let numero = 0;

let clock = setInterval(function () {

    numero++;
    console.log(numero);

}, 1000);


document.getElementById('fermaContatore').addEventListener('click',

    function() {
        clearInterval(clock);
    }

)