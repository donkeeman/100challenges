let display = document.getElementById("displaySection");
const buttons = document.querySelectorAll(".button");
const nums = document.querySelectorAll(".button.num");
const allClearButton = document.getElementById("allClearButton");
const clearButton = document.getElementById("clearButton");
const equalButton = document.getElementById("equalButton");
const addButton = document.getElementById("addButton");
const subButton = document.getElementById("subButton");
const mulButton = document.getElementById("mulButton");
const divButton = document.getElementById("divButton");
const signChangeButton = document.getElementById("signChangeButton");
const pointButton = document.getElementById("pointButton");

let operand1, operand2, operator, result, isFloat;
operand1 = operand2 = operator = result = "";
isFloat = false;


for(var i = 0; i<nums.length; i++){
    nums[i].onclick = function(){
        if(result != ""){
            result = "";
            displaySection.value = "";
        }
        if(operator == "")
            setOperand1(this.innerHTML);
        else
            setOperand2(this.innerHTML);
    }
}

allClearButton.onclick = allClear;

clearButton.onclick = clear;

equalButton.onclick = calculate;

addButton.onclick = function(){
    if(operand1 != "")
        operator = "+";
    isFloat = false;
};

subButton.onclick = function(){
    if(operand1 != "")
        operator = "-";
    isFloat = false;
};

mulButton.onclick = function(){
    if(operand1 != "")
        operator = "*";
    isFloat = false;
};
divButton.onclick = function(){
    if(operand1 != "")
        operator = "/";
    isFloat = false;
};

signChangeButton.onclick = function(){
    if(operand2 == ""){
        operand1 = 0 - operand1;
        displaySection.value = operand1;
    }
    else{
        operand2 = 0 - operand2;
        displaySection.value = operand2;
    }
}
pointButton.onclick = function(){
    if(!isFloat){
        if(operator == ""){
            if(operand1 == "")
                setOperand1("0"+this.innerHTML);
            else
                setOperand1(this.innerHTML);
        }
        else{
            if(operand2 == "")
                setOperand2("0"+this.innerHTML);
            else
                setOperand2(this.innerHTML);
        }
        isFloat = true;
    }
}

function setOperand1(obj){
    if(operand1.length >= 8){
        return;
    }
    if(obj == "0" && displaySection.value == "0")
        return;
    operand1 += obj;
    displaySection.value = operand1;
}

function setOperand2(obj){
    displaySection.value = "";
    if(operand2.length >= 8){
        return;
    }
    if(obj == "0" && operand2 == "0")
        return;
    operand2 += obj;
    displaySection.value = operand2;
}

function allClear(){
    operand1 = operand2 = operator = "";
    displaySection.value = "0";
    isFloat = false;
}

function clear(){
    if(operand2 == "")
        operand1 = "";
    else
        operand2 = "";
    displaySection.value = "0";
    isFloat = false;
}

function calculate(){
    switch(operator){
        case "+":
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case "-":
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case "*":
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case "/":
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
    }
    displaySection.value = parseFloat(result.toPrecision(3));
    result = displaySection.value;
    operand1 = result;
    operator = "";
    operand2 = "";
    result = "";
    isFloat = false;
}