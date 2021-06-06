/* FUNCTIONS  */

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = passReqs.passResult();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/* END FUNCTIONS */

/* INFORMATION / VARIABLES */
var passReqs = {
    lowerCase : false,
    upperCase : false,
    num : false,
    specChar : false,
    passResult : function () {
    return "yeah! - I made it into the textarea"
  }
}

/* INFORMATION / VARIABLES */

/* MAIN LOGC */

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

