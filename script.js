//author: Zander Koch

//declaring variables
let min;
let max;
let sumResult;

//functions

function init(){
    
    //first form
    min = document.getElementById("sum-min");
    max = document.getElementById("sum-max");
    sumResult = document.getElementById("sum-result");
    document.getElementById("sum-button").onclick = displaySum();

    //second form


    //third form
}


function getNum(element) {
    
}

function displaySum(){
    let sum;
    let minNum = min.


    for(let i = min.value; i < max.value; i++){
        sum += i;
    }

    sumResult.innerHTML = sum;
}



//run on loading
window.onload = init();