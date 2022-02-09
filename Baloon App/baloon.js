var ballon0 = document.getElementById('ballon0');
var ballon1 = document.getElementById('ballon1');
var ballon2 = document.getElementById('ballon2');
var ballon3 = document.getElementById('ballon3');
var ballon4 = document.getElementById('ballon4');
var ballon5 = document.getElementById('ballon5');
var ballon6 = document.getElementById('ballon6');
var ballon7 = document.getElementById('ballon7');
var ballon8 = document.getElementById('ballon8');
var ballon9 = document.getElementById('ballon9');
var ballon10 = document.getElementById('ballon10');
var ballon11 = document.getElementById('ballon11');
var ballon12 = document.getElementById('ballon12');

var yay = document.getElementById('yay-no-ballons');

function ballonPopper(ballonVariable) {
    ballonVariable.addEventListener("mouseover", "popballon");

    function popballon() {
        if(ballonVariable.style.background === "none") {
            ballonVariable.innerText = "";
        }
    else {
        ballonVariable.innerText = "POP!";
        ballonVariable.style.background = "none";

    }
}
ballonVariable.addEventListener("mouseout", popIsOver, false);

function popIsOver() {
    ballonVariable.innerText = "";
}

ballonPopper(ballon0);
ballonPopper(ballon1);
ballonPopper(ballon2);
ballonPopper(ballon3);
ballonPopper(ballon4);
ballonPopper(ballon5);
ballonPopper(ballon6);
ballonPopper(ballon7);
ballonPopper(ballon8);
ballonPopper(ballon9);
ballonPopper(ballon10);
ballonPopper(ballon11);
ballonPopper(ballon12);

document.addEventListener("mouseover", noBallons, false);
function noBallons() {
    if(ballon1.style.background === "none" && ballon1.style.background === "none" &&  
    ballon1.style.background === "none" && ballon1.style.background === "none" && 
    ballon1.style.background === "none" && ballon1.style.background === "none" && 
    ballon1.style.background === "none" &&);
}
yay.style.display = "block";
window.scrollTo(0,0)

};



