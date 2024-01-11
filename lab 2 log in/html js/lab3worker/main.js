
let worker1 = new Worker("worker1.js");
let worker2 = new Worker("worker2.js");
let calc = document.getElementById("calc");
let bgColor = document.getElementById("bgColor");

calc.addEventListener("click", () => {

  worker1.postMessage("");

  worker2.postMessage("");
});

worker1.addEventListener("message", (message) => {
  alert(message.data);
});

worker2.addEventListener("message", (message) => {
  alert(message.data);
});


bgColor.addEventListener("click", () => {
  if (document.body.style.background !== "green") {
    document.body.style.background = "green";
  } else {
    document.body.style.background = "blue";
  }
});
