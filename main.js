let myName = document.getElementById("name");
console.log(myName)


const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.textContent = d.getFullYear();
//  this is for date in the footer

console.log(d)

const greetings = document.getElementById("sayHello");

if (d.getHours() < 12) {
  greetings.textContent = "Good morning!";
  greetings.style.backgroundColor = "orange";
  greetings.style.fontSize = "48px";
  greetings.style.color = "#f1f1f1"
} else if (d.getHours() <= 17) {
  greetings.textContent = "Good afternoon!";
  greetings.style.backgroundColor = "green";
  greetings.style.fontSize = "44px";
  greetings.style.color = "#f1f1f1"
} else {
  greetings.textContent = "Good evening!";
  greetings.style.backgroundColor = "black";
  greetings.style.fontSize = "56px";
  greetings.style.color = "#f1f1f1"
}


const button = document.getElementById('btn-alert');

button.addEventListener("click", () => {
  alert('Hello world!');
});

button.addEventListener("mouseover", () => {
  button.textContent = "Yes!!!!!!!";
});

button.addEventListener("mouseout", () => {
  button.textContent = "Click me!";
});


let singers = ["Luciano Pavarotti", "José Carreras", "Plácido Domingo", "Warren Mok", "Mario Lanza", "Andrea Bocelli", "Rolando Villazón", "Roberto Alagna", "Alfredo Kraus", "Anatoliy Solovianenko", "Franco Corelli", "Juan Diego Flórez"];

const favSingers = document.getElementById("numbers");
singers.forEach((item, index) => {
  const li = document.createElement("li");
  li.innerText = item;



  if (index % 2 === 0) {

    li.style.backgroundColor = "orange";
  } else {
    li.style.backgroundColor = "white"
  }

  favSingers.appendChild(li);
});


