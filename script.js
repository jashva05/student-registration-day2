// Welcome alert
window.addEventListener("load", () => {
    alert("Welcome to the Registration Page!");
});

// Form validation
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(this);
    let userData = {};

    for (let [key, value] of formData.entries()) {
        userData[key] = value;
    }

    // Mobile number validation
    if (userData.mnumber.length !== 10) {
        alert("Mobile number must be exactly 10 digits.");
        return;
    }

    alert("Registration Successful!\n\n" + JSON.stringify(userData, null, 2));
    this.reset();
});

// Dynamic "Click Me" feature
const clickBtn = document.createElement("button");
clickBtn.textContent = "Click Me!";
clickBtn.className = "key";
document.querySelector(".form-container").appendChild(clickBtn);

clickBtn.addEventListener("click", () => {
    document.body.style.background = `linear-gradient(135deg, ${getRandomColor()}, ${getRandomColor()})`;
});

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}