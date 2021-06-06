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
      if (rLen < 8 ) {
        window.alert("Sorry - the length must be at least 8.  \n\nPlease try again.")
      }
    }
  }
  return Math.floor(rLen);
};

var getCharTypes = function () {
  passReqs.lowerCase = window.confirm("Do you want lower case letters?");
  console.log(passReqs.lowerCase);

  passReqs.upperCase = window.confirm("Do you want UPPER case letters?");
  console.log(passReqs.upperCase);

  passReqs.num = window.confirm("Do you want numbers?");
  console.log(passReqs.num);

  passReqs.specChar = window.confirm("Do you want special characters?");
  console.log(passReqs.specChar);

};

var generatePassword= function () {
  return "yeah! - I made it into the textarea " + passReqs.len;
}

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
    console.log(passReqs.len);
    return generatePassword();
  }
}

/* END INFORMATION / VARIABLES */

/* MAIN LOGC */

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* END MAIN LOGIC */