// Caught Speeding CYU Asgn

//Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
//HTML Variables
let speedEl = document.getElementById("speed").value;
let limitEl = document.getElementById("limit").value;
let ticketEl = document.getElementById("ticket");

//IF Statements
if (speedEl - limitEl >= 20) {
ticketEl.innerHTML = "Big Ticket";
} else if (speedEl - limitEl < 20 && speedEl - limitEl > 0) {
  ticketEl.innerHTML = "Small Ticket";
} else if (speedEl - limitEl == 0 || speedEl < limitEl) {
ticketEl.innerHTML = "No ticket"
}

}