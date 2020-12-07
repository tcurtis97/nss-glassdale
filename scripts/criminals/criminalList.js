import { getCriminals , useCriminals } from "./criminalDataProvider.js"
import { Criminal } from "./criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import {useOfficers} from "../officers/OfficerProvider.js"



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
        
        const criminals = useCriminals()
        const matchingCriminals = criminals.filter( (criminal) => criminal.conviction === crime.name)
        
        render(matchingCriminals)
        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    
    }
})


const render = (criminals) => {
    let criminalCards= []
    for (const perp of criminals) {
        criminalCards.push(Criminal(perp))
   }
criminalElement.innerHTML = criminalCards.join("")
}




// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            let perps = useCriminals()
            render(perps)
        })
}


eventHub.addEventListener("officerChosen", event => {
   
    const officerId = parseInt(event.detail.officerThatWasChosen)
    const cops = useOfficers()
    const foundCop = cops.find( (cop) => cop.id === officerId)
  
    
    
    
   const criminals = useCriminals()
        const matchingCriminals = criminals.filter( (criminalObj) => criminalObj.arrestingOfficer === foundCop.name)
        
        render(matchingCriminals)
})














// old function before decoupling
// export const CriminalList = () => {
//     getCriminals().then( () => {
//         let perps = useCriminals()

//         for (const perp of perps) {
//             criminalCards.push(Criminal(perp))

// //         }
        
    
//         criminalElement.innerHTML += criminalCards.join("")
       
        
        
        
        
        
//         /*
//             Now that you have the data, what
//             component should be rendered?
//         */
//     })
// }

