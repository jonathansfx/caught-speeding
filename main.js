// Caught Speeding CYU Asgn

//HTML Variables
let speedEl = document.getElementById("speed").value;
let limitEl = document.getElementById("limit").value;
let ticketEl = document.getElementById("ticket");

//Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //IF Statements
  if (speedEl - 20 >= limitEl) {
    ticketEl.innerHTML = "BIG TICKET";
  } else if (speedEl - 20 <= limitEl) {
    ticketEl.innerHTML = "SMALL TICKET";
  } else if (limitEl <= speedEl) {
    ticketEl.innerHTML = "NO TICKET";
  }
}
