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

// function to give real-time password feedback
function give_feedback() {
    const password_input = document.getElementById("password");
    const password = password_input.value;
    const feedback = document.getElementById("feedback");

    // create array of common/weak passwords
    const common_passwords = ["password", "password123", "12345678", "123456789", "qwerty", "qwerty1", "qwerty123", "abc123", "11111111", "123123123", "guest", "secret"];
    const password_lower = password.toLowerCase(); // turn password to lowercase

    if(password.length === 0){
        feedback.textContent = "";
        return;
    }

    // check if password contains common/weak patterns
    if (common_passwords.some(bad => password_lower.includes(bad))) {
        feedback.textContent = "Password contains COMMONLY USED password!";

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
        feedback.textContent = "Looks GOOD!";
    }
}


// function to update strength bar based on score
function update_meter(score) {
    const password_input = document.getElementById("password");
    let strength_meter = document.getElementById("strength_meter");
    let strength_text = document.getElementById("strength_text");
    let meter_box = document.getElementById("meter_container")
    let password_box = document.getElementById("password");

    // reset classes
    strength_meter.className = "";
    strength_text.className = "";
    password_box.className = "";
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
        password_box.classList.add("strong");
        meter_box.classList.add("strong");
        strength_text.textContent = "Strength: Strong"
    } else if (score === 5) {
        strength_meter.classList.add("moderate")
        strength_text.classList.add("moderate")
        password_box.classList.add("moderate");
        meter_box.classList.add("moderate");
        strength_text.textContent = "Strength: Moderate"
    } else {
        strength_meter.classList.add("weak")
        strength_text.classList.add("weak")
        password_box.classList.add("weak");
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