'use strict';

let userAnswer = prompt("What is your name?");

function userName() {
    alert("Welcome " + userAnswer + ". So glad you could join us today.");
    document.write('<p id="title" > "Welcome "' + userAnswer + '"!</p>"');
}



let questionWhere = "Does Sam live in Cleveland?";
let questionAge = "Is Sam older than Playstation?";
let questionSport = "Has Sam ever played a team sport?";
let questionVehicle = "Can Sam drive a manual vehicle?";
let questionRead = "Does sam like to read mostly Romance Novels?";
let questionTotal = [questionWhere, questionAge, questionSport, questionVehicle, questionRead];
let alertWhereCorrect = "That's Correct. Sam lives just outside of Seattle";
let alertAgeCorrect = "That is correct. Sam is one year older than the Playstation Console";
let alertSportCorrect = "That is correct. Sam has played several and his favorite is Soccer";
let alertDriveCorrect = "That is correct. In fact his first car was a baby blue Kia Rio. It was a manual.";
let alertReadCorrect = "That is correct. Sam mostly reads Science Fiction ";
let alertCorrecttotal = [alertWhereCorrect, alertAgeCorrect, alertSportCorrect, alertDriveCorrect, alertReadCorrect];
let alertWhereIncorrect = "I'm sorry that is incorrect. Sam currently resides just outside of Seattle";
let alertAgeIncorrect = "That is incorrect. Sam is one year older than the Playstiation Console";
let alertSportIncorrect = "That's incorrect. Sam has played several team sports throughout his life";
let alertDriveIncorrect = "That is incorrect. Sam learned to drive on a manual";
let alertReadIncorrect = "Alas, Sam does mostly read Sci-Fi. He enjoys others but that is his mainstream";
let alertIncorrecttotal = [alertWhereIncorrect, alertAgeIncorrect, alertSportIncorrect, alertDriveIncorrect, alertReadIncorrect];
let grandArray = [questionTotal, alertCorrecttotal, alertIncorrecttotal]
let incorrectArray =["yes","no","no","no","yes"]
let correctArray =["no","yes","yes","yes","no",]
let gamePoints = 0;



function knowSam() {
    for (let guess = 0; guess<5; guess++){
    let ansWer = prompt(questionTotal[guess]);
    if(ansWer.toLowerCase() == incorrectArray[guess]){
    // console.log( "I'm sorry that is incorrect. Sam currently resides just outside of Seattle")
    alert(alertIncorrecttotal[guess]);
    }  else if (ansWer.toLowerCase() == correctArray[guess]){
    // console.log("That's Correct. Sam lives just outside of Seattle")
        alert(alertCorrecttotal[guess]);
        gamePoints++;
    }
}

}
function numberGuesser (){
    for (let i=0; i<4; i++) {
        let numberAnswer = prompt("What is Sam's favorite number?");
        console.log( i + '' + numberAnswer);
        if( numberAnswer == 72){
            alert( "You got it");
            gamePoints++;
            break;
        }
        if (numberAnswer < 72){
            alert( "You have guessed too low!");
        }
        else if (numberAnswer > 72){
            alert( "You have guessed too high");
        }
    }    
    alert( "Thanks for playing. The correct answer was 72");
}
function multipleGuess(){
    let guess = 0;
    let correct = true;
    while (guess < 6 && correct){
        let colorAnswer = prompt(" What is some of Sam's favorite colors?");
        let samsColor = ["purple","orange","blue"];
        for (let i = 0; i < colorAnswer.length; i++){
            if (colorAnswer.toLowerCase() == samsColor[i]) {
                alert("Woo that is one of them");
                gamePoints++;
                correct = false;
                break;
            }

        }
        if (correct){
        alert (' Try Again');
        }
        guess++;
    }
    if (correct == true){
        alert("You ran out of guesses. Sorry");
    }                                                                
    alert("The correct answers was purple, orange, and blue");

    console.log(gamePoints);



    alert("Thank you " + userAnswer + " for getting to know me. You got " + gamePoints + " out of 7.- Sam");
}

