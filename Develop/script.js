// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  //setting up variables and strings to pull from based on user input
  let lowCase = "abcdefghikjlmnopqrstuvwxyz";
  let upCase = "ABCDEFGHIKJLMNOPQRSTUVWXYZ";
  let alphLength = 26;
  let symbol = "~`!@#$%^&*()-=_+";
  let symbolLength = 16;
  let pass = "";
  let chosenString = 0;

  //getting user input for the password
  let passLength = parseInt(prompt("How many characters do you want in your password? (No less than 8, no more than 128"));

  //check password requirements
  if(passLength >= 8 && passLength <= 128) {
    let wantUpCase = confirm("Would you like upper case characters in your password?");
    let wantSymbol = confirm("Would you like symbols in your password?");
    for(let i = 0; i < passLength; i++) {
      let char = 0;

      //Password generation 
      if(wantUpCase && wantSymbol) {
        chosenString = random(3);       //Using random function to generate a chosen string type (here 0 = lowercase, 1 = uppercase and 2 = symbol)
        if(chosenString == 0) {         //As a rule of thumb, 0 will always be lowercase, 1 will always be uppercase (unless uppercase isn't wanted by user)
          char = random(alphLength);    //In the case of uppercase not being wanted by user, 1 will default to symbol but 0 remains the lowercase identifier in this algorithm.
          pass += lowCase.charAt(char);
        }else if(chosenString == 1) {  
          char = random(alphLength);
          pass += upCase.charAt(char);
        }else {
          char = random(symbolLength);
          pass += symbol.charAt(char);
        }
      }else if(wantUpCase && !wantSymbol) {
        chosenString = random(2);
        if(chosenString == 0) {
          char = random(alphLength);
          pass += lowCase.charAt(char);
        }else {
          char = random(alphLength);
          pass += upCase.charAt(char);
        }
      }else if(wantSymbol && !wantUpCase) {
        chosenString = random(2);
        if(chosenString == 0) {
          char = random(alphLength);
          pass += lowCase.charAt(char);
        }else {
          char = random(symbolLength);
          pass += symbol.charAt(char);
        }
      } else {
        char = random(alphLength);
        pass += lowCase.charAt(char);
      }
    }
  } else {
    alert("Password is less than 8 or more than 128 Characters. Please try again.")
    pass = "";
  }

  return pass;
}

//I got tired of writting Math.floor so I just made my own function for random
function random(num) {
  return Math.floor(Math.random() * num);
}