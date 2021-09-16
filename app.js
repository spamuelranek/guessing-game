'use strict';

let userAnswer = prompt("What is your name?");

function userName() {
    alert("Welcome " + userAnswer +". So glad you could join us today.");
    document.write( "<p style = 'text-aglin: center; color: black;'>Welcome " + userAnswer + "!</p>"); 
}
function knowSam() {
    let gamePoints = 0;
    // let questionOne = prompt("Does Sam live in Cleveland?");
    // let questionTwo = prompt("Is Sam older than Playstation?");
    // let questionThree = prompt("Has Sam ever played a team sport?");
    // let questionFour = prompt("Can Sam drive a manual vehicle?");
    // let questionFive = prompt("Does sam like to read mostly Science Fiction?");
    // let questionTotal = [questionOne, questionTwo, questionThree, questionFour, questionFive];
    // let alertQuestionOnecorrect = "That's Correct. Sam lives just outside of Seattle";
    // let alertQuestionTwocorrect = "That is correct. Sam is one year older than the Playstation Console";
    // let alertQuestionThreecorrect = "That is correct. Sam has played several and his favorite is Soccer";
    // let alertQuestionFourcorrect = "That is correct. In fact his first car was a baby blue Kia Rio. It was a manual.";
    // let alertQuestionFivecorrect = "That is correct. Sam is very excited about the upcoming 'Dune' movie ";
    // let alertCorrecttotal = [alertQuestionOnecorrect, alertQuestionTwocorrect, alertQuestionThreecorrect, alertQuestionFourcorrect, alertQuestionFivecorrect];
    // let alertQuestionOneIncorrect = "I'm sorry that is incorrect. Sam currently resides just outside of Seattle";
    // let alertQuestionTwoIncorrect = "That is incorrect. Sam is one year older than the Playstiation Console";
    // let alertQuestionThreeIncorrect = "That's incorrect. Sam has played several team sports throughout his life";
    // let alertQuestionFourIncorrect = "That is incorrect. Sam learned to drive on a manual";
    // let alertQuestionFiveIncorrect = "Alas, Sam does mostly read Sci-Fi. He enjoys others but that is his mainstream";
    // let alertIncorrecttotal = [alertQuestionOneIncorrect, alertQuestionTwoIncorrect, alertQuestionThreeIncorrect, alertQuestionFourIncorrect, alertQuestionFiveIncorrect];

    // if(questionTotal[0].toLowerCase() == "yes"){
    //     // console.log( "I'm sorry that is incorrect. Sam currently resides just outside of Seattle")
    //     alert(alertIncorrecttotal[0]);
    // } else if (questionTotal[0].toLowerCase() == "no"){
    //     // console.log("That's Correct. Sam lives just outside of Seattle")
    //     alert(alertCorrecttotal[0]);
    //     gamePoints++;
    // }
   

    // if(questionTotal[1].toLowerCase() == "yes"){
    //     // console.log( "That is correct. Sam is one year older than the Playstation Console")
    //     alert(alertCorrecttotal[1]);
    //     gamePoints++;
    // } else if (questionTotal[1].toLowerCase() == "no"){
    //     // console.log("That is incorrect. Sam is one year older than the Playstiation Console")
    //     alert(alertIncorrecttotal[1]);
    // }
    

    // if(questionTotal[2].toLowerCase() == "yes"){
    //     // console.log( "I'm sorry that is incorrect. Sam currently resides just outside of Seattle")
    //     alert(alertIncorrecttotal[2]);
    // } else if (questionTotal[2].toLowerCase() == "no"){
    //     // console.log("That's Correct. Sam lives just outside of Seattle")
    //     alert(alertCorrecttotal[2]);
    //     gamePoints++;
    // }
    

    // if(questionTotal[3].toLowerCase() == "yes"){
    //     // console.log( "That is correct. Sam is one year older than the Playstation Console")
    //     alert(alertCorrecttotal[3]);
    //     gamePoints++;
    // } else if (questionTotal[3].toLowerCase() == "no"){
    //     // console.log("That is incorrect. Sam is one year older than the Playstiation Console")
    //     alert(alertIncorrecttotal[3]);
    // }


    // if(questionTotal[4].toLowerCase() == "yes"){
    //     // console.log( "That is correct. Sam is one year older than the Playstation Console")
    //     alert(alertCorrecttotal[4]);
    //     gamePoints++;
    // } else if (questionTotal[4].toLowerCase() == "no"){
    //     // console.log("That is incorrect. Sam is one year older than the Playstiation Console")
    //     alert(alertIncorrecttotal[4]);
    // }

    // for (let i=0; i<4; i++) {
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
    let guess = 0;
    let correct = true;
    while (guess < 6 && correct){
        let colorAnswer = prompt(" What is some of Sam's favorite colors?");
        let samsColor = ["blue", "purple","orange"]
        for (let i = 0; i < samsColor.length; i++){
            if (colorAnswer.toLowerCase() == samsColor[i]) {
                alert("Woo that is one of them");
                gamePoints++;
                correct = false;
                break;
            }
            else if(colorAnswer){
                alert("Try again TEST")
                break;
            
            }
        }

        guess++;
    }
    //     for(let index=0; index = samsColor.length; index++ ){
    //         if (colorAnswer.toLowerCase() == samsColor[index]){
    //         alert("Woo that is one of them!");
    //         gamePoints++;
    //         break;
    //     }
    // }
    //     // if (colorAnswer.toLowerCase() == samsColor[1]){
    //     //     alert("Woo that is one of them!");
    //     //     gamePoints++;
    //     //     break;
    //     // }
    //     // if (colorAnswer.toLowerCase() == samsColor[2]){
    //     //     alert("Woo that is one of them!");
    //     //     gamePoints++;
    //     //     break;
    //     // }
    //     // if (colorAnswer.toLowerCase() == samsColor[0], samsColor[1], samsColor[2]){
    //     //     alert("Try Again");
    //     // }
    // }
    alert("The correct answers was purple, orange, and blue");
    console.log(gamePoints);



    alert("Thank you " + userAnswer + " for getting to know me. You got " + gamePoints + " out of 7.- Sam");
}


