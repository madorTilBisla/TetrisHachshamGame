var elStart1;
var elStart2;
var elTnx;
var strTnx;
var elBack;

/*
load
==================================
Description: Initialize the program, give explanation of the game and start the game.
Parameters: none.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
window.addEventListener("load", function() {
    elStart1 = document.getElementById("game1");
    elStart2 = document.getElementById("game2");
    elTnx = document.getElementById("tnx");
    strTnx = document.getElementById("the-tnx")
    elBack = document.getElementById("back");

    elTnx.addEventListener("click", AddTanx);
    elStart1.addEventListener("click", function() {
        window.location.href = "main.html"
    });
    elStart2.addEventListener("click", function() {
        window.location.href = "main2.html"
    });

    // We execute the same script as before
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function AddTanx(event) {
    console.log("in");
    strTnx.style.visibility = "visible";
    elBack.style.visibility = "visible";
    elBack.addEventListener("click", function() {
        strTnx.style.visibility = "hidden",
        elBack.style.visibility = "hidden";
    });

}

