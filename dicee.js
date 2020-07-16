
var randomNumber1=Math.floor(Math.random()*6)+1;//1-6
var randomImg1Name="dice"+randomNumber1+".png";//dice1.png-dice6.png
var randomImg1Src="images/"+randomImg1Name;//images//dice1.png
document.querySelector("img.img1").setAttribute("src",randomImg1Src);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImg2Name="dice"+randomNumber2+".png";//dice1.png-dice6.png
var randomImg2Src="images/"+randomImg2Name;//images//dice1.png
document.querySelector("img.img2").setAttribute("src",randomImg2Src);

if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
}
else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
else {
  document.querySelector("h1").innerHTML="Player 2 wins🚩";
}
