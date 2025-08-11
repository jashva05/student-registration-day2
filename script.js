document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(this);
    let userData = {};

    for (let [key, value] of formData.entries()) {
        userData[key] = value;
    }

    if (userData.mnumber.length !== 10) {
        alert("Mobile number must be exactly 10 digits.");
        return;
    }

    alert("Registration Successful!\n\n" + JSON.stringify(userData, null, 2));
    this.reset();
});