var click = new Audio("click.mp3");
var over = new Audio("gameover.mp3");
// bgm.play();

document.querySelector("span#off").addEventListener("click",function(){
  makesound("off");
});
document.querySelector("span#on").addEventListener("click",function(){
  makesound("on");
});
document.querySelector(".mysound").loop=true;

var audio = new Audio("background.mp3");
function makesound(status){
  if (status==="off"){
    on.style.display="block";
    off.style.display="none";
    document.querySelector(".sound-icon").style.color="rgb(30, 156, 231)"
    pause();
  } if(status==="on") {
    on.style.display="none";
    off.style.display="block";
    document.querySelector(".sound-icon").style.color="#f50057"
    play();
  }
  function play(){
    audio.play();
  }
  function pause(){
    audio.pause();
  }
}


var j = "X";

for (var i = 0; i < 9; i++){
  document.querySelectorAll(".box")[i].addEventListener("click",function(){
    var boxtext=this.innerText;
    if((boxtext==="")){
      click.play();
      this.innerText= j;
      this.classList.add("not-allowed");
    }

    var b1 = document.querySelector(".gameContainer :nth-child(1)").innerText;
    var b2 = document.querySelector(".gameContainer :nth-child(2)").innerText;
    var b3 = document.querySelector(".gameContainer :nth-child(3)").innerText;
    var b4 = document.querySelector(".gameContainer :nth-child(4)").innerText;
    var b5 = document.querySelector(".gameContainer :nth-child(5)").innerText;
    var b6 = document.querySelector(".gameContainer :nth-child(6)").innerText;
    var b7 = document.querySelector(".gameContainer :nth-child(7)").innerText;
    var b8 = document.querySelector(".gameContainer :nth-child(8)").innerText;
    var b9 = document.querySelector(".gameContainer :nth-child(9)").innerText;

    console.log(b1);
    console.log(b2);
    console.log(b3);
    console.log(b4);
    console.log(b5);
    console.log(b6);
    console.log(b7);
    console.log(b8);
    console.log(b9);


    if((((b1===b2)&&(b2===b3))&&(b1!==""))||(((b4===b5)&&(b5===b6))&&(b5!==""))||(((b7===b8)&&(b8===b9))&&(b8!==""))||(((b1===b4)&&(b4===b7))&&(b4!==""))||(((b2===b5)&&(b5===b8))&&(b5!==""))||(((b3===b6)&&(b6===b9))&&(b6!==""))||(((b1===b5)&&(b5===b9))&&(b5!==""))||(((b7===b5)&&(b5===b3))&&(b5!==""))) {
      var final = document.querySelector(".gameInfo");
      final.classList.add("show");
      console.log(j+" won 🥳");
      console.log(final);

      document.querySelector(".winning-message").innerHTML=j + " Won!";
      over.play();

    }
    else if((b1!=="")&&(b2!=="")&&(b3!=="")&&(b4!=="")&&(b5!=="")&&(b6!=="")&&(b7!=="")&&(b8!=="")&&(b9!=="")) {
      var final = document.querySelector(".gameInfo");
      final.classList.add("show");
      console.log("tie");
      console.log(final);

      document.querySelector(".winning-message").innerHTML= "This was a tie";
      over.play();
    }
    if(j==="X") j="O";
    else j="X";

    var turn = document.querySelector(".turn");
    turn.innerText="Turn for "+ j;
  });
}
