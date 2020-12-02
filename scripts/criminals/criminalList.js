import { getCriminals , useCriminals } from "./criminalDataProvider.js"
import { Criminal } from "./criminal.js"

const criminalElement = document.querySelector(".criminalsContainer")
const criminalCards= []




export const CriminalList = () => {
    getCriminals().then( () => {
        let perps = useCriminals()

        for (const perp of perps) {
            criminalCards.push(Criminal(perp))

        }
        
    
        criminalElement.innerHTML += criminalCards.join("")
       
        
        
        
        
        
        /*
            Now that you have the data, what
            component should be rendered?
        */
    })
}
