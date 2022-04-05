let previewDiv = document.getElementById("preview");

previewDiv.style.width = previewDiv.style.height = window.innerWidth * 0.3 + "px";
previewDiv.style.backgroundColor = "green";

let tlh = document.getElementById("tlh");
let trh = document.getElementById("trh");
let blh = document.getElementById("blh");
let brh = document.getElementById("brh");
let tlv = document.getElementById("tlv");
let trv = document.getElementById("trv");
let blv = document.getElementById("blv");
let brv = document.getElementById("brv");

let inputs = document.querySelectorAll("input");

let cssPre = document.getElementById("cssPre");
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

const copyButton = document.getElementById("copyButton");
copyButton.onclick = function(){
    navigator.clipboard.writeText(cssPre.innerHTML);
    alert("CSS code is copied to clipboard.");
}
