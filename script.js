const display= document.getElementById("display")

let firstNumber="";
let secondNumber="";
let operator="";
let isSecondNumber= false;

function appendValue(value){
    if(value==="+" || value==="-"||value==="/"||value==="*"){
        operator=value;
        isSecondNumber=true;
        display.value+=""+value+"";
        return;
    }
    if(!isSecondNumber){
        firstNumber +=value;
    }else{
        secondNumber += value;
    }
    display.value+=value;
}

function clearDisplay(){
    firstNumber="";
    secondNumber="";
    operator="";
    isSecondNumber="";
    display.value="";
}

function calculate(){
    let num1=parseFloat(firstNumber);
    let num2=parseFloat(secondNumber);
    let result=0;

    if(isNaN(num1) || isNaN(num2)){
        display.value="ERROR";
        return;
    }

    switch (operator){
        case "+": result=num1+num2;
        break;
        case "-": result=num1+num2;
        break;
        case "*": result=num1*num2;
        break;
         case "/": result= num2 !==0? num1/num2: "Error";
        break;
        default: display.value="error";
        return;
    }
    display.value=result;

    firstNumber=result.toString();
    secondNumber="";
    operator="";
    isSecondNumber=false;

}