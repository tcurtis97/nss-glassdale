import {saveNote} from "./NoteProvider.js"


const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // need to gather the data from the form
       const author = document.querySelector("#author").value
        const test = document.querySelector("#text").value
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







// add event listener for a click on the form Btn

// need to gather the data from the form

// convert form data to an object

// create a custom event to broadcast the form data to which ever module is listening

// send the data to be stored in the db,via the api








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