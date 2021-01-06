let witnesses = []

export const useWitnesses = () => {
    return witnesses.slice()
}



export const getWitnesses = () => {
   
   return fetch("https://criminals.glassdale.us/criminals")
       .then(response => response.json())
       .then(
           parsedWitnesses => {
               console.table(parsedWitnesses)
               witnesses = parsedWitnesses
           }
       )
}