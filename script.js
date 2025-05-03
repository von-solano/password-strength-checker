
// function to toggle password visibility onclick()
function toggle_visibility() {
    const password_input = document.getElementById("password"); // get password element
    const toggle_button = document.getElementById("visibility_button"); // get button element 

    if (password_input.type === "password") {
        password_input.type = "text";       // swap input type to text (shows password)
        toggle_button.textContent = "Hide"; // swap text on button to "Hide"
    } else {
        password_input.type = "password";  // swap input type to password (hides password)
        toggle_button.textContent = "Show" // swap text on button to "Show"
    }
}