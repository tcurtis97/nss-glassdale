import { Witness } from "./witness.js";
import { getWitnesses, useWitnesses } from "./witnessProvider.js";

// WitnessList module that renders a list of witness HTML elements to .listContainer.

const eventHub = document.querySelector(".container");
const targetListContainerContentElement = document.querySelector("#criminalsContainer");

let appStateWitnesses = [];

// Renders a list of witnessObjects onto the DOM.
const render = () => {
    targetListContainerContentElement.innerHTML = appStateWitnesses.map(w => Witness(w)).join("");
}

/*
 *  Runs the function render to render all witnesses elements the article element 
 *  (.listContainer) when the button element (#button--witnessList) is "clicked".
*/
const WitnessList = () => {
    targetListContainerContentElement.innerHTML = "";
    getWitnesses()
        .then(() => {
            appStateWitnesses = useWitnesses();
            render();
        });
}

/*
 *  Listens for the custom event, WGenerate, to set the article element (.listContainer) to empty,
 *  and render a list of witnesses to the DOM in (.listContainer).
*/
eventHub.addEventListener("witnessListGenerate", e => {
    WitnessList();
})