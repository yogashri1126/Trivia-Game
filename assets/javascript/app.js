$(document).ready(function () {

var counter =0;
var span;
var timer;
//You want the first page to start the game, so you click start the game and another page shows up with the first question

$("#start").on("click", function() {
        //  Set Timer

  		
  		timer= setInterval(function() {
	    counter=30

	    counter--
	    if (counter >= 0) {
	      span = $("#count").html("Time left:" + " " + counter);
	      console.log(counter)
	    }
	    if (counter === 0) {
	        clearInterval(counter);
	    }
	  	}, 1000);
		
      
      	});




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