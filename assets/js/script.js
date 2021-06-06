/* FUNCTIONS  */

var getLen = function () {
  var rLen = 0;

  while (rLen > 128 || rLen < 8) {
    rLen = window.prompt("Enter desired password length ( min: 8 / max: 128 )");
    if (rLen > 128) {
      window.alert("Sorry - the length cannot exceed 128.  \n\nPlease try again.")
    }
    if (rLen < 8) {
      window.alert("Sorry - the length must be at least 8.  \n\nPlease try again.")
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var len = getLen();
  var password = passReqs.passResult();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/* END FUNCTIONS */

/* INFORMATION / VARIABLES */
var passReqs = {
  lowerCase: false,
  upperCase: false,
  num: false,
  specChar: false,
  passResult: function () {
    return "yeah! - I made it into the textarea"
  }
}

/* INFORMATION / VARIABLES */

/* MAIN LOGC */

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

