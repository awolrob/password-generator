/* FUNCTIONS  */

var getLen = function () {
  var rLen = "";
  debugger;
  while (rLen > 128 || rLen < 8 || isNaN(rLen)) {
    rLen = window.prompt("Enter desired password length ( min: 8 / max: 128 )");

    if (isNaN(rLen)) {
      window.alert("Sorry - Only whole numbers are allowed.  \n\nPlease try again.")
    } else {
      if (rLen > 128) {
        window.alert("Sorry - the length cannot exceed 128.  \n\nPlease try again.")
      }
      if (rLen < 8 || rLen === "") {
        window.alert("Sorry - the length must be at least 8.  \n\nPlease try again.")
      }
    }
    console.log(Math.floor(rLen));
  }
  return Math.floor(rLen.num);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passReqs.len = getLen();
  var password = passReqs.passResult();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/* END FUNCTIONS */

/* INFORMATION / VARIABLES */
var passReqs = {
  len: 0,
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

