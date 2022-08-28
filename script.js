// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharsArr = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "/", "^", "|", "{", "}", "~"]


// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");

  var numChars = window.prompt("How many characters in the password?");
  var includeLowercase = window.confirm("Include lowercase letters? \nOK = YES \nCANCEL = NO");
  var includeUppercase = window.confirm("Include uppercase letters? \nOK = YES \nCANCEL = NO");
  var includeNumbers = window.confirm("Include numbers? \nOK = YES \nCANCEL = NO");
  var includeSpecialChars = window.confirm("Include special characters? \nOK = YES \nCANCEL = NO");
  
  var password = generatePassword(numChars, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars);

    function generatePassword(chars, lowercase, uppercase, numbers, specialChars){
      var generatedPass = "";
      var randomIndex;

      if (lowercase) {
          for (i=0; i < chars; i++) {
            randomIndex = Math.floor(Math.random() * lowercaseChars.length);
            generatedPass += lowercaseChars[randomIndex];
          }
      } else if (lowercase && uppercase){
        
      } else if (lowercase && numbers) {

      } else if (lowercase && specialChars) {

      } else if (lowercase && uppercase && numbers) {

      } else if (lowercase && uppercase && numbers && specialChars) {

      } else if (uppercase) {

      } else if (uppercase && numbers) {

      } else if (uppercase && specialChars) {

      } else if (uppercase && numbers && specialChars) {

      } else if (numbers) {

      } else if (numbers && specialChars) {

      } else if (specialChars) {

      } else { generatedPass = "Err: Please select at least one paramaeter" }
      return generatedPass
    }

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
