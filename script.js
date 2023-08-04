// Write your JavaScript code here!

window.addEventListener("load", function() {
    const btn = document.getElementById("formSubmit")
    const bottomList = document.getElementById("faultyItems")
    const form = document.querySelector("form")

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    pickPlanet(listedPlanets)
    })
    btn.addEventListener("click", function(event){
    event.preventDefault();
    let pilotSubmit = document.querySelector("input[name=pilotName]");
    let copilotSubmit = document.querySelector("input[name=copilotName]");
    let fuelSubmit = document.querySelector("input[name=fuelLevel]");
    let cargoSubmit = document.querySelector("input[name=cargoMass]");
    formSubmission(document, bottomList, pilotSubmit, copilotSubmit, fuelSubmit, cargoSubmit);
    //formSubmission(document, bottomList, mainPilot, mainCoPilot, fuelLevel, cargoLevel)
    //changes
   })
});