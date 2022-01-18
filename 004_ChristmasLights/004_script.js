var colors = ['red', 'orangered', 'gold', 'green', 'deepskyblue', 'blue', 'purple'];
var shinyColors = ['indianred', 'darkorange', 'yellow', 'limegreen', 'skyblue', 'royalblue', 'orchid'];
var intervalId;
var circles = document.querySelectorAll(".circle");
var time;
var controlButton = document.getElementById("control");
var intervalID;
var start = false;
var change = false;

for(var i = 0; i<circles.length; i++){
    circles[i].style.backgroundColor = colors[i];
}

controlButton.onclick = function(){
    if(start == false){
        light();
        controlButton.innerHTML = "Stop";
        time = document.getElementById("time");
        intervalID = setInterval(light, parseFloat(time.value)*1000);
        start = true;
    }
    else{
        clearInterval(intervalID);
        controlButton.innerHTML = "Start";
        for(var i = 0; i<circles.length; i++){
            circles[i].style.boxShadow = "";
            circles[i].style.backgroundColor = colors[i];
        }
        start = false;
    }
}

function light(){
    change = !change;
    for(var i = 0; i<circles.length; i++){
        if(i%2 == change){
            circles[i].style.boxShadow = "0 0 1em 0.3em "+shinyColors[i];
            circles[i].style.backgroundColor = shinyColors[i];
        }
        else{
            circles[i].style.boxShadow = "";
            circles[i].style.backgroundColor = colors[i];
        }
    }
}
