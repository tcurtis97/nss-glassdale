import {getFacilities, useFacilities} from "../facility/FacilityProvider.js"
import { Facility } from "../facility/facility.js"

const eventHub = document.querySelector(".container");
const targetListContainerContentElement = document.querySelector("#criminalsContainer");

let appStateFacilities = [];

const render = () => {
    targetListContainerContentElement.innerHTML = appStateFacilities.map(f => Facility(f)).join("");
}


const FacilityList = () => {
    targetListContainerContentElement.innerHTML = "";
    getFacilities()
        .then(() => {
            appStateFacilities = useFacilities();
            render();
        });
}


eventHub.addEventListener("facilitiesButtonClicked", e => {
    FacilityList();
})