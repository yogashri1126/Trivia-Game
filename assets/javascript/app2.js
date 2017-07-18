$(document).ready(function () {

var counter =30;
var span;
var timer;
//You want the first page to start the game, so you click start the game and another page shows up with the first question

$("#start").on("click", function() {
        //  Set Timer

  		
  		timer= setInterval(function() {
	   
	    if (counter >= 0) {
	    $("#count").html("<h2> Time left:" + " " + counter + "</h2>")
	    counter--;
	    }
	    if (counter === 0) {
	        clearInterval(timer);
	        counter=30;
	        alert("TIME IS UP!")
	        location.reload()
	    }
	  	}, 1000);
		
  		$("#Q1").html("<h2> Where was the first oil well drilled in the United States?</h2>"+
"<form >"+
"<input type='radio' name='choice' value='correct'> Titsville, PA"+
"<input type='radio' name='choice' value='Houston'> Houston, TX"+
"<input type='radio' name='choice' value='Wilkes-Barre'> Wilkes-Barre, PA"+
"<input type='radio' name='choice' value='Richmond'> Richmond, VA"+
"</form>")
      
      	});




countRight=0;
countWrong=0;

$("#SubmitOne").on("click", function(){

  var radios = $('input[name="choice"]');

  console.log(radios)

  var val= "";
  for (i = 0, length = radios.length; i < length; i++) {
  		var check= radios[i]
      if (check.checked && check.value==="correct") {
         countRight++ 
       				}
      
 			 }
 		countWrong= 11-countRight
    	

});

})