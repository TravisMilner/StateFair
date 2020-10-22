const contentTarget = document.querySelectorAll(".food, .games, .sideshow, .rides")
const eventHub = document.querySelector("#state-fair")

export const BigSpenderTicketHolders = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
       contentTarget.forEach(element => {
           element.innerHTML += `<div class = "person bigSpender"></div>
           `
       })
    })
}