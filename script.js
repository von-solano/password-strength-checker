// regular expressions for password char types
var lowercase = /[a-z]/;
var uppercase = /[A-Z]/;
var numbers = /[0-9]/;
var special_chars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;


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
function score_password(){
    const password_input = document.getElementById("password"); // get password element
    const password = password_input.value; // value of password
    let score = 0; // score variable

    // test password length
    if(password.length >= 12){
        score +=2; // +2 points for password length
    } else if (password.length >= 8){
        score++; // +1 point for 8 characters
    } else {
        return score = 0; // password is too short, return lowest score
    }

    // test password inputs: 
    // checks character variety
    if(uppercase.test(password)) score++;
    if(lowercase.test(password)) score++;
    if(numbers.test(password)) score++;
    if(special_chars.test(password)) score++;

    // TEST: see score output * temporary *
    const text = document.getElementById("disclaimer");
    text.textContent = `Strength Score: ${score}`;
}