var i= 0
setTimeout(testing, 30*1000)

function testing()
	{
	  	var b= "<form><input type='radio' name='choice' value='wrong'>" + trivia[i].wrong1
	  	var c= "<form><input type='radio' name='choice' value='wrong'>" + trivia[i].wrong2
	  	var d= "<form><input type='radio' name='choice' value='wrong'>" + trivia[i].wrong3
	  	$("#Q1").html(trivia[i].query+"<br>"+"<form><input type='radio' name='choice' value='correct'>"+ trivia[i].correct + " "+b + " "+ c +" "+d)
	  	console.log('question ', trivia[i].query)
	  	var check= $('input[name="choice"]');
	  	$("#SubmitOne").on("click", function(){
	  		if(check.checked && check=== trivia[i].correct)
	  		{	setTimeout(function(){
	  			$("#Q1").html("You are correct! The answer is" + " "+ trivia[i].correct+ "<br>"+ trivia[i].img)
	  		}, 3000)
	  		counter= 30
	  		}
	  		else
	  		{
	  			setTimeout(function(){
	  			$("#Q1").html("INCORRECT! The answer is" + " "+ trivia[i].correct+ "<br>"+ trivia[i].img)
	  		}, 3000)}

	  		counter=30

	  		i++

	}

}

testing()

