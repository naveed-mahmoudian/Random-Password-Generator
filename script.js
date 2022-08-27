// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "/", "^", "|", "{", "}", "~"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var numChars = window.prompt("How many characters in the password?");
  var includeLowercase = window.confirm("Include lowercase letters? \nOK = YES \nCANCEL = NO");
  var includeUppercase = window.confirm("Include uppercase letters? \nOK = YES \nCANCEL = NO");
  var includeNumbers = window.confirm("Include numbers? \nOK = YES \nCANCEL = NO");
  var includeSpecialChars = window.confirm("Include special characters? \nOK = YES \nCANCEL = NO");
 
  function generatePassword(){
    
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
