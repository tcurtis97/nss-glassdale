const eventHub = document.querySelector(".container");
const targetContentContainer = document.querySelector("#facility__button");


export const FacilityBTN = () => {
    targetContentContainer.innerHTML += `
    <button id="button--facilityList">Show All Facilities</button>
    `
};


eventHub.addEventListener("click", event => {
    if (event.target.id === ("button--facilityList")) {
        const facilitiesButtonClickedEvent = new CustomEvent("facilitiesButtonClicked");
        eventHub.dispatchEvent(facilitiesButtonClickedEvent);

    }
});