const questionContainer = document.querySelector(".click_event");
const btn1 = document.getElementById("btn_1");
const btn2 = document.getElementById("btn_2");
const btn3 = document.getElementById("btn_3");
const response = document.querySelector("p");

const mousemove = document.querySelector(".mousemove");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question_clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show_response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show_response");
  response.style.background = "red";
});

btn3.addEventListener("click", () => {
  response.classList.add("show_response");
  response.style.background = "red";
});

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0, 0, 0, 0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "black";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});


//---------------------------------------------------
// keypress events

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "black";
  }
});
