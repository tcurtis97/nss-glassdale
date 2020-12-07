import { CriminalList } from "./criminals/criminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import {OfficerSelect} from "./officers/OfficerSelect.js"
import {NoteForm} from "./notes/NoteForm.js"

NoteForm()
CriminalList()
ConvictionSelect()
OfficerSelect()



// TASKS:
// filter the criminals in the dom that match the crime that has been selected
// listen for selectionof a crime and capture the chosen value
// // use the selected value to filter the criminal data
// update the dom 

// which modules are involved:
// criminalList
// ConvictionSelect