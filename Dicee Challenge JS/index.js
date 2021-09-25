var randomNumber1 = Math.ceil(Math.random() * 6);
var img1 = document.querySelectorAll("img")[0];

var imgSrc = "images/dice" + randomNumber1 + ".png";
img1.setAttribute("src", imgSrc);


var randomNumber2 = Math.ceil(Math.random() * 6);
var img2 = document.querySelectorAll("img")[1];

var imgSrc2 = "images/dice" + randomNumber2 + ".png";
img2.setAttribute("src", imgSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
} else {
    document.querySelector("h1").innerText = "Draw!";
}