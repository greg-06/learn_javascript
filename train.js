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
  response.style.background = "red";
});

btn2.addEventListener("click", () => {
  response.classList.add("show_response");
  response.style.background = "green";
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
  questionContainer.style.background = "grey";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});


//---------------------------------------------------
// keypress events

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();

}

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "black";
  }

  ring(e.key);
});



//--------------------------------------------------
// sroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 120) {
    nav.style.top = 0
  } else {
    nav.style.top = "-50px"
  }
});

//--------------------------------------------------
// Form Events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form")
let pseudo = "";
let language = "";


inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("YESSSSSSSSSSSSS");

  if (cgv.checked) {
    document.querySelector('form > div').innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Niveau choisi : ${language}</h4>

    `;
  } else {
    alert('Veuillez confirmer votre choix')
  }
})

//-----------------------------------------------------
// addEventListener VS onclick
document.body.onclick = function() {
  console.log("Click_moi_??a !")
};


