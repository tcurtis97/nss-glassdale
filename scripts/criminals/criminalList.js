import { getCriminals , useCriminals } from "./criminalDataProvider.js"
import { Criminal } from "./criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import {useOfficers} from "../officers/OfficerProvider.js"
import {getFacilities, useFacilities} from "../facility/FacilityProvider.js"
import {getCriminalFacilities, useCriminalFacilities} from "../facility/CriminalFacilityProvider.js"

const criminalElement = document.querySelector("#criminalsContainer")
const eventHub = document.querySelector(".container") 


eventHub.addEventListener("crimeChosen", event => {
    
        /*
            Filter the criminals application state down to the people that committed the crime
        */
    
    if (event.detail.crimeThatWasChosen !=='0'){
    
        // filter the criminals app state down to the people that commited the crime
        
        const crimes = useConvictions()
        const crime = crimes.find( (crime) => crime.id === parseInt(event.detail.crimeThatWasChosen))
        
       const criminalsToFilter = criminals.slice()
        const matchingCriminals = criminalsToFilter.filter( (criminal) => criminal.conviction === crime.name)
        
        render(matchingCriminals)
        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    
    }
})


const render = (criminalList) => {
    // Step 1 - Iterate all criminals
    criminalElement.innerHTML = criminalList.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = crimFac.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const matchingfacilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = facilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, matchingfacilities)
        }
    ).join("")
}


let facilities = []
let crimFac = []
let criminals = []


// Render ALL criminals initally
export const CriminalList = () => {
    // Kick off the fetching of both collections of data
    getCriminals()
        .then(getFacilities)
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                 facilities = useFacilities()
                 crimFac = useCriminalFacilities()
                 criminals = useCriminals()

                // Pass all three collections of data to render()
                render(criminals)
            }
        )
}


eventHub.addEventListener("officerChosen", event => {
   
    const officerId = parseInt(event.detail.officerThatWasChosen)
    const cops = useOfficers()
    const foundCop = cops.find( (cop) => cop.id === officerId)
  
    
    
    
    const criminalsToFilter = criminals.slice()
        const matchingCriminals = criminalsToFilter.filter( (criminalObj) => criminalObj.arrestingOfficer === foundCop.name)
        
        render(matchingCriminals)
})


eventHub.addEventListener("criminalListGenerate", e => {
    CriminalList();

});



