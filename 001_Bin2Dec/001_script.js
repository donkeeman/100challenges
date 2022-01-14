var bin = document.getElementById("bin");
var dec = document.getElementById("dec");
var convertButton = document.getElementById("convert");
var errMessageSection = document.getElementById("error");

convertButton.onclick = decConvert;

function decConvert(){
    var digits = bin.value;
    
    for(var digit of digits){
        // console.log(digit);
        if(!(digit in ["0", "1"])){
            errMessageSection.innerHTML = "Binary input must be entered 0 or 1!";
            dec.value = null;
            return;
        }
    }
    dec.value = parseInt(digits, 2);
    errMessageSection.innerHTML = "";

}