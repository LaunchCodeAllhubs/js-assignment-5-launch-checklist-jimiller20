// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const infoBox = document.getElementById("missionTarget")
   infoBox.innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${imageUrl}">
   `
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */

}

function validateInput(testInput) {
   if (testInput == "") {
    return "Empty"
   } else if (isNaN(testInput)) {
    return "Not a Number"
   } else {
    return "Is a Number"
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let inputs = []
    inputs.push(validateInput(pilot.value), validateInput(copilot.value), validateInput(fuelLevel.value), validateInput(cargoLevel.value))
    if (inputs.includes("Empty")) {alert("All fields are required!")}
    let totalInputs = inputs[0] + inputs[1] + inputs[2] + inputs[3]
    if (totalInputs !== "Not a NumberNot a NumberIs a NumberIs a Number" && !totalInputs.includes("Empty")) {alert("Make sure to enter valid information for each field!")} 
    
    const mainPilot = document.getElementById("pilotStatus")
    const mainCoPilot = document.getElementById("copilotStatus")
    const mainFuel = document.getElementById("fuelStatus")
    const mainCargo = document.getElementById("cargoStatus")
    const mainShip = document.getElementById("launchStatus")
    
    mainPilot.innerHTML = `${pilot.value} is ready for launch`;
    mainCoPilot.innerHTML = `${copilot.value} is ready for launch`;
    let numOfErr = []
    list.style.visibility = "hidden"
    if (fuelLevel.value < 10000 && !totalInputs.includes("Empty")) {
        list.style.visibility = "visible"
        mainFuel.innerHTML = "Not enough fuel for the journey"
        mainShip.innerHTML = "Shuttle not ready for launch"
        mainShip.style.color = "red"
        numOfErr.push("1")
    }
    if (cargoLevel.value > 10000 && !totalInputs.includes("Empty")){
        list.style.visibility = "visible"
        mainCargo.innerHTML = "Too much mass for shuttle takeoff"
        mainShip.innerHTML = "Shuttle not ready for launch"
        mainShip.style.color = "rgb(199, 37, 78)"
        numOfErr.push("2")
    }
    if (numOfErr.length == 0 && !totalInputs.includes("Empty")) {
        list.style.visibility = "visible"
        mainShip.innerHTML = "Shuttle is ready for launch"
        mainShip.style.color = "#419F6A"
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let random = Math.floor(Math.random() * 6)
    addDestinationInfo(document, planets[random].name, planets[random].diameter, planets[random].star, planets[random].distance, planets[random].moons, planets[random].image)
}
//document, name, diameter, star, distance, moons, imageUrl
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
