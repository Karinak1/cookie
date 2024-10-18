const cookieBtn = document.getElementById('image');
const cookieDisplay = document.getElementById('cookie-display');
const cpsDisplay = document.getElementById('cps-display');
const Btn = document.getElementById('btn');
const Audio1 = document.getElementById('audio');
const Reset = document.getElementById('reset');

cookieBtn.addEventListener('click', function () {
  Audio1.play();
});
Btn.addEventListener('click', function () {
  Audio1.play();
});
Reset.addEventListener('click', function () {
  Audio1.play();
});

function display() {
  cookieDisplay.textContent = cookies;
}
let cookies = localStorage.getItem('cookie') || 0;
cookies = Number(cookies);
let cps = localStorage.getItem('cps') || 0;
cps = Number(cps);

setInterval(function () {
  cookies += cps;
  display();
  localStorage.setItem('cookie', cookies);
}, 2000);

cookieBtn.addEventListener('click', function () {
  cookies++;
  display();
  localStorage.setItem('cookie1', cookies);
});

Btn.addEventListener('click', function () {
  if (cookies >= 10) {
    cps++;
    cookies = cookies - 10;
    display();
    cpsDisplay.textContent = cps;
    localStorage.setItem('cps', cps);
  }
});

document.getElementById('reset').addEventListener('click', function () {
  if (cookies >= 100) {
    cookies = 0;
    cps = 10;
  }
  alert('game has been reset');
});

// let cookies = 0;
// cookies = Number(cookies);
// let cps = 0;
// cps = Number(cps);
// localStorage.clear();
