// Caught Speeding CYU Asgn

//HTML Variables
let speedEl = document.getElementById("speed");
let limitEl = document.getElementById("limit");
let ticketEl = document.getElementById("ticket")

//Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
//IF Statements
if (limitEl - speedEl < 20) {
ticketEl.innerHTML = ("SMALL TICKET"); 
} else if (limitEl - speedEl > 20) {
ticketEl.innerHTML = ("BIG TICKET");
}


}