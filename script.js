
function togglePassword(){
    var input = document.getElementById("passwordInput");
    // switch between types upon ticked checkbox
    if(input.type === "password"){
        input.type = "text";
    } else {
        input.type = "password";
    }
}

var strengthBar = document.getElementById("strengthBar")

function checkPassword(password){
    var strength = 0;
    if(password.match(/[A-Z]+/)){
        strength++;
    }
    if(password.match(/[a-z]+/)){
        strength++;
    }
    if(password.match(/[0-9]+/)){
        strength++;
    }
    if(password.match(/[!@#$&]+/)){
        strength++;
    }
    if(password.length > 8){
        strength++;
    }

    switch(strength){
        case 0:
            strengthBar.value = 0;
            break;
        
        case 1:
            strengthBar.value = 25;
            break;
        
        case 2:
            strengthBar.value = 50;
            break;
    
        case 3:
            strengthBar.value = 75;
            break;
            
        case 4:
            strengthBar.value = 100;
            break;
    }

}