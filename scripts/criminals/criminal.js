const eventHub = document.querySelector(".container")

export const Criminal = (criminals) => {
    return `
        <section class="criminalCards">
            <div class="criminalName">${criminals.name}</div>    
            <div class="criminalAge">Age: ${criminals.age}</div>
            <div class="criminalConviction">Crime: ${criminals.conviction}</div>
            <div class="incarcerationDate"> Term Start: ${new Date(criminals.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="incarcerationDate">Term End: ${new Date(criminals.incarceration.end).toLocaleDateString('en-US')}</div>
            <button class="associatesButton" id="associates--${criminals.id}">Associate Alibis</button>
        </section>
    `
  }

  eventHub.addEventListener("click", clickevent => {
    if (clickevent.target.id.startsWith("associates--")) {
        const [prefix, chosenCriminal] = clickevent.target.id.split("--")
        const customEvent = new CustomEvent("showAlibi", {
            detail: {
                criminalId: chosenCriminal
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

















