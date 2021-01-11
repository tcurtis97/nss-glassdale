const eventHub = document.querySelector(".container");
const targetContentElement = document.querySelector("#witnessButton");

// Inserts a button, Witness Statements, onto the DOM in the header element (.headerContainer).
export const WitnessListButton = () => {
    targetContentElement.innerHTML += `
    <button id="button--witnessList">Witness Statements</button>
    `
}

/*
*  Listens for a "click" event and dispatches the custom events, witnessListGenerate & disableAffordanceEvent, to the eventHub
*  to set the article element (.listContainer) to empty and render a list of witnesses to the DOM in (.listContainer). 
*/
eventHub.addEventListener("click", e => {
    if (e.target.id === ("button--witnessList")) {
        const witnessListGenerateEvent = new CustomEvent("witnessListGenerate");
        eventHub.dispatchEvent(witnessListGenerateEvent);

    }
})