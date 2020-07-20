console.log('All set!');
var joken = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
var imgElement = document.querySelector('.img');
var imgElement2 = document.querySelector('.img2');
var btnElement = document.querySelector('.btn');
var pontos1 = document.querySelector('.pontos1');
var pontos2 = document.querySelector('.pontos2');
pontos1.innerHTML = 0;
pontos2.innerHTML = 0;
var i = 0;
var j = 0;
var l = 0;
var z = 0;

btnElement.onclick = function() {



    var winner = document.querySelector('.vencedor');
    var n = Math.round(Math.random() * 2);
    var m = Math.round(Math.random() * 2);
    var player1 = imgElement.src = joken[n];
    var player2 = imgElement2.src = joken[m];


    if (player1 == "images/1.jpg" && player2 == "images/2.jpg") { //TESOURA X PAPEL
        document.querySelector('.vencedor').innerHTML = "Player 1 Venceu";
        i++;
        pontos1.innerHTML = i;

    } else if (player2 == "images/1.jpg" && player1 == "images/2.jpg") {
        document.querySelector('.vencedor').innerHTML = "Player 2 Venceu";
        j++;
        pontos2.innerHTML = j;

    } else if (player1 == "images/2.jpg" && player2 == "images/3.jpg") { // PAPEL VS PEDRA
        document.querySelector('.vencedor').innerHTML = "Player 1 Venceu";
        i++;
        pontos1.innerHTML = i;
    } else if (player2 == "images/2.jpg" && player1 == "images/3.jpg") {
        document.querySelector('.vencedor').innerHTML = "Player 2 Venceu";
        j++;
        pontos2.innerHTML = j;


    } else if (player1 == "images/3.jpg" && player2 == "images/1.jpg") { // PEDRA VS TESOURA
        document.querySelector('.vencedor').innerHTML = "Player 1 Venceu";
        i++;
        pontos1.innerHTML = i;
    } else if (player2 == "images/3.jpg" && player1 == "images/1.jpg") {
        document.querySelector('.vencedor').innerHTML = "Player 2 Venceu";
        j++;
        pontos2.innerHTML = j;

    } else {
        l++;
        document.querySelector('.vencedor').innerHTML = "EMPATE" + "(" + l + ")"; //EMPATE
    }
}