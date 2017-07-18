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
	    }
	  	}, 1000);
		
      
      	});




countRight=0;
countWrong=0;

$("#SubmitOne").on("click", function(){

  var radios = $('.choice');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
  	console.log(radios)
      if (radios[i].checked) {
         val = radios[i].value; 
         if (val === "Titusville")
         { 
    		countRight++
    	}

    	console.log(countRight)

    	if(val==="August" ){
    		countRight++}

    	if(val=== "Right")
    	{
    		countRight++
    	}
  		
  		if(val=== "Correct")
  		{
  			countRight++
  		}

  		if(val=== "ExxonMobil")
  		{
  			countRight++
  		}

  		if(val=== "Janeen")
  		{
  			countRight++
  		}

  		if(val=== "Accurate")
  		{
  			countRight++
  		}

  		if(val==="USA")
  		{
  			countRight++
  		}

  		if(val === "Venezuela")
  		{
  			countRight++
  		}

  		if(val === "unconventional")
  		{
  			countRight++
  		}

  		if(val === "Old")
  		{
  			countRight++
  		}

  			else {
    				countWrong++
  					}
        			 
       				}
 			 }
    	
    	

  
  

alert("You've got" + " "+ countRight + " "+ "correct" + " "+"and"+ " "+ countWrong + " " + "incorrect!")

});

})