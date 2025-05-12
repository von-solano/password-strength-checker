// global variables to important DOM elements
const password_input = document.getElementById("password"); // password input
const strength_meter = document.getElementById("strength_meter"); // strength meter
const strength_text = document.getElementById("strength_text"); // text describing password strength
const meter_box = document.getElementById("meter_container"); // box surrounding strength meter
const toggle_button = document.getElementById("visibility_button"); // get button element 
const feedback = document.getElementById("feedback"); // text giving real-time password feedback

// REGEX patterns
const lowercase = /[a-z]/;
const uppercase = /[A-Z]/;
const numbers = /[0-9]/;
const special_chars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

// array of common passwords
const common_passwords = ["password", "password123", "12345678", "123456789", "qwerty", "qwerty1", "qwerty123", "abc123", "11111111", "123123123", "guest", "secret"];


// function to toggle password visibility onclick()
function toggle_visibility() {
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
    let score = 0; // score variable
    const password = password_input.value; // values inside the password
    const password_lower = password.toLowerCase(); // turn password to lowercase

    // check if password contains common/weak patterns
    if (common_passwords.some(bad => password_lower.includes(bad))) {
        return 0; // password is common, return lowest score
    }

    // test password length
    if (password.length >= 12) {
        score += 2; // +2 points for password length
    } else if (password.length >= 8) {
        score++; // +1 point for 8 characters
    } else {
        return 0; // password is too short, return lowest score
    }

    // test password inputs: checks character variety
    if (uppercase.test(password)) score++;
    if (lowercase.test(password)) score++;
    if (numbers.test(password)) score++;
    if (special_chars.test(password)) score++;

    return score;
}

// function to give real-time password feedback
function give_feedback() {
    const password = password_input.value; // values inside the password
    const password_lower = password.toLowerCase(); // turn password to lowercase

    // if nothing in password return no feedback
    if (password.length === 0) {
        feedback.textContent = "";
        return;
    }

    // check if password contains common/weak patterns
    if (common_passwords.some(bad => password_lower.includes(bad))) {
        feedback.textContent = "Password contains a COMMONLY USED password!";

        // test password length and character variety
    } else if (password.length < 12) {
        feedback.textContent = "Increase the NUMBER of CHARACTERS!";
    } else if (!uppercase.test(password)) {
        feedback.textContent = "Include an UPPERCASE letter!";
    } else if (!lowercase.test(password)) {
        feedback.textContent = "Include a LOWERCASE letter!";
    } else if (!numbers.test(password)) {
        feedback.textContent = "Include some NUMBERS!";
    } else if (!special_chars.test(password)) {
        feedback.textContent = "Include a SPECIAL character!";
    } else if (password.length > 0) {
        feedback.textContent = "Amazing!";
    }
}

// function to update strength bar based on score
function update_meter(score) {
    // reset classes
    strength_meter.className = "";
    strength_text.className = "";
    password_input.className = "";
    meter_box.className = "";

    // if no password input
    if (password_input.value.length === 0) {
        strength_meter.classList.add("empty");
        strength_text.textContent = "";
        return;
    }

    // update bar based on score
    if (score >= 6) {
        strength_meter.classList.add("strong")
        strength_text.classList.add("strong")
        password_input.classList.add("strong");
        meter_box.classList.add("strong");
        strength_text.textContent = "Strength: Strong"
    } else if (score === 5) {
        strength_meter.classList.add("moderate")
        strength_text.classList.add("moderate")
        password_input.classList.add("moderate");
        meter_box.classList.add("moderate");
        strength_text.textContent = "Strength: Moderate"
    } else {
        strength_meter.classList.add("weak")
        strength_text.classList.add("weak")
        password_input.classList.add("weak");
        meter_box.classList.add("weak");
        strength_text.textContent = "Strength: Weak"

    }
}

// function to evaluate password
function evaluate_password() {
    let score = score_password();
    update_meter(score);
    give_feedback();
}