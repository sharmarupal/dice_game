var button=document.getElementById("roll-button");

function rolldice(){
let randomnumber1=Math.floor((Math.random() * 6) +1);
let randomdiceimage="dice"+randomnumber1+".png";
let image_1=document.querySelectorAll("img")[0];
image_1.setAttribute("src",randomdiceimage);

let randomnumber2=Math.floor((Math.random() * 6) +1);
let randomdiceimage2="dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomdiceimage2);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 1 won >>>"
}
else if(randomnumber2>randomnumber1)
{
    document.querySelector("h1").innerHTML="<<< Player 2 won"
}
else
{
    document.querySelector("h1").innerHTML="---Draw---"
}
}

button.addEventListener("click",rolldice);
