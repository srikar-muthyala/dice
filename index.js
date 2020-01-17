randomNumber1 = Math.round(Math.random()*6+1);
randomNumber2 = Math.round(Math.random()*6+1);

var test1 = Math.round(Math.random()*6+1);
if(test1 == 1){
    document.querySelector(".img1").src="images/dice1.png";
}
if(test1 == 2){
    document.querySelector(".img1").src="images/dice2.png";
}
if(test1 == 3){
    document.querySelector(".img1").src="images/dice3.png";
}
if(test1 == 4){
    document.querySelector(".img1").src="images/dice4.png";
}
if(test1 == 5){
    document.querySelector(".img1").src="images/dice5.png";
}
if(test1 == 6){
    document.querySelector(".img1").src="images/dice6.png";
}



var test2 = Math.round(Math.random()*6+1);
if(test2 == 1){
    document.querySelector(".img2").src="images/dice1.png";

}
if(test2 == 2){
    document.querySelector(".img2").src="images/dice2.png";
}
if(test2 == 3){
    document.querySelector(".img2").src="images/dice3.png";
}
if(test2 == 4){
    document.querySelector(".img2").src="images/dice4.png";
}
if(test2 == 5){
    document.querySelector(".img2").src="images/dice5.png";
}
if(test2 == 6){
    document.querySelector(".img2").src="images/dice6.png";
}

if(test1 > test2){
  document.querySelector("h1").innerHTML="Player1 wins";
}
else if(test2>test1){
  document.querySelector("h1").innerHTML="Player2 wins";
}
else{
  document.querySelector("h1").innerHTML="Its a draw!!";
}
