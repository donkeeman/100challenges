var exp = document.getElementById("exp");
var nums = document.querySelectorAll(".num");
var ac = document.getElementById("ac");
var c = document.getElementById("c");
var equal = document.getElementById("equal");
var add = document.getElementById("add");
var sub = document.getElementById("sub");
var mul = document.getElementById("mul");
var div = document.getElementById("div");
var sign = document.getElementById("sign");
var point = document.getElementById("point");

var operand1, operand2, operator, result, isFloat;
operand1 = operand2 = operator = result = "";
isFloat = false;

for(var i = 0; i<nums.length; i++){
    nums[i].onclick = function(){
        if(operator == "")
            setOperand1(this.innerHTML);
        else
            setOperand2(this.innerHTML);
    }
}

ac.onclick = allClear;
c.onclick = clear;
equal.onclick = calculate;
add.onclick = function(){
    if(operand1 != "")
        operator = "+";
    isFloat = false;
};
sub.onclick = function(){
    if(operand1 != "")
        operator = "-";
    isFloat = false;
};
mul.onclick = function(){
    if(operand1 != "")
        operator = "*";
    isFloat = false;
};
div.onclick = function(){
    if(operand1 != "")
        operator = "/";
    isFloat = false;
};
sign.onclick = function(){
    if(operand2 == ""){
        operand1 = 0 - operand1;
        exp.value = operand1;
    }
    else{
        operand2 = 0 - operand2;
        exp.value = operand2;
    }  
}
point.onclick = function(){
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
    if(obj == "0" && exp.value == "0")
        return;
    operand1 += obj;
    exp.value = operand1;
}

function setOperand2(obj){
    exp.value = "";
    if(operand2.length >= 8){
        return;
    }
    if(obj == "0" && operand2 == "0")
        return;
    operand2 += obj;
    exp.value = operand2;
}

function allClear(){
    operand1 = operand2 = operator = "";
    exp.value = 0;
    isFloat = false;
}

function clear(){
    if(operand2 == "")
        operand1 = "";
    else
        operand2 = "";
    exp.value = 0;
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
    exp.value = parseFloat(result.toPrecision(3));
    result = exp.value;
    operand1 = result;
    operator = "";
    operand2 = "";
    isFloat = false;
}