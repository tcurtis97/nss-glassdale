
import { useCriminals, getCriminals} from "../criminals/criminalDataProvider.js";
import { AlibisHTMLConverter } from "./alibis.js";
import { CriminalList } from "../criminals/criminalList.js";

// CriminalList()
const associateElement = document.querySelector(".alibisButton")
const eventHub = document.querySelector(".container") 


eventHub.addEventListener("showAlibi", event => {
   
   
    const criminals = useCriminals()
    const criminal = criminals.find( (criminal) => criminal.id === parseInt(event.detail.criminalId))
    
    render(criminal)
  
}
)



// export const showalibiButton = () => {
//     const eventHub = document.querySelectorAll(".associatesButton")
//         eventHub.forEach(element => {
//         element.addEventListener("click", clickEvent => {
//             const criminalObj = getCriminal(clickEvent.target.id)
//             console.log(criminalObj.known_associates)
//         })
//     })
    
//     }





const render = (associateObj) => {
    let knownAssociates = []
    let associates = associateObj.known_associates
    for (const associate of associates) {
        knownAssociates.push(AlibisHTMLConverter(associate))
   }
associateElement.innerHTML = knownAssociates.join("")
}






// export const AlibiList = () => {
//     getCriminals()
//         .then(() => {
//             const allAlibis = useCriminals()
//             render(allAlibis)
//         })
// }