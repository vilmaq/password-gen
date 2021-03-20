// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
const lowerCaseArray = ["a", "b", "c", "d", "e", "z"];
const upperCaseArray = ["A", "B", "C", "Z"];
const numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialCharArray = ["!", "@", "$", "%", "-"];

var combinedArray = [];
var passwordArray = [];

let isLowerCase;
let isUpperCase;
let isNumeric;
let isSpecialChar;

//Declare the function that will generate the password
function generatePassword() {
  const passwordLength = prompt(
    "Please enter the desired length for your password!"
  );
  console.log(passwordLength);

  // Check if the object entered is a number
  if (Number.isInteger(parseInt(passwordLength, 10))) {
    // If PasswordLength is a number continue with the next questions
    if (passwordLength >= 8 && passwordLength <= 128) {
      isLowerCase = confirm("Do you want your password to include lower case?");
      console.log(isLowerCase);

      isUpperCase = confirm("Do you want your password to include upper case?");
      console.log(isUpperCase);

      isNumeric = confirm("Do you want your password to include a number?");
      console.log(isNumeric);

      isSpecialChar = confirm(
        "Do you want your password to include a special character?"
      );
      console.log(isSpecialChar);

      //ensure the user is choosing at least one from the above options
      if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecialChar) {
        alert("Please choose as least two criteria for your password");
      }
    }
    //alert if the entered length is less than 8
    if (passwordLength < 8) {
      alert(
        "Please enter a number greater than 8! Click 'Generate Password' and try again!"
      );
    }
    //alert if the entered length is more than 128
    if (passwordLength > 128) {
      alert(
        "The length of your password must be less than 128! Click 'Generate Password' and try again!"
      );
    }
    // the if statements that will append an array to the existing array based on the option chosen from the user in the confirm pop-ups
    if (isLowerCase) {
      combinedArray.push(...lowerCaseArray);
      console.log(...combinedArray);
    }
    if (isUpperCase) {
      combinedArray.push(...upperCaseArray);
      console.log(combinedArray);
    }
    if (isNumeric) {
      combinedArray.push(...numericArray);
      console.log(combinedArray);
    }
    if (isSpecialChar) {
      combinedArray.push(...specialCharArray);
      console.log(combinedArray);
    }

    // verify what the is final combined Array
    console.log(combinedArray);

    for (i = 0; i <= parseInt(passwordLength, 10); i++) {
      let randomArray =
        combinedArray[Math.floor(Math.random() * combinedArray.length)];
      // console.log(randomArray);

      passwordArray.push(randomArray);
    }

    //convert the passwordArray to string
    const password = passwordArray.join("");

    console.log(password);

    //return the generated password so to be used outside the local scope.
    return password;
  }
  //alert the user if the entered input is not a number
  else {
    alert("The length of your password must be a number between 8 and 128!");
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
