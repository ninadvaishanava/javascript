const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalid;
const startchange = function () {
  intervalid = setInterval(changebg, 1000);
  function changebg() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopchange = function () {
  clearInterval(intervalid);
};

document.querySelector("#start").addEventListener("click", startchange);
document.querySelector("#stop").addEventListener("click", stopchange);
