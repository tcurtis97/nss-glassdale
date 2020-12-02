export const Criminal = (criminals) => {
    return `
        <section class="criminalCards">
            <div class="criminalName">${criminals.name}</div>    
            <div class="criminalAge">Age: ${criminals.age}</div>
            <div class="criminalConviction">Crime: ${criminals.conviction}</div>
            <div class="incarcerationDate"> Term Start: ${new Date(criminals.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="incarcerationDate">Term End: ${new Date(criminals.incarceration.end).toLocaleDateString('en-US')}</div>
        </section>
    `
  }