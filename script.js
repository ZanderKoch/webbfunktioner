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

//gets a number from an element's .value
function getNum(element) {
    if (Number.isInteger(element.value)){
        return element.value;
    }
    else{
        return null;
    }
}

function displaySum(){
    let sum;
    let minNum = getNum(min);
    let maxNum = getNum(max);

    if(minNum != null || maxNum != null || minNum < maxNum){
        for(let i = minNum; i < maxNum; i++){
            sum += i;
        }
    }
    else{
        alert("make sure that you have entered two whole numbers and that max is larger")
    }
    console.log("sum: " + sum)
    sumResult.innerHTML = sum;
}



//run on loading
window.onload = init();