import { CriminalList } from "./criminals/criminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import {OfficerSelect} from "./officers/OfficerSelect.js"
import {NoteForm} from "./notes/NoteForm.js"
import {ShowNoteButton} from "./notes/ShowNotesButton.js"
import "./notes/NoteList.js"
// import { NoteHTMLConverter } from "./notes/Note.js"
import "./alibis/associateList.js"


NoteForm()
CriminalList()
ConvictionSelect()
OfficerSelect()
ShowNoteButton()


// TASKS:
// filter the criminals in the dom that match the crime that has been selected
// listen for selectionof a crime and capture the chosen value
// // use the selected value to filter the criminal data
// update the dom 

// which modules are involved:
// criminalList
// ConvictionSelect



