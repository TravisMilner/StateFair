const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click" , clickEvent => {
    if (clickEvent.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                rideTicketButtonClicked: true
            }
        })
        // console.log("Button was pressed" ,rideEvent)
        eventHub.dispatchEvent(rideEvent)

    } if (clickEvent.target.id === "foodTicket") {
        const foodEvent = new CustomEvent ("foodTicketPurchased", {
            detail: {
                foodTicketButtonClicked: true
            }
        })

        console.log("food  button clicked", foodEvent)
        eventHub.dispatchEvent(foodEvent)

    } if (clickEvent.target.id === "gameTicket") {
        const gameEvent = new CustomEvent ("gameTicketPurchased", {
            detail: {
                foodTicketButtonClicked: true
            }
        })
        eventHub.dispatchEvent(gameEvent)
    }

        
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id = "rideTicket">Ride Ticket</button>
            <button id = "foodTicket">Food Ticket</button>
            <button id = "gameTicket">Game Ticket</button>
        </div>
    `
}

