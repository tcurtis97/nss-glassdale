import { getCriminals, useCriminals } from "../criminals/criminalDataProvider.js"
import {saveNote} from "./NoteProvider.js"


const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")






// listens for a click of the save button and takes the values inputed and calls saveNote() to store in the api

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // need to gather the data from the form
       const author = document.querySelector("#author").value
        const text = document.querySelector("#text").value
        const criminalId = parseInt(document.querySelector("#suspect").value)

        // Make a new object representation of a note
        const newNote = {
            author:author,
            text: text,
            criminalId: criminalId,
            timestamp: Date.now()
            // Key/value pairs here
        }

        // Change API state and application state
        saveNote(newNote)
    }
})









// puts the buttons into the dom

const render = () => {
    const criminalsCollection = useCriminals()
    contentTarget.innerHTML = `
        <input type="text" id="author" placeholder="author name">

        <textarea id="text" placeholder = "note text"></textarea>


        <select class="dropdown" id="suspect">
        <option value="0">Please select a suspect...</option>
        ${
            criminalsCollection.map(
              (criminal) => `
                <option value=${criminal.id}>
                  ${criminal.name}
                </option>
            `)
        }
    </select>

        <button id="saveNote">Save Note</button>
    `
}





export const NoteForm = () => {
    getCriminals()
   .then( () => render())
}