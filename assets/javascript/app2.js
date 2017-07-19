$(document).ready(function() {
    var countRight = 0;
    var countWrong = 0;

    var Question1 = {

        query: "<h2> Where was the first oil well drilled in the United States?</h2>",
        correct: "Titsville, PA",
        wrong1: "Houston, TX",
        wrong2: "Wilkes-Barre, PA",
        wrong3: "Richmond, VA",
        img: '<img src="images/titusville.jpg">'
    }

    var Question2 = {

        query: "<h2> When was the first oil well drilled in the United States?</h2>",
        correct: "August 28th, 1859",
        wrong1: "August 27th, 1859",
        wrong2: "August 28th, 1858",
        wrong3: "August 27th, 1858",
        img: "<img src='images/1859.jpg'>"
    }

    var Question3 = {

        query: "<h2> What year was Spindletop Drilled?</h2>",
        correct: "1901",
        wrong1: "1900",
        wrong2: "1910",
        wrong3: "1899",
        img: "<img src='images/spindletop.jpg'>"

    }

    // var Question4= {

    //}

    // var Question5= {

    //}

    // var Question6= {

    //}

    // var Question7= {

    //}

    // var Question8= {

    //}

    // var Question9= {

    //}

    // var Question10= {

    //}

    // var Question11= {

    //}

    var trivia = [Question1, Question2, Question3]
        // , Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10, Question11]
    var rights = [Question1.correct, Question2.correct, Question3.correct]
    console.log(Question1)
    var counter = 10;
    var span;
    var timer;
    //You want the first page to start the game, so you click start the game and another page shows up with the first question

    $("#start").on("click", function() {
        //  Set Timer


        timer = setInterval(function() {

            if (counter >= 0) {
                $("#count").html("<h2> Time left:" + " " + counter + "</h2>")
                counter--;
            }
            if (counter === 0) {

                counter = 10;
            }
        }, 1000);

        // for(i=0; i<trivia.length; i++)
        // {	
        // 	console.log(i)
        // 	var b= "<form><input type='radio' name='choice' value='wrong'>" + trivia[i].wrong1
        // 	var c= "<form><input type='radio' name='choice' value='wrong'>" + trivia[i].wrong2
        // 	var d= "<form><input type='radio' name='choice' value='wrong'>" + trivia[i].wrong3
        // 	$("#Q1").html(trivia[i].query+"<br>"+"<form><input type='radio' name='choice' value='correct'>"+ trivia[i].correct + " "+b + " "+ c +" "+d)
        // 	console.log('question ', trivia[i].query)
        // 	var check= $('input[name="choice"]');
        // 	$("#SubmitOne").on("click", function(){
        // 		if(check.checked && check=== trivia[i].correct)
        // 		{	setTimeout(function(){
        // 			$("#Q1").html("You are correct! The answer is" + " "+ trivia[i].correct+ "<br>"+ trivia[i].img)
        // 		}, 3000)
        // 		counter= 30
        // 		}
        // 		else
        // 		{
        // 			setTimeout(function(){
        // 			$("#Q1").html("INCORRECT! The answer is" + " "+ trivia[i].correct+ "<br>"+ trivia[i].img)
        // 		}, 3000)

        // 		counter=30
        // 		}

        // 	})



        // }

        
    });


    
    setTimeout(testing(0), 10 * 1000)
	
    

    function testing(i) {

    	

        if (i===trivia.length){
        	var percent = Math.round(countRight / countWrong * 100)
            if (i === trivia.length) {
                $("#Q1").html("You've got" + " " + countRight + " " + "right and" + " " + countWrong + " " + "wrong" + "<br>")
            }
        	} 

        else { 
        
        console.log(i)
        console.log(trivia[i])
        var b = "<form><input type='radio' name='choice' value='wrong'>" + trivia[i].wrong1
        var c = "<form><input type='radio' name='choice' value='wrong'>" + trivia[i].wrong2
        var d = "<form><input type='radio' name='choice' value='wrong'>" + trivia[i].wrong3
        $("#Q1").html(trivia[i].query + "<br>" + "<form><input type='radio' name='choice' value='correct'>" + trivia[i].correct + " " + b + " " + c + " " + d)
        console.log('question ', trivia[i].query)
        var check = $('input[name="choice"]');
        var check2 = check[i]
        $("#SubmitOne").on("click", function() {
            console.log(check2.checked)
            console.log(check2)

            console.log(check2.value === "correct")

            

            if (check2.checked && check2.value === "correct") {

                countRight++
               
                $("#Q1").html("You are correct! The answer is" + " " + trivia[i].correct + "<br>" + trivia[i].img).delay(2000)
               
                console.log(countRight)

            } else {
                countWrong++
                $("#Q1").html("INCORRECT! The answer is" + " " + trivia[i].correct + "<br>" + trivia[i].img)
                
            }
            
            
            console.log(i)
            
           
            testing(i+1)

        })

    }

    

    }









    // $("#SubmitOne").on("click", function(){

    //   var radios = $('input[name="choice"]');

    //   console.log(radios)


    //   for (i = 0, length = radios.length; i < length; i++) {
    //   		var check= radios[i]
    //       if (check.checked && check.value==="correct") 
    //       {
    //          countRight++ 

    //          $("#Q1").html("<h2> CORRECT! The Answer is Titusville, PA!</h2>"+
    // 		"<img src= 'images/titusville.jpg'>")

    //          setInterval(function(){

    //          }, 3000)

    //          counter=30
    //       }

    //       else if (check.checked && check.value!=="correct" || counter===0)
    //       {
    //       	$("#Q1").html("<h2> INCORRECT! The Answer is Titusville, PA!</h2>"+
    // 		"<img src= 'images/titusville.jpg'>")

    // 		counter=30
    //       }

    //  			 }
    //  		countWrong= 11-countRight


    // });

})