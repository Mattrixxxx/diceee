var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var image ="images/dice"+randomNumber1+".png";
document.querySelector("img. img1").setAttribute("src",image);