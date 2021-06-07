/* FUNCTIONS  */
var getLen = function () {
  var rLen = "";
  while (rLen > 128 || rLen < 8 || isNaN(rLen)) {
    rLen = window.prompt("Enter desired password length ( min: 8 / max: 128 )");

    if (isNaN(rLen)) {
      window.alert("Sorry - Only whole numbers are allowed.  \n\nPlease try again.")
    } else {
      if (rLen > 128) {
        window.alert("Sorry - the length cannot exceed 128.  \n\nPlease try again.")
      }
      if (rLen < 8) {
        window.alert("Sorry - the length must be at least 8.  \n\nPlease try again.")
      }
    }
  }
  return Math.floor(rLen);
};

var getCharTypes = function () {
  passReqs.lowerCase = window.confirm("Do you want lower case letters in your password?");
  passReqs.upperCase = window.confirm("Do you want UPPER case letters in your password?");
  passReqs.num = window.confirm("Do you want numbers in your password?");
  passReqs.specChar = window.confirm("Do you want special characters in your password?");
};

var generatePassword = function () {

  var selPassCharSet = " ";
  var retPassword = "\"";

  if (passReqs.lowerCase) {
    selPassCharSet = selPassCharSet + "abcdefghijklmnopqrstuvwxyz";
  }
  if (passReqs.upperCase) {
    selPassCharSet = selPassCharSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (passReqs.num) {
    selPassCharSet = selPassCharSet + "0123456789";
  }

  if (passReqs.specChar) {
    selPassCharSet = selPassCharSet + ' !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  }
  
  for (var iSelPassLen = 0; iSelPassLen < passReqs.len; iSelPassLen++) {
    // randomly select character from selPassCharSet
    retPassword = selPassCharSet[randomNumber(0, selPassCharSet.length)] + retPassword;
  }
  // return "yeah! - I made it into the textarea " + passReqs.len;
  return "\"" + retPassword;
};
// generate random number for use in selPassCharSet (selected password character set)
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
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
    passReqs.len = getLen();
    passGetTypes = getCharTypes();
    return generatePassword();
  }
};

/* END INFORMATION / VARIABLES */

/* MAIN LOGC */

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

/* END MAIN LOGIC */