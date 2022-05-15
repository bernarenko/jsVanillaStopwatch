var seconds = 0;


function startedClock(){
    if (seconds != 0){
        myInterval = setInterval(startingClock, 1000)
        document.querySelector('input#butComecar').onclick = ''
    } else{
        document.querySelector('p#marcador').innerHTML = '0'
        myInterval = setInterval(startingClock, 1000)
        document.querySelector('input#butComecar').onclick = ''
    }
    
}

function stoppedClock(){
    clearInterval(myInterval)
    document.querySelector('input#butComecar').onclick = startedClock
    document.querySelector('input#butComecar').value = 'Continuar'
}

function startingClock(){
    seconds++
    document.querySelector('p#marcador').innerHTML = seconds 
}

function resettedClock(){
    clearInterval(myInterval)
    seconds = 0
    document.querySelector('p#marcador').innerHTML = 'resetado!'
}

