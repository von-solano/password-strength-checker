
function togglePassword (){
    var input = document.getElementById("passwordInput");
    // switch between types upon ticked checkbox
    if(input.type === "password"){
        input.type = "text";
    } else {
        input.type = "password";
    }
}