$(document).ready(function () {

//You want the first page to start the game, so you click start the game and another page shows up with the first question

$("#start").on("click", function() {
        //  Set Timer
        setTimeout(ThirtySeconds, 1000 * 30);

      
      });

function ThirtySeconds(){
  var counter = 30;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
        alert('sorry, out of time');
        clearInterval(counter);
    }
  }, 1000);
}
;

countRight=0;
countWrong=0;
var submitAnswer = function() {

  var radios = $('.choice');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  
  if (val === "Titusville" ) {
    countRight++}
  else {
    
    countWrong++
  }
};

})