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
const COKE_FIELD = document.getElementById("cokeField")
const AGE_FIELD = document.getElementById("ageField")
const MONEY_FIELD = document.getElementById("moneyField")
const CHOICE_FIELD = document.getElementById("choiceField")


function calculateChange (_money, _price) {
 var change = _money - _price
 return change;
}

function getMoneyInput(){
    let userMoney = Number(MONEY_FIELD.value);
    OUTPUT.innerHTML+="<p>You have "+userMoney+" dollars";
    if(userMoney >= 4){
    OUTPUT.innerHTML +="<br>You have enough money<br>"
    let change = calculateChange(userMoney, 4)
    OUTPUT.innerHTML += "<br>You will get $"+ change +" of change"
    } else {
     OUTPUT.innerHTML += "<p>You litreally can't even afford a chocolate bar</p>"
    }
}

function getAgeInput(){
    let userAge = Number(AGE_FIELD.value);
    OUTPUT.innerHTML+="<p>You are "+userAge+" years old";

 if(userAge <= 12){
    OUTPUT.innerHTML +="<br>eat as much as u want u have a lifetime to enjoy<br>"
} else if (userAge <= 18){
    OUTPUT.innerHTML +="<br> Still big back<br>"
} else {
   OUTPUT.innerHTML += "<p>You litreally gonna get fat if u eat at this age</p>"
}
}

let classArray = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];
function getChoiceInput() {
let choice = Number(CHOICE_FIELD.value);
OUTPUT.innerHTML += "<br><br>You think: "+classArray[choice]+"";
if(choice > 3){
OUTPUT.innerHTML += "<br><br>Please pick a value from 0 - 3"
}
}

function start() {


OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";

OUTPUT.innerHTML += " 67 times";

OUTPUT.innerHTML += " <br> You Have "+pocketMoney +" dollars"

OUTPUT.innerHTML += " <br> Hi "+ name
OUTPUT.innerHTML += "  <br> As of "+ year +" I am "+ age
let bornyear = year - age;
OUTPUT.innerHTML += "  <br> You were born in "+ bornyear
let futureage = age + num1;
OUTPUT.innerHTML += "  <br> In 10 years you will be "+ futureage +" years old"
let halfmoney = pocketMoney / half;
OUTPUT.innerHTML += "  <br> You spend half your money, now you have "+ halfmoney +"$"
let extramoney = halfmoney + extradollars;
OUTPUT.innerHTML += "  <br> Then you get 3$, now you have "+ extramoney +"$"
answer = num1 + num2;
OUTPUT.innerHTML += "<br>add = "+       answer
answer = num1 - num2;
OUTPUT.innerHTML += "<br>subtract   = "+             answer
answer = num1 * num2;
OUTPUT.innerHTML += "<br>multiply  = "+               answer
answer = num1 / num2;
OUTPUT.innerHTML += "<br>divide = "+                 answer

welcome();
 displayProduct("Chocolate Bar", "$4")
 displayProduct("Chips", "$3")
 displayProduct("Drink", "$2.5")
 
function welcome(){
OUTPUT.innerHTML += "<br><br>Welcome to the shop";
}

function displayProduct(_name, _price){
OUTPUT.innerHTML += "<p> The "+ _name+" are..."+_price+"";
}


}

function getDrinkInput() {
let userCoke = Number(COKE_FIELD.value);
OUTPUT.innerHTML += "<br><br>"+ userCoke+" Bottles of Coke on the wall";

for(let count = userCoke; count >= 2; count-- ) {
 OUTPUT.innerHTML += "<br><br>"+count+ " bottles of Coke"+"<br>If one of those bottles should happen to fall<br>"+(count - 1)+" Bottles of Coke on the wall!!!";
}

OUTPUT.innerHTML += "<br><br> 1 bottle of coke on the wall!"

}

/**************************************
  Main Code
**************************************/


 /*****************************************
  Functions
 *****************************************/

  