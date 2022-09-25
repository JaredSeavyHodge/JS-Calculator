function setAction(a) {
    action = a;
    let symbol = action == "add" ? "+" : 
        action == "subtract" ? "-" :
            action == "multiply" ? "x" :
                action == "remainder" ? "%" :
                    action == "divide" ? "/" : "";

    document.getElementById("action").innerHTML = symbol;
    firstValue = document.getElementById("output").innerHTML;
    ignoreNextInput = true;
}

function equals() {
    secondValue = document.getElementById("output").innerHTML;
    document.getElementById("action").innerHTML = "";
    switch (action) {
        case "add":
            display(parseFloat(firstValue) + parseFloat(secondValue))
            break;
        case "subtract":
            display(parseFloat(firstValue) - parseFloat(secondValue));
            break;
        case "multiply":
            display(parseFloat(firstValue) * parseFloat(secondValue));
            break;
        case "divide":
            display(parseFloat(firstValue) / parseFloat(secondValue));
            break;
        case "remainder":
            display(parseFloat(firstValue) % parseFloat(secondValue));
            break;
    }
    ignoreNextInput = true;
}

function inputValue(next) {
    (ignoreNextInput) ? prev = "" : prev = document.getElementById("output").innerHTML;
    ignoreNextInput = false;
    (prev == "0") ? prev = "" : prev;
    let value;
    if (prev.length < 18) {
        value = prev.toString() + next.toString();
    } else {
        value = prev.toString();
    }
    console.log(value.length);
    display (value);
}

function display (out) {
    out = out.toString();
    out.length < 8 ? document.getElementById("output").style.fontSize = '48px':
        document.getElementById("output").style.fontSize = '22px';
    document.getElementById("output").innerHTML = out;
}

function clear() {
    display(0);
    document.getElementById("action").innerHTML = "";
    firstValue = "";
    secondValue = "";
}

function back(){
    if (ignoreNextInput) {return;}
    display(document.getElementById("output").innerHTML.slice(0,this.length-1));
}

var firstValue;
var secondValue;
var action;
var ignoreNextInput;
let _output = document.getElementById("output");

setInterval(() => {
    console.log(`firstvalue: ${firstValue} secondvalue: ${secondValue}`);
    
}, 1000);

const buttons = document.querySelectorAll("button")
for (let button of buttons) {
    button.setAttribute('tabindex', '-1');
    button.addEventListener("click", () => { 
        button.classList.add('pressed');
        setTimeout(() => {
            button.classList.remove("pressed");
        }, 100)
    });
}

document.getElementById("one").addEventListener         ("click", () => inputValue(1));
document.getElementById("two").addEventListener         ("click", () => inputValue(2));
document.getElementById("three").addEventListener       ("click", () => inputValue(3));
document.getElementById("four").addEventListener        ("click", () => inputValue(4));
document.getElementById("five").addEventListener        ("click", () => inputValue(5));
document.getElementById("six").addEventListener         ("click", () => inputValue(6));
document.getElementById("seven").addEventListener       ("click", () => inputValue(7));
document.getElementById("eight").addEventListener       ("click", () => inputValue(8));
document.getElementById("nine").addEventListener        ("click", () => inputValue(9));
document.getElementById("zero").addEventListener        ("click", () => inputValue(0));
document.getElementById("period").addEventListener      ("click", () => inputValue("."));
document.getElementById("Sign").addEventListener        ("click", () => _output.innerHTML = _output.innerHTML * -1);

document.getElementById("Add").addEventListener         ("click", () => setAction("add"));
document.getElementById("Subtract").addEventListener    ("click", () => setAction("subtract"));
document.getElementById("Multiply").addEventListener    ("click", () => setAction("multiply"));
document.getElementById("Divide").addEventListener      ("click", () => setAction("divide"));
document.getElementById("Remainder").addEventListener   ("click", () => setAction("remainder"));

document.getElementById("Equals").addEventListener      ("click", () => equals());
document.getElementById("Back").addEventListener        ("click", () => back());
document.getElementById("Clear").addEventListener       ("click", () => clear());

const keys = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    "/": "Divide",
    "*": "Multiply",
    "-": "Subtract",
    "+": "Add",
    "%": "Remainder",
    "Enter": "Equals",
    "Backspace": "Back",
    "Delete": "Clear",
    ".": "period"
}

document.addEventListener("keydown", (e) => {
    e.preventDefault();
    try {
        const button = document.getElementById(keys[e.key]);
        button.click();
    } catch(e){}
}, false)
