const eventHub = document.querySelector(".container");
const targetContentContainer = document.querySelector("#criminalBtn");


export const CriminalListButton = () => {
    targetContentContainer.innerHTML += `
    <button id="button--criminalList">Show All Criminals</button>
    `
};



eventHub.addEventListener("click", e => {
    if (e.target.id === ("button--criminalList")) {
        const criminalListGenerateEvent = new CustomEvent("criminalListGenerate");
        eventHub.dispatchEvent(criminalListGenerateEvent);

    }
});