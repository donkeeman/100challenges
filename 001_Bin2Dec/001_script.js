var bin = document.getElementById("bin");
var dec = document.getElementById("dec");
var convertButton = document.getElementById("convert");
var errMessageSection = document.getElementById("error");
errMessageSection.style.visibility = "hidden";

convertButton.onclick = decConvert;

function decConvert(){
    var digits = bin.value;
    
    for(var digit of digits){
        // console.log(digit);
        if(!(digit in ["0", "1"])){
            errMessageSection.style.visibility = "visible";
            dec.value = null;
            return;
        }
    }
    dec.value = parseInt(digits, 2);
    errMessageSection.style.visibility = "hidden";
}