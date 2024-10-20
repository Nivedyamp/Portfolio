//hamburger
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
//project description
function descript1() {
    var x = document.getElementById("demo1");
    x.style.display = (x.style.display === 'block') ? 'none' : 'block';
}

function descript2() {
    var x = document.getElementById("demo2");
    x.style.display = (x.style.display === 'block') ? 'none' : 'block';
}

function descript3() {
    var x = document.getElementById("demo3");
    x.style.display = (x.style.display === 'block') ? 'none' : 'block';
}
//form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    document.getElementById('thankYouMessage').style.display = 'block';

    this.reset();
});
//modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}
