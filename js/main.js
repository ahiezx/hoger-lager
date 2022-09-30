
console.log("loaded: main.js")

let attempts = 0; // Zit poging 0
let playerScore = 10; // Zit speler score 0
let speler = null; // Zit Speler null (de naam is nog niet ingesteld)
let gameStarted = false; // Zit gameStarted false (de spel is nog niet begonnen)
let randomNumber = Math.floor(Math.random() * 25) + 1; // genereert een random nummer tussen de 1 en 25

let message;

function updateNumbers() {
    document.querySelector("#computerScore").innerHTML = attempts;
    document.querySelector("#spelerNum").innerHTML = playerScore;
}

function askName() { // Function om te vragen naam van de speler
    
    while(!speler) { // Als de naam niet geldig is dan..
        speler = prompt("Vul uw naam in") // Vraag weer aan een geldig naam
        if(speler) { // Als de naam geldig is dan..
            document.querySelector("#message").innerHTML = "Welkom " + speler + `
            bij het spelletje Hoger of Lager!
            <br>
            Klik het knop 'Gok' om te gokken
            `; // Zet de naam in het bericht	
            document.querySelector("#speler").innerHTML = speler; // Zit speler naam bij het id: #speler
            document.querySelector("#computerScore").innerHTML = attempts; // Zit poging bij het id: #computerScore
            document.querySelector("#spelerNum").innerHTML = playerScore; // Zit speler score
        }
        else { // Als de naam niet geldig is dan..
            alert("Naam is nodig") // Alert dat de naam niet geldig is
        }
    }

    return true; // Return true als de naam is ingesteld

}

function startGame() {

    console.log("Game started")
    gameStarted = true;

    if(askName()) { // Vraag naam
        updateNumbers(); // Update nummers
        document.querySelector('#startButton').style.display = 'none'; // Verberg start knop
        document.querySelector('#guess').style.display = 'inline'; // Toon guess knop
    }

}

function setMessage(message) {
    document.querySelector("#message").innerHTML = message;
}

function updateAttempts() {
    attempts++; // Tel 1 bij poging op
    document.querySelector("#computerScore").innerHTML = attempts; // Zit poging bij het id: #computerScore
}

function changeColor(color) {
    document.querySelector("#message").style.backgroundColor = color;
}

function guess(){

    if(gameStarted) {
        console.log(randomNumber)
        let guess = prompt("Voer een nummer in tussen de 1 en 25"); // vraagt om een nummer tussen de 1 en 25
        if (guess == randomNumber) { // als het nummer gelijk is aan het random nummer
            playerScore+= 5; // verhoog de score met 1
            updateAttempts() // update poging
            setMessage("Je hebt gewonnen het nummer was " + randomNumber + " <b>Je score is nu " + playerScore + " 👍🎉</b>"); // laat de speler weten dat hij goed heeft geraden en wat zijn score is
            changeColor("green"); // verander de kleur van het bericht naar rood
            randomNumber = Math.floor(Math.random() * 25) + 1; // genereert een random nummer tussen de 1 en 25
            startGame(); // start het spel opnieuw
        } else if (guess < randomNumber) { // als het nummer kleiner is dan het random nummer
            updateAttempts() // update poging
            playerScore--; // verlaag de score met 1
            setMessage("❌ Jij hebt verloren, je moet <b>hoger</b> dan " + guess + " gokken ❌"); // laat de speler weten dat hij hoger moet gokken
            changeColor("red"); // verander de kleur van het bericht naar rood
            startGame(); // start het spel opnieuw
        } else if (guess > randomNumber) { // als het nummer groter is dan het random nummer
            updateAttempts() // update poging
            playerScore--; // verlaag de score met 1
            setMessage("❌ Jij hebt verloren, je moet <b>lager</b> dan " + guess + " gokken ❌"); // laat de speler weten dat hij lager moet gokken
            changeColor("red"); // verander de kleur van het bericht naar rood
            startGame(); // start het spel opnieuw
        } else { // als het nummer niet tussen de 1 en 25 is
            setMessage("Voer een nummer in tussen de 1 en 25"); // laat de speler weten dat hij een nummer tussen de 1 en 25 moet invoeren
            startGame(); // start het spel opnieuw
        }
    }

}
