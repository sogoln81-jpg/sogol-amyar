const start = new Date("2020-07-29T22:40:00");

function updateCounter() {

const now = new Date();

const diff = now - start;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

const minutes = Math.floor((diff / (1000 * 60)) % 60);

const seconds = Math.floor((diff / 1000) % 60);

document.getElementById("counter").innerHTML =
`❤️ Together for<br><br>
<b>${days}</b> Days
<b>${hours}</b> Hours
<b>${minutes}</b> Minutes
<b>${seconds}</b> Seconds`;

}

setInterval(updateCounter,1000);

updateCounter();
