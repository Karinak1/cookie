// DOM Nodes
const cookieBtn = document.getElementById('cookie-btn');
const cookieDisplay = document.getElementById('cookie-display');
const cpsDisplay = document.getElementById('cps-display');
const grandmaBtn = document.getElementById('grandma-btn');

// Game State
let cookies = 0; // TODO get from local storage
let cps = 0; // TODO need to get from local storage

// Game Logic
// every second, increase cookies by cps
setInterval(function () {
  cookies = cookies + cps;
  cookieDisplay.textContent = cookies;
  // TODO update local storage
}, 1000);

// get a cookie when i click the button
cookieBtn.addEventListener('click', function () {
  cookies = cookies + 1;
  cookieDisplay.textContent = cookies;
  // TODO update local storage
});

// upgrade
grandmaBtn.addEventListener('click', function () {
  // make sure they can afford the upgrade
  if (cookies >= 10) {
    cps = cps + 1;
    cookies = cookies - 10;
    cookieDisplay.textContent = cookies;
    cpsDisplay.textContent = cps;
    // TODO update local storage
  }
});
