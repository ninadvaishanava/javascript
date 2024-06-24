const buttons = document.querySelectorAll(".boxs");
const body = document.querySelector("body");

buttons.forEach(function (boxs) {
  boxs.addEventListener("click", function (e) {
    if (e.target.id === "box1") {
      body.style.backgroundColor = "green";
    }
    if (e.target.id === "box2") {
      body.style.backgroundColor = "yellow";
    }
    if (e.target.id === "box3") {
      body.style.backgroundColor = "red";
    }
    if (e.target.id === "box4") {
      body.style.backgroundColor = "blue";
    }
  });
});
