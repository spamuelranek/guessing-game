'use strict';

// let poopy = "poopy"
// console.log(poopy)

let userAnswer = prompt("What is your name?");

function userName(){
    alert("Welcome " + userAnswer +". So glad you could join us today.");
    document.write("Welcome " + userAnswer + "!"); 
}
function knowSam(){
    let whereSam = prompt("Does Sam live in Cleveland?");
    if(whereSam.toLowerCase() == "yes"){
        // console.log( "I'm sorry that is incorrect. Sam currently resides just outside of Seattle")
        alert("I'm sorry that is incorrect. Sam currently resides just outside of Seattle");
    } else if (whereSam.toLowerCase() == "no"){
        // console.log("That's Correct. Sam lives just outside of Seattle")
        alert("That's Correct. Sam lives just outside of Seattle");
    }
    let ageSam = prompt("Is Sam older than Playstation?");
    if(ageSam.toLowerCase() == "yes"){
        // console.log( "That is correct. Sam is one year older than the Playstation Console")
        alert("That is correct. Sam is one year older than the Playstation Console");
    } else if (ageSam.toLowerCase() == "no"){
        // console.log("That is incorrect. Sam is one year older than the Playstiation Console")
        alert("That is incorrect. Sam is one year older than the Playstiation Console");
    }
    let sportSam = prompt("Has Sam ever played a team sport?");
    if(sportSam.toLowerCase() == "yes"){
        // console.log( "that is incorrect. Sam has played several and his favorite is Soccer")
        alert("That is correct. Sam has played several and his favorite is Soccer");
    } else if (whereSam.toLowerCase() == "no"){
        // console.log("That's Correct. Sam has played several team sports throughout his life")
        alert("That's incorrect. Sam has played several team sports throughout his life");
    }
    let driveSam = prompt("Can Sam drive a manual vehicle?");
    if(driveSam.toLowerCase() == "yes"){
        // console.log( "That is correct. In fact his first car was a baby blue Kia Rio. It was a manual.")
        alert("That is correct. In fact his first car was a baby blue Kia Rio. It was a manual.");
    } else if (driveSam.toLowerCase() == "no"){
        // console.log("That is incorrect. Sam learned to drive on a manual")
        alert("That is incorrect. Sam learned to drive on a manual");
    }
    let readSam = prompt("Does sam like to read mostly Science Fiction?");
    if(readSam.toLowerCase() == "yes"){
        // console.log( "That is correct. Sam is very excited about the upcoming 'Dune' movie ")
        alert("That is correct. Sam is very excited about the upcoming 'Dune' movie ");
    } else if (readSam.toLowerCase() == "no"){
        // console.log("Alas, Sam does mostly read Sci-Fi. He enjoys others but that is his mainstream")
        alert("Alas, Sam does mostly read Sci-Fi. He enjoys others but that is his mainstream");
    }

    alert("Thank you " + userAnswer + " for getting to know me. - Sam")
}


