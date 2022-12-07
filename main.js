// Caught Speeding CYU Asgn

//HTML Variables
let speedEl = document.getElementById("speed").value;
let limitEl = document.getElementById("limit").value;
let ticketEl = document.getElementById("ticket");

//Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //IF Statements
  if (speedEl >= limitEl + 20) {
    ticketEl.innerHTML = "BIG TICKET";
  } else if (speedEl >= limitEl + 10) {
    ticketEl.innerHTML = "SMALL TICKET";
  } else {
    ticketEl.innerHTML = "NO TICKET";
  }
}
