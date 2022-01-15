var previewDiv = document.getElementById("preview");

previewDiv.style.width = previewDiv.style.height = window.innerWidth * 0.3 + "px";
previewDiv.style.backgroundColor = "green";

var tlh = document.getElementById("tlh");
var trh = document.getElementById("trh");
var blh = document.getElementById("blh");
var brh = document.getElementById("brh");
var tlv = document.getElementById("tlv");
var trv = document.getElementById("trv");
var blv = document.getElementById("blv");
var brv = document.getElementById("brv");

var inputs = document.querySelectorAll("input");

var cssPre = document.getElementById("cssPre");
for(let input of inputs){
    input.onchange = function(){
        previewDiv.style.borderTopLeftRadius = tlh.value + "px " + tlv.value + "px";
        previewDiv.style.borderTopRightRadius = trh.value + "px " + trv.value + "px";
        previewDiv.style.borderBottomLeftRadius = blh.value + "px " + blv.value + "px";
        previewDiv.style.borderBottomRightRadius = brh.value + "px " + brv.value + "px";
        cssPre.innerHTML = `div {
    border-top-left-radius: ${tlh.value}px ${tlv.value}px;
    border-top-right-radius: ${trh.value}px ${trv.value}px;
    border-bottom-left-radius: ${blh.value}px ${blv.value}px;
    border-bottom-right-radius: ${brh.value}px ${brv.value}px;
}`;
    }
}

var copyButton = document.getElementById("copy");
copyButton.onclick = function(){
    navigator.clipboard.writeText(cssPre.innerHTML);
    alert("CSS code is copied to clipboard.");
}
