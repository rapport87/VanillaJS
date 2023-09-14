const clock = document.querySelector("h2#clock");

function getClock() {
  const time = new Date();
  const hour = String(time.getHours()).padStart(2, "0");
  const min = String(time.getMinutes()).padStart(2, "0");
  const sec = String(time.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hour}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);
