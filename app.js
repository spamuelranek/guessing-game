'use strict';

let userAnswer = prompt("What is your name?");

function userName() {
    alert("Welcome " + userAnswer +". So glad you could join us today.");
    document.write( "<p style = 'text-aglin: center; color: black;'>Welcome " + userAnswer + "!</p>"); 
}



let questionWhere = "Does Sam live in Cleveland?";
let questionAge = "Is Sam older than Playstation?";
let questionSport = "Has Sam ever played a team sport?";
let questionVehicle = "Can Sam drive a manual vehicle?";
let questionRead = "Does sam like to read mostly Science Fiction?";
let questionTotal = [questionWhere, questionAge, questionSport, questionVehicle, questionRead];
let alertWhereCorrect = "That's Correct. Sam lives just outside of Seattle";
let alertAgeCorrect = "That is correct. Sam is one year older than the Playstation Console";
let alertSportCorrect = "That is correct. Sam has played several and his favorite is Soccer";
let alertDriveCorrect = "That is correct. In fact his first car was a baby blue Kia Rio. It was a manual.";
let alertReadCorrect = "That is correct. Sam is very excited about the upcoming 'Dune' movie ";
let alertCorrecttotal = [alertWhereCorrect, alertAgeCorrect, alertSportCorrect, alertDriveCorrect, alertReadCorrect];
let alertWhereIncorrect = "I'm sorry that is incorrect. Sam currently resides just outside of Seattle";
let alertAgeIncorrect = "That is incorrect. Sam is one year older than the Playstiation Console";
let alertSportIncorrect = "That's incorrect. Sam has played several team sports throughout his life";
let alertDriveIncorrect = "That is incorrect. Sam learned to drive on a manual";
let alertReadIncorrect = "Alas, Sam does mostly read Sci-Fi. He enjoys others but that is his mainstream";
let alertIncorrecttotal = [alertWhereIncorrect, alertAgeIncorrect, alertSportIncorrect, alertDriveIncorrect, alertReadIncorrect];
let grandArray = [questionTotal, alertCorrecttotal,alertIncorrecttotal]



function knowSam() {
    let gamePoints = 0;
    // let ansWer = prompt(questionTotal[0]);
    // if(ansWer.toLowerCase() == "yes"){
    // // console.log( "I'm sorry that is incorrect. Sam currently resides just outside of Seattle")
    // alert(alertIncorrecttotal[0]);
    // }  else if (ansWer.toLowerCase() == "no"){
    // // console.log("That's Correct. Sam lives just outside of Seattle")
    //     alert(alertCorrecttotal[0]);
    //     gamePoints++;
    // }
    // ansWer = prompt(questionTotal[1]);
    // if(ansWer.toLowerCase() == "yes"){
    //     // console.log( "That is correct. Sam is one year older than the Playstation Console")
    //     alert(alertCorrecttotal[1]);
    //     gamePoints++;
    // } else if (ansWer.toLowerCase() == "no"){
    //     // console.log("That is incorrect. Sam is one year older than the Playstiation Console")
    //     alert(alertIncorrecttotal[1]);
    // }

    // ansWer = prompt(questionTotal[2]);
    // if(ansWer.toLowerCase() == "yes"){
    //     // console.log( "I'm sorry that is incorrect. Sam currently resides just outside of Seattle")
    //     alert(alertIncorrecttotal[2]);
    // } else if (ansWer.toLowerCase() == "no"){
    //     // console.log("That's Correct. Sam lives just outside of Seattle")
    //     alert(alertCorrecttotal[2]);
    //     gamePoints++;
    // }

    // ansWer = prompt(questionTotal[3]);
    // if(ansWer.toLowerCase() == "yes"){
    //     // console.log( "That is correct. Sam is one year older than the Playstation Console")
    //     alert(alertCorrecttotal[3]);
    //     gamePoints++;
    // } else if (ansWer.toLowerCase() == "no"){
    //     // console.log("That is incorrect. Sam is one year older than the Playstiation Console")
    //     alert(alertIncorrecttotal[3]);
    // }

    // ansWer = prompt(questionTotal[4]);
    // if(ansWer.toLowerCase() == "yes"){
    //     // console.log( "That is correct. Sam is one year older than the Playstation Console")
    //     alert(alertCorrecttotal[4]);
    //     gamePoints++;
    // } else if (ansWer.toLowerCase() == "no"){
    //     // console.log("That is incorrect. Sam is one year older than the Playstiation Console")
    //     alert(alertIncorrecttotal[4]);
    // }

    // for (let i=0; i<3; i++) {
    //     let numberAnswer = prompt("What is Sam's favorite number?");
    //     console.log( i + '' + numberAnswer);
    //     if( numberAnswer == 72){
    //         alert( "You got it");
    //         gamePoints++;
    //         break;
    //     }
    //     if (numberAnswer < 72){
    //         alert( "You have guessed too low!");
    //     }
    //     else if (numberAnswer > 72){
    //         alert( "You have guessed too high");
    //     }
    // }    
    // alert( "Thanks for playing. The correct answer was 72");
    // // let guess = 0;
    // let correct = true;
    // while (guess < 6 && correct){
    //     let colorAnswer = prompt(" What is some of Sam's favorite colors?");
    //     let samsColor = ["purple","orange"];
    //     for (let i = 0; i < colorAnswer.length; i++){
    //         if (colorAnswer.toLowerCase() == samsColor[i]) {
    //             alert("Woo that is one of them");
    //             gamePoints++;
    //             correct = false;
    //             break;
    //         }
    //         console.log(colorAnswer + "" + samsColor[1])
    //         alert (' Try Again Test');
    //         break;
            
    //     }

    //     guess++;
    // }
    // if (correct == true){
    //     alert("You ran out of guesses. Sorry");
    // }                                                                
    // alert("The correct answers was purple, orange, and blue");
    let guess = 0;
    let correct = true;
    let colorSam =["Purple", "Orange"];
    while (guess < 6 && correct){
        let colorResponse = prompt("What are some of Sam's Favorite colors?");
        for (let i = 0; i < colorSam.length; i++){
            if (colorResponse.toLowerCase() == colorSam[i].toLowerCase()){
                alert("Test");
                correct = false;
                break;
            }
            alert("wrong test");
            break;
        }
    }
    console.log(gamePoints);



    alert("Thank you " + userAnswer + " for getting to know me. You got " + gamePoints + " out of 7.- Sam");
}


