import {saveNote} from "./NoteProvider.js"


const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")






// listens for a click of the save button and takes the values inputed and calls saveNote() to store in the api

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // need to gather the data from the form
       const author = document.querySelector("#author").value
        const text = document.querySelector("#text").value
        const suspect = document.querySelector("#suspect").value

        // Make a new object representation of a note
        const newNote = {
            author:author,
            text: text,
            suspect: suspect,
            timestamp: Date.now()
            // Key/value pairs here
        }

        // Change API state and application state
        saveNote(newNote)
    }
})













// puts the buttons into the dom

const render = () => {
    contentTarget.innerHTML = `
        Put some input fields and prompts here
        <input type="text" id="author" placeholder="author name">
        <textarea id="text" placeholder = "note text"></textarea>
        <input type="text" id="suspect" placeholder="suspect name">

        <button id="saveNote">Save Note</button>
    `
}





export const NoteForm = () => {
    render()
}