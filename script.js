// Assignment Code
var generateBtn = document.querySelector("#generate");

allChars = {
  lowercaseChars: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercaseChars: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbersArr: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharsArr: ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "/", "^", "|", "{", "}", "~"]
}

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
      var randomIndexLC;
      var randomIndexUC;
      var randomIndexN;
      var randomIndexSC;

      if (lowercase && !uppercase && !numbers && !specialChars) {
          for (i=0; i < chars; i++) {
            randomIndexLC = Math.floor(Math.random() * allChars.lowercaseChars.length);
            generatedPass += allChars.lowercaseChars[randomIndexLC];
          }
      } else if (lowercase && uppercase){
          for (i=0; i < chars; i++) {
            randomIndexLC = Math.floor(Math.random() * allChars.lowercaseChars.length);
            randomIndexUC = Math.floor(Math.random() * allChars.uppercaseChars.length);

            var randomArr = [allChars.lowercaseChars[randomIndexLC], allChars.uppercaseChars[randomIndexUC]];
            var randomIndex = Math.floor(Math.random() * randomArr.length);
            
            generatedPass += randomArr[randomIndex];
          }
      } else if (lowercase && numbers) {
            for (i=0; i < chars; i++) {
            randomIndexLC = Math.floor(Math.random() * allChars.lowercaseChars.length);
            randomIndexN = Math.floor(Math.random() * allChars.numbersArr.length);

            var randomArr = [allChars.lowercaseChars[randomIndexLC], allChars.numbersArr[randomIndexN]];
            var randomIndex = Math.floor(Math.random() * randomArr.length);

            generatedPass += randomArr[randomIndex];
          }
      } else if (lowercase && specialChars) {
        for (i=0; i < chars; i++) {
          randomIndexLC = Math.floor(Math.random() * allChars.lowercaseChars.length);
          randomIndexSC = Math.floor(Math.random() * allChars.specialCharsArr.length);

          var randomArr = [allChars.lowercaseChars[randomIndexLC], allChars.specialCharsArr[randomIndexSC]];
          var randomIndex = Math.floor(Math.random() * randomArr.length);
          
          generatedPass += randomArr[randomIndex];
        }
      } else if (lowercase && uppercase && numbers) {

      } else if (lowercase && uppercase && specialChars) {

      } else if (lowercase && uppercase && numbers && specialChars) {

      } else if (uppercase && !lowercase && !numbers && !specialChars) {
        for (i=0; i < chars; i++) {
          randomIndexUC = Math.floor(Math.random() * allChars.uppercaseChars.length);
          generatedPass += allChars.uppercaseChars[randomIndexUC];
        }
      } else if (uppercase && numbers) {
        for (i=0; i < chars; i++) {
          randomIndexUC = Math.floor(Math.random() * allChars.uppercaseChars.length);
          randomIndexN = Math.floor(Math.random() * allChars.numbersArr.length);

          var randomArr = [allChars.uppercaseChars[randomIndexUC], allChars.numbersArr[randomIndexN]];
          var randomIndex = Math.floor(Math.random() * randomArr.length);
          
          generatedPass += randomArr[randomIndex];
        }
      } else if (uppercase && specialChars) {
        for (i=0; i < chars; i++) {
          randomIndexUC = Math.floor(Math.random() * allChars.uppercaseChars.length);
          randomIndexSC = Math.floor(Math.random() * allChars.specialCharsArr.length);

          var randomArr = [allChars.uppercaseChars[randomIndexUC], allChars.specialCharsArr[randomIndexSC]];
          var randomIndex = Math.floor(Math.random() * randomArr.length);
          
          generatedPass += randomArr[randomIndex];
        }
      } else if (uppercase && numbers && specialChars) {

      } else if (numbers && !lowercase && !uppercase && !specialChars) {
        for (i=0; i < chars; i++) {
          randomIndexN = Math.floor(Math.random() * allChars.numbersArr.length);
          generatedPass += allChars.numbersArr[randomIndexN];
        }
      } else if (numbers && specialChars) {
        for (i=0; i < chars; i++) {
          randomIndexN = Math.floor(Math.random() * allChars.numbersArr.length);
          randomIndexSC = Math.floor(Math.random() * allChars.specialCharsArr.length);

          var randomArr = [allChars.numbersArr[randomIndexN], allChars.specialCharsArr[randomIndexSC]];
          var randomIndex = Math.floor(Math.random() * randomArr.length);
          
          generatedPass += randomArr[randomIndex];
        }
      } else if (specialChars && !lowercase && !uppercase && !numbers) {
        for (i=0; i < chars; i++) {
          randomIndexSC = Math.floor(Math.random() * allChars.specialCharsArr.length);
          generatedPass += allChars.specialCharsArr[randomIndexSC];
        }
      } else { generatedPass = "Err: Please select at least one paramaeter" }
      return generatedPass
    }

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
