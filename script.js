// regular expressions for password char types
let lowercase = /[a-z]/;
let uppercase = /[A-Z]/;
let numbers = /[0-9]/;
let special_chars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;


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

// function to score password strength
function score_password() {
    const password_input = document.getElementById("password"); // get password element
    const password = password_input.value; // value of password
    let score = 0; // score variable

    // create array of common/weak passwords
    const common_passwords = ["password", "password123", "12345678", "123456789", "qwerty", "qwerty1", "qwerty123", "abc123", "11111111", "123123123", "guest", "secret"];
    const password_lower = password.toLowerCase(); // turn password to lowercase

    // check if password contains common/weak patterns
    if (common_passwords.some(bad => password_lower.includes(bad))) {
        return score = 0; // password is common, return lowest score
    }

    // test password length
    if (password.length >= 12) {
        score += 2; // +2 points for password length
    } else if (password.length >= 8) {
        score++; // +1 point for 8 characters
    } else {
        return score = 0; // password is too short, return lowest score
    }

    // test password inputs: 
    // checks character variety
    if (uppercase.test(password)) score++;
    if (lowercase.test(password)) score++;
    if (numbers.test(password)) score++;
    if (special_chars.test(password)) score++;

    return score;
}

// function to update strength bar based on score
function update_meter(score) {
    let strength_meter = document.getElementById("strength_meter");

    // update bar based on score
    if (score >= 6) {
        strength_meter.className = ""; // reset class 
        strength_meter.classList.add("strong")
    } else if (score == 5) {
        strength_meter.className = ""; // reset class 
        strength_meter.classList.add("moderate")
    } else {
        strength_meter.className = ""; // reset class 
        strength_meter.classList.add("weak")
    }
}