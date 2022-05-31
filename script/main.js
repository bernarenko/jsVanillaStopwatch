var seconds = 0;

var presentTime = 0;
var elapesedTime = 0;
var reTimed = 0;


function startedClock(){
    if(presentTime != 0){
        presentTime = Date.now()
        myInterval = setInterval(restartingClock, 1000)
    } else {
        presentTime = Date.now()
        myInterval = setInterval(startingClock, 1000)
        document.querySelector('p#marcador').innerHTML = '0'
        document.querySelector('input#butComecar').onclick = ''
    }
}

function startingClock(){
    elapesedTime = (Date.now() - presentTime) / 1000
    
    document.querySelector('p#marcador').innerHTML = elapesedTime 
}

function restartingClock(){
    reTimed = (Date.now() - presentTime) / 1000

    document.querySelector('p#marcador').innerHTML = elapesedTime + reTimed
}

function stoppedClock(){
    clearInterval(myInterval)
    elapesedTime = elapesedTime + reTimed
    
    document.querySelector('input#butComecar').onclick = startedClock
    document.querySelector('input#butComecar').value = 'Continuar'
}

function resettedClock(){
    clearInterval(myInterval)
    seconds = 0
   
    document.querySelector('p#marcador').innerHTML = 'resetado!'
}

