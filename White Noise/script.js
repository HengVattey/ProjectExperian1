// Get the elements
const thumbnail = document.getElementById("thumbnail");
const popup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

const thumbnail1 = document.getElementById("thumbnail1");
const popup1 = document.getElementById("imagePopup1");
const popupImage1 = document.getElementById("popupImage1");
const caption1 = document.getElementById("caption1");
const close1Btn = document.querySelector(".close1");

const thumbnail2 = document.getElementById("thumbnail2");
const popup2 = document.getElementById("imagePopup2");
const popupImage2 = document.getElementById("popupImage2");
const caption2 = document.getElementById("caption2");
const close2Btn = document.querySelector(".close2");

// Open the popup
thumbnail.onclick = function () {
  popup.style.display = "block";
  popupImage.src = thumbnail.src; // Set the popup image source to the thumbnail image source
  caption.textContent = thumbnail.alt; // Set the caption text to the thumbnail alt text
};

// Close the popup
closeBtn.onclick = function () {
  popup.style.display = "none";
};

// Close the popup if the user clicks outside the image
window.onclick = function (event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
};

// Open the popup
thumbnail1.onclick = function () {
  popup1.style.display = "block";
  popupImage1.src = thumbnail1.src; // Set the popup image source to the thumbnail image source
  caption1.textContent = thumbnail1.alt; // Set the caption text to the thumbnail alt text
};

// Close the popup
close1Btn.onclick = function () {
  popup1.style.display = "none";
};

// Close the popup if the user clicks outside the image
window.onclick = function (event) {
  if (event.target === popup1) {
    popup1.style.display = "none";
  }
};

// Open the popup
thumbnail2.onclick = function () {
  popup2.style.display = "block";
  popupImage2.src = thumbnail2.src; // Set the popup image source to the thumbnail image source
  caption2.textContent = thumbnail2.alt; // Set the caption text to the thumbnail alt text
};

// Close the popup
close2Btn.onclick = function () {
  popup2.style.display = "none";
};

// Close the popup if the user clicks outside the image
window.onclick = function (event) {
  if (event.target === popup2) {
    popup2.style.display = "none";
  }
};

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

const parentContainer = document.querySelector(".read-more-container");

parentContainer.addEventListener("click", (event) => {
  const current = event.target;

  const isReadMorebtn = current.className.includes("read-more-btn");

  if (!isReadMorebtn) return;

  const currentText = event.target.parentNode.querySelector(".read-more-text");

  currentText.classList.toggle("read-more-text--show");

  current.textContent = current.textContent.includes("Read More")
    ? "Read Less ←"
    : "Read More →";
});
