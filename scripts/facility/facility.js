export const Facility = (facilityObject) => {
    return `
    <section id="facility--${facilityObject.id}" class = "facility">
    <h5 class = "facilityName">${facilityObject.facilityName}</h5>
    <div class = "secLevel">Security: ${facilityObject.securityLevel}</div>
    <div class = "capacity">${facilityObject.capacity}</div>
    `
}