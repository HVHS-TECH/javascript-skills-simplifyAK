/****************************
This is a block comment.
Data types
****************************/ 
console.log("Running t11_data_types.js")
console.log("Hi uh idk what im doing lol")
console.log("if you read this ur cool trust")


// Variables


let pocketMoney = 67;
let name = "Adam"
let age = 15;
let year = 2026;
let num1 = 10;
let num2 = 57;
let half = 2;
let extradollars = 3;
var answer;
const OUTPUT = document.getElementById("JavaScriptOutput");
const AGE_FIELD = document.getElementById("ageField")
const MONEY_FIELD = document.getElementById("moneyField")


function getMoneyInput(){
    let userMoney = Number(MONEY_FIELD.value);
    OUTPUT.innerHTML+="<p>You have "+userMoney+" dollars";
}

function getAgeInput(){
    let userAge = Number(AGE_FIELD.value);
    OUTPUT.innerHTML+="<p>You are "+userAge+" years old";
}
function start() {
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";



OUTPUT.innerHTML += " 67 times";

OUTPUT.innerHTML += " <br> You Have "+pocketMoney +" dollars"

OUTPUT.innerHTML += " <br> Hi "+ name
OUTPUT.innerHTML += "  <br> As of "+ year +" I am "+ age
bornyear = year - age;
OUTPUT.innerHTML += "  <br> You were born in "+ bornyear
futureage = age + num1;
OUTPUT.innerHTML += "  <br> In 10 years you will be "+ futureage +" years old"
halfmoney = pocketMoney / half;
OUTPUT.innerHTML += "  <br> You spend half your money, now you have "+ halfmoney +"$"
extramoney = halfmoney + extradollars;
OUTPUT.innerHTML += "  <br> Then you get 3$, now you have "+ extramoney +"$"
answer = num1 + num2;
OUTPUT.innerHTML += "<br>add = "+       answer
answer = num1 - num2;
OUTPUT.innerHTML += "<br>subtract   = "+             answer
answer = num1 * num2;
OUTPUT.innerHTML += "<br>multiply  = "+               answer
answer = num1 / num2;
OUTPUT.innerHTML += "<br>divide = "+                 answer


 
function welcome(){
OUTPUT.innerHTML += "<br><br>Welcome to the shop";
}

function displayProduct(_name, _price){
OUTPUT.innerHTML += "<p> The "+ _name+" are..."+_price+"";
}



welcome()
displayProduct("Chocolate Bar", "$4")
displayProduct("Chips", "$3")
displayProduct("Drink", "$2.5")

}

start();
/**************************************
  Main Code
**************************************/


 /*****************************************
  Functions
 *****************************************/

  