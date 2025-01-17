// Hardcoded username and password
const hardcodedUsername = "admin"; // Hardcoded username has been set as admin
const hardcodedPassword = "12345"; // Hardcoded passworrd has been set as 12345

function validateLogin() {
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Clear previous messages
    message.textContent = "";

    if (!username && !password) {
        message.textContent = "Please enter your username and password to login.";
        message.style.color = "red";
        return;
    }

    if (!username || !password) {
        message.textContent = "You forgot one of the required fields, Please try again.";
        message.style.color = "red";
        return;
    }

    if (username === hardcodedUsername && password === hardcodedPassword) {
        message.textContent = `Welcome ${username}! You have successfully logged in.`;
        message.style.color = "white";
    }
    else {
        message.textContent = "Please enter a valid username and password";
        message.style.color = "red";
    }
}