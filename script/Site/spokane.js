// Get the elements
const thumbnail = document.getElementById('thumbnail');
const popup = document.getElementById('imagePopup');
const popupImage = document.getElementById('popupImage');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// Open the popup
thumbnail.onclick = function() {
    popup.style.display = 'block';
    popupImage.src = thumbnail.src; // Set the popup image source to the thumbnail image source
    caption.textContent = thumbnail.alt; // Set the caption text to the thumbnail alt text
}

// Close the popup
closeBtn.onclick = function() {
    popup.style.display = 'none';
}

// Close the popup if the user clicks outside the image
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}



// alert message

