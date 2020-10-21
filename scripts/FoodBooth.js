const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "foodTicket") {
        const ticketEvent = new CustomEvent ("foodTicketPurchased", {
            detail: {
                foodTicketButtonClicked: true
            }
        })
        console.log("food  button clicked", ticketEvent)
    }
})
















export const FoodBooth = () => {
    contentTarget.innerHTML = `
        <div class ="ticketBooth">
            <button id = "foodTicket">Food Ticket</button>
        </div>
    `
}