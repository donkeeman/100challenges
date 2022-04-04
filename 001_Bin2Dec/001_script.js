let bin = document.getElementById("binInput");
let dec = document.getElementById("decInput");
const convertButton = document.getElementById("convertButton");
const errorMessageSection = document.getElementById("errorMessage");
errorMessageSection.style.visibility = "hidden";

convertButton.onclick = decConvert;

function decConvert(){
    let digits = bin.value;
    
    for(let digit of digits){
        // console.log(digit);
        if(!(digit in ["0", "1"])){
            errorMessageSection.style.visibility = "visible";
            dec.value = null;
            return;
        }
    }
    
    dec.value = parseInt(digits, 2);
    errorMessageSection.style.visibility = "hidden";
}