let button2 = document.querySelector("#btn-2");
let button1 = document.querySelector("#btn-1");
let button3 = document.querySelector("#btn-3");
let button4 = document.querySelector("#btn-4");
let button5 = document.querySelector("#btn-5");
const card1 = document.querySelector("#card-1");
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");
const card4 = document.querySelector("#card-4");
const card5 = document.querySelector("#card-5");
const card6 = document.querySelector("#card-6");
const card7 = document.querySelector("#card-7");
const card8 = document.querySelector("#card-8");
const card9 = document.querySelector("#card-9");

//  button 2
button2.addEventListener("click", (event) => {
  if (card1.style.display === "none") {
    card1.style.display = "block";
    card3.style.display = "block";
  } else {
    card2.style.display = "none";
    card4.style.display = "none";
    card5.style.display = "none";
    card6.style.display = "none";
    card7.style.display = "none";
    card8.style.display = "none";
  }
});

//  button 3
button3.addEventListener("click", (event) => {
  if (card2.style.display === "block") {
    // card2.style.display = "block";
    card4.style.display = "block";
    card7.style.display = "block";
  } else {
    card1.style.display = "none";
    card5.style.display = "none";
    card6.style.display = "none";
    card7.style.display = "none";
    card8.style.display = "none";
  }
});

// button 4
button4.addEventListener("click", (event) => {
  if (card1.style.display === "none") {
    card1.style.display = "block";
    card6.style.display = "block";
    card7.style.display = "block";
  } else {
    card5.style.display = "none";
    card3.style.display = "none";
    card4.style.display = "none";
    card7.style.display = "none";
    card8.style.display = "none";
  }
});

button5.addEventListener("click", (event) => {
  if (card2.style.display === "none") {
    card2.style.display = "block";
    card3.style.display = "block";
    card5.style.display = "block";
    card2.style.display = "block";
    card9.style.display = "block";
  } else {
    card4.style.display = "none";
    card7.style.display = "none";
    card8.style.display = "none";
    card6.style.display = "none";
  }
});

button1.addEventListener("click", (event) => {
  if (card6.style.display === "none") {
    card2.style.display = "block";
    card3.style.display = "block";
    card5.style.display = "block";
    card2.style.display = "block";
    card9.style.display = "block";
    card1.style.display = "block";
    card4.style.display = "block";
    card7.style.display = "block";
    card8.style.display = "block";
    card6.style.display = "block";
  }
});

console.log('Hello');