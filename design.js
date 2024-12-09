
document.querySelector('#home h2').addEventListener('click', () => {
    alert("Welcome to my home section!");
});


const galleryImages = document.querySelectorAll('#projects .gallery img');
let currentImageIndex = 0;

function cycleImages() {
    galleryImages.forEach((img, index) => {
        img.style.display = index === currentImageIndex ? 'block' : 'none';
    });
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
}
setInterval(cycleImages, 3000);

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        document.getElementById('formMessage').textContent = "Thank you for reaching out!";
        document.getElementById('formMessage').style.color = "green";
    } else {
        document.getElementById('formMessage').textContent = "Please fill in all fields.";
        document.getElementById('formMessage').style.color = "red";
    }
});
