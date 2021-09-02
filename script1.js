let userName = prompt("Hallo en welkom bij het spel 'Guess the Number' ! Wat is je naam?");

if (userName != null) {
    alert ("Dus je wilt meedoen met het spel " + userName );
} 
console.log("Naam invullen");

prompt('Vul hier het te raden nummer in. (0 t/m25)');
console.log("Nummer invullen");

const guessNumber = function (){
    const randomNum = Math.floor(Math.random() * 25 + 1);
console.log("Random nummer");


var guess;
guess = prompt("Vul hier het te raden nummer in. (0 t/m 25");
     console.log("Your guess is: " + guess);

        if (guess < randomNum){
            alert("Dat is niet juist. Te laag. Probeer het nogmaals");
    }   else if (guess > randomNum) {
            alert(" Dat is niet juist. Te hoog. Probeer het nogmaals ");
    }   else if  (guess == randomNum){
            alert ("Fantastische je heb gewonnen");
    }   else {
            alert ("Error!!! Vul een cijfer in.") 
    }
}
guessNumber();
