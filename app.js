'use strict';

let userAnswer = prompt("What is your name?");

function userName() {
    alert("Welcome " + userAnswer +". So glad you could join us today.");
    document.write( "<p style = 'text-aglin: center; color: black;'>Welcome " + userAnswer + "!</p>"); 
}
function knowSam() {
    let gamePoints = 0;
    let whereSam = prompt("Does Sam live in Cleveland?");
    if(whereSam.toLowerCase() == "yes"){
        // console.log( "I'm sorry that is incorrect. Sam currently resides just outside of Seattle")
        alert("I'm sorry that is incorrect. Sam currently resides just outside of Seattle");
    } else if (whereSam.toLowerCase() == "no"){
        // console.log("That's Correct. Sam lives just outside of Seattle")
        alert("That's Correct. Sam lives just outside of Seattle");
        gamePoints++;
    }
    let ageSam = prompt("Is Sam older than Playstation?");
    if(ageSam.toLowerCase() == "yes"){
        // console.log( "That is correct. Sam is one year older than the Playstation Console")
        alert("That is correct. Sam is one year older than the Playstation Console");
        gamePoints++;
    } else if (ageSam.toLowerCase() == "no"){
        // console.log("That is incorrect. Sam is one year older than the Playstiation Console")
        alert("That is incorrect. Sam is one year older than the Playstiation Console");
    }
    let sportSam = prompt("Has Sam ever played a team sport?");
    if(sportSam.toLowerCase() == "yes"){
        // console.log( "that is incorrect. Sam has played several and his favorite is Soccer")
        alert("That is correct. Sam has played several and his favorite is Soccer");
        gamePoints++;
    } else if (whereSam.toLowerCase() == "no"){
        // console.log("That's Correct. Sam has played several team sports throughout his life")
        alert("That's incorrect. Sam has played several team sports throughout his life");
    }
    let driveSam = prompt("Can Sam drive a manual vehicle?");
    if(driveSam.toLowerCase() == "yes"){
        // console.log( "That is correct. In fact his first car was a baby blue Kia Rio. It was a manual.")
        alert("That is correct. In fact his first car was a baby blue Kia Rio. It was a manual.");
        gamePoints++;
    } else if (driveSam.toLowerCase() == "no"){
        // console.log("That is incorrect. Sam learned to drive on a manual")
        alert("That is incorrect. Sam learned to drive on a manual");
    }
    let readSam = prompt("Does sam like to read mostly Science Fiction?");
    if(readSam.toLowerCase() == "yes"){
        // console.log( "That is correct. Sam is very excited about the upcoming 'Dune' movie ")
        alert("That is correct. Sam is very excited about the upcoming 'Dune' movie ");
        gamePoints++;
    } else if (readSam.toLowerCase() == "no"){
        // console.log("Alas, Sam does mostly read Sci-Fi. He enjoys others but that is his mainstream")
        alert("Alas, Sam does mostly read Sci-Fi. He enjoys others but that is his mainstream");
    }
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
    let guess = 0;
    let correct = true;
    while (guess < 6 && correct){
        let colorAnswer = prompt(" What is some of Sam's favorite colors?");
        let samsColor = ["purple","blue","orange"]
        for (let i = 0; i < samsColor.length; i++){
            if (colorAnswer.toLowerCase() == samsColor[i]) {
                alert("Woo that is one of them");
                gamePoints++;
                correct = false;
                break;
            }
            if (colorAnswer.toLocaleLowerCase() !== samsColor[i]){
                alert("Try again")
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


