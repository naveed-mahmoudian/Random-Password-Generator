// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

allChars = {
  lowercaseChars: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercaseChars: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbersArr: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharsArr: ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "/", "^", "|", "{", "}", "~"]
}

// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");
  var numChars;

  // Check user input to verify they entered a number between 8 ans 128
  checkUserInput();
  function checkUserInput() {
  numChars = (window.prompt("How many characters in the password?"));

    if (numChars < 8) {
      window.alert("Password must be at least 8 characters");
      numChars = null;
      checkUserInput();
    } else if (numChars > 128) {
      window.alert("Password must be less than 128 characters");
      numChars = null;
      checkUserInput();
    } else if (parseInt(numChars.value)) {
      window.alert("Password length must be an integer");
      numChars = null;
      checkUserInput();
    }
    return numChars;
  }

    var includeLowercase = window.confirm("Include lowercase letters? \nOK = YES \nCANCEL = NO");
    var includeUppercase = window.confirm("Include uppercase letters? \nOK = YES \nCANCEL = NO");
    var includeNumbers = window.confirm("Include numbers? \nOK = YES \nCANCEL = NO");
    var includeSpecialChars = window.confirm("Include special characters? \nOK = YES \nCANCEL = NO");

    var password = generatePassword(numChars, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars);

    // Generates a password based on the confirmations the user provided above
    function generatePassword(chars, lowercase, uppercase, numbers, specialChars){
      var generatedPass = "";

      // Logic to check what password parameters the user selected and randomly generates a passowrd with said parameters
      if (lowercase && !uppercase && !numbers && !specialChars) {
          for (i=0; i < chars; i++) {
            var randomIndexLC = Math.floor(Math.random() * allChars.lowercaseChars.length);
            generatedPass += allChars.lowercaseChars[randomIndexLC];
          }
      } else if (lowercase && uppercase && !numbers && !specialChars){
          for (i=0; i < chars; i++) {
            var randomIndexLC = Math.floor(Math.random() * allChars.lowercaseChars.length);
            var randomIndexUC = Math.floor(Math.random() * allChars.uppercaseChars.length);

            var randomArr = [allChars.lowercaseChars[randomIndexLC], allChars.uppercaseChars[randomIndexUC]];
            var randomIndex = Math.floor(Math.random() * randomArr.length);
            
            generatedPass += randomArr[randomIndex];
          }
      } else if (lowercase && numbers && !uppercase && !specialChars) {
            for (i=0; i < chars; i++) {
            var randomIndexLC = Math.floor(Math.random() * allChars.lowercaseChars.length);
            var randomIndexN = Math.floor(Math.random() * allChars.numbersArr.length);

            var randomArr = [allChars.lowercaseChars[randomIndexLC], allChars.numbersArr[randomIndexN]];
            var randomIndex = Math.floor(Math.random() * randomArr.length);

            generatedPass += randomArr[randomIndex];
          }
      } else if (lowercase && specialChars && !uppercase && !numbers) {
        for (i=0; i < chars; i++) {
          var randomIndexLC = Math.floor(Math.random() * allChars.lowercaseChars.length);
          var randomIndexSC = Math.floor(Math.random() * allChars.specialCharsArr.length);

          var randomArr = [allChars.lowercaseChars[randomIndexLC], allChars.specialCharsArr[randomIndexSC]];
          var randomIndex = Math.floor(Math.random() * randomArr.length);
          
          generatedPass += randomArr[randomIndex];
        }
      } else if (lowercase && uppercase && numbers && !specialChars) {
        for (i=0; i < chars; i++) {
          var randomIndexLC = Math.floor(Math.random() * allChars.lowercaseChars.length);
          var randomIndexUC = Math.floor(Math.random() * allChars.uppercaseChars.length);
          var randomIndexN = Math.floor(Math.random() * allChars.numbersArr.length);

          var randomArr = [allChars.lowercaseChars[randomIndexLC], allChars.uppercaseChars[randomIndexUC], allChars.numbersArr[randomIndexN]];
          var randomIndex = Math.floor(Math.random() * randomArr.length);
            
          generatedPass += randomArr[randomIndex];
        }
      } else if (lowercase && uppercase && specialChars && !numbers) {
        for (i=0; i < chars; i++) {
          var randomIndexLC = Math.floor(Math.random() * allChars.lowercaseChars.length);
          var randomIndexUC = Math.floor(Math.random() * allChars.uppercaseChars.length);
          var randomIndexSC = Math.floor(Math.random() * allChars.specialCharsArr.length);

          var randomArr = [allChars.lowercaseChars[randomIndexLC], allChars.uppercaseChars[randomIndexUC], allChars.specialCharsArr[randomIndexSC]];
          var randomIndex = Math.floor(Math.random() * randomArr.length);
            
          generatedPass += randomArr[randomIndex];
        }
      } else if (lowercase && numbers && specialChars && !uppercase) {
        for (i=0; i < chars; i++) {
          var randomIndexLC = Math.floor(Math.random() * allChars.lowercaseChars.length);
          var randomIndexN = Math.floor(Math.random() * allChars.numbersArr.length);
          var randomIndexSC = Math.floor(Math.random() * allChars.specialCharsArr.length);

          var randomArr = [allChars.lowercaseChars[randomIndexLC], allChars.numbersArr[randomIndexN], allChars.specialCharsArr[randomIndexSC]];
          var randomIndex = Math.floor(Math.random() * randomArr.length);

          generatedPass += randomArr[randomIndex];
        }
      } else if (lowercase && uppercase && numbers && specialChars) {
        for (i=0; i < chars; i++) {
          var randomIndexLC = Math.floor(Math.random() * allChars.lowercaseChars.length);
          var randomIndexUC = Math.floor(Math.random() * allChars.uppercaseChars.length);
          var randomIndexN = Math.floor(Math.random() * allChars.numbersArr.length);
          var randomIndexSC = Math.floor(Math.random() * allChars.specialCharsArr.length);

          var randomArr = [allChars.lowercaseChars[randomIndexLC], allChars.uppercaseChars[randomIndexUC], allChars.numbersArr[randomIndexN], allChars.specialCharsArr[randomIndexSC]];
          var randomIndex = Math.floor(Math.random() * randomArr.length);
            
          generatedPass += randomArr[randomIndex];
        }
      } else if (uppercase && !lowercase && !numbers && !specialChars) {
        for (i=0; i < chars; i++) {
          var randomIndexUC = Math.floor(Math.random() * allChars.uppercaseChars.length);
          generatedPass += allChars.uppercaseChars[randomIndexUC];
        }
      } else if (uppercase && numbers && !lowercase && !specialChars) {
        for (i=0; i < chars; i++) {
          var randomIndexUC = Math.floor(Math.random() * allChars.uppercaseChars.length);
          var randomIndexN = Math.floor(Math.random() * allChars.numbersArr.length);

          var randomArr = [allChars.uppercaseChars[randomIndexUC], allChars.numbersArr[randomIndexN]];
          var randomIndex = Math.floor(Math.random() * randomArr.length);
          
          generatedPass += randomArr[randomIndex];
        }
      } else if (uppercase && specialChars && !lowercase && !numbers) {
        for (i=0; i < chars; i++) {
          var randomIndexUC = Math.floor(Math.random() * allChars.uppercaseChars.length);
          var randomIndexSC = Math.floor(Math.random() * allChars.specialCharsArr.length);

          var randomArr = [allChars.uppercaseChars[randomIndexUC], allChars.specialCharsArr[randomIndexSC]];
          var randomIndex = Math.floor(Math.random() * randomArr.length);
          
          generatedPass += randomArr[randomIndex];
        }
      } else if (uppercase && numbers && specialChars && !lowercase) {
        for (i=0; i < chars; i++) {
          var randomIndexUC = Math.floor(Math.random() * allChars.uppercaseChars.length);
          var randomIndexN = Math.floor(Math.random() * allChars.numbersArr.length);
          var randomIndexSC = Math.floor(Math.random() * allChars.specialCharsArr.length);

          var randomArr = [allChars.uppercaseChars[randomIndexUC], allChars.numbersArr[randomIndexN], allChars.specialCharsArr[randomIndexSC]];
          var randomIndex = Math.floor(Math.random() * randomArr.length);
          
          generatedPass += randomArr[randomIndex];
        }
      } else if (numbers && !lowercase && !uppercase && !specialChars) {
        for (i=0; i < chars; i++) {
          var randomIndexN = Math.floor(Math.random() * allChars.numbersArr.length);
          generatedPass += allChars.numbersArr[randomIndexN];
        }
      } else if (numbers && specialChars && !lowercase && !uppercase) {
        for (i=0; i < chars; i++) {
          var randomIndexN = Math.floor(Math.random() * allChars.numbersArr.length);
          var randomIndexSC = Math.floor(Math.random() * allChars.specialCharsArr.length);

          var randomArr = [allChars.numbersArr[randomIndexN], allChars.specialCharsArr[randomIndexSC]];
          var randomIndex = Math.floor(Math.random() * randomArr.length);
          
          generatedPass += randomArr[randomIndex];
        }
      } else if (specialChars && !lowercase && !uppercase && !numbers) {
        for (i=0; i < chars; i++) {
          var randomIndexSC = Math.floor(Math.random() * allChars.specialCharsArr.length);
          generatedPass += allChars.specialCharsArr[randomIndexSC];
        }
      } else { generatedPass = "Err: Please select at least one password parameter" } // Returns an error if user declines all password parameters
      return generatedPass
    }

    passwordText.value = password;
    return password
}
var passwordToCopy = password;

// Copy password to clipboard
function copyToClipboard() {
  if (passwordToCopy.value && passwordToCopy.value != "Err: Please select at least one password parameter") {
    navigator.clipboard.writeText(passwordToCopy.value).then(() => {
      // clipboard successful
      window.alert("Password copied to clipboard!");
    }, () => {
      // clipboard unsucessful
      console.log("password could not be copied")
    });
  } else { console.log("no password to copy"); }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Add event listener to copy to clipboard button
copyBtn.addEventListener("click", copyToClipboard);
