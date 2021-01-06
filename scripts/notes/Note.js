



export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note_title">Suspect: ${ noteObject.criminalName }</div>
            <div class="note_text">${ noteObject.text }</div>
            <div class="note_author">Author: ${ noteObject.author }</div>
            <div class="note_timestamp">Timestamp: ${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div>
            <button id="deleteNote--${noteObject.id}">Delete</button>
        </section>
    `
}