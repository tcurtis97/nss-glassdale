import { CriminalList } from "./criminals/criminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import {OfficerSelect} from "./officers/OfficerSelect.js"
import {NoteForm} from "./notes/NoteForm.js"
import {ShowNoteButton} from "./notes/ShowNotesButton.js"
import "./notes/NoteList.js"
// import { NoteHTMLConverter } from "./notes/Note.js"
import "./alibis/associateList.js"
import { WitnessListButton } from "./witnesses/ShowWitnessStatmentsBtn.js";
import "./witnesses/witnessList.js"
import { CriminalListButton } from "./criminals/criminalButton.js";
import { FacilityBTN } from "./facility/DisplayFacilitiesButton.js"

FacilityBTN()
WitnessListButton()
NoteForm()
CriminalList()
ConvictionSelect()
OfficerSelect()
ShowNoteButton()
CriminalListButton();

// TASKS:
// filter the criminals in the dom that match the crime that has been selected
// listen for selectionof a crime and capture the chosen value
// // use the selected value to filter the criminal data
// update the dom 

// which modules are involved:
// criminalList
// ConvictionSelect



