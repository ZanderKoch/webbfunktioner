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
    document.getElementById("sum-button").addEventListener("click", () =>{
        displaySum();
    })

    //second form


    //third form
}

//gets a number from an element's .value
function getNum(element) {
    let num = Number(element.value);
    console.log(num)
    if (Number.isInteger(num)){
        return num;
    }
    else{
        return null;
    }
}

//displays the sum of the numbers in range min-max
function displaySum(){
    let sum = 0;
    let minNum = getNum(min);
    let maxNum = getNum(max);

    console.log("min: " + minNum)

    if(minNum != null || maxNum != null || minNum < maxNum){
        for(let i = minNum; i < maxNum; i++){
            sum += i;
        }
        console.log("sum: " + sum)
        sumResult.innerHTML = sum;
    }
    else{
        alert("make sure that you have entered two whole numbers and that max is larger")
    }
    
}



//run on loading
window.onload = init();