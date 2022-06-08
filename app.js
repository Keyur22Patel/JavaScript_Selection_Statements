console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");
let answer = window.prompt("What is your name?");

alert("Hello, " + answer); 
 
// Exercise 1
const num = 29;

let favorite = window.prompt("Guess a number between 1 and 100:");

if (favorite < num) {
  alert("Too low");
} else if (favorite > num) {
  alert("Too high");
} else {
  alert("Congratulations. You guessed correctly!");
}

// Exercise 2
let birthMonth = window
  .prompt('Enter your birth month :')
  //.toLowerCase();

switch (birthMonth) {
  case "december":
  case "january":
  case "february":
  case "march":
    alert("You were born in Winter.");
    break;
  case "april":
  case "may":
    alert("You were born in Spring.");
    break;
  case "june":
  case "july":
  case "august":
  case "september":
    alert("You were born in Summer.");
    break;
  case "october":
  case "november":
    alert("You were born in Fall.");
    break;
  default:
    alert("You entered a invalid month."); 
}
// Exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";
//let Product = window.prompt('Name of Product')
switch (typeId) 
{
  case "01":
  type = "Tank top";
  break;
  case "02":
  type = "T-Shirt";
  break;
  case "03": 
  type = "Long Sleeve";
  break;
  case "04":
  type ="Sweat Shirt";
  break;
  default:
  type = "Other";
}

switch (colorId) 
{
   case "BL":
   color = "Black";
   break;
   case "BU": 
   color = "Blue";
   break;
   case "RD": 
   color = "Red";
   break;
   case "PU": 
   color = "Purple";
   break;
   default:
   color = "White";
}

switch (sizeId) 
{
  case "S":
  size = "Small";
  break;
  case "M":
  size = "Medium";
  break;
  case "L":
  size = "Large";
  break;
  case "XL":
  size = "Extra Large";
  break;
  default:
  size = "One Size Fits All";
}

alert(`Product: ${size} ${color} ${type}`);