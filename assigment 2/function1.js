function Myfunction1() {
    console.log("Hello world!");
}
function myFunction() {
    alert("Hello\nHow are you?");
}
function myfunction2() {
    var id = document.write("hello world  ----refresh page to go back");
}
function promptbox() {
    const num1 = parseInt(prompt("Please enter your number 1", ""));
    const num2 = parseInt(prompt("Please enter your number 2", ""));
    const num3 = num1 + num2
    if (num2 != null) {
        alert(num3);
    }
}

function evenodd() {
    const num1 = parseInt(prompt("Please enter your number 1", ""));
    if (num1 % 2 == 0) {
        alert("number is even");
    }
    else { alert("number is odd") }

}

function Display() {
    let num1 = parseInt(prompt("Please enter your number 1", ""));
    let num2 = parseInt(prompt("Please enter your number 1", ""));
    let num3 = num1 + num2;
    if (num1 != null) {
        document.getElementById("demo").innerHTML =
            "the sum is all" + ": " + num3;
    }
}


function calci() {
    let result;
    let operator = prompt("Please enter the operator", "");
    let number1 = parseFloat(prompt('Enter first number: '));
    let number2 = parseFloat(prompt('Enter second number: '));

    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else {
        result = number1 / number2;
    }
    document.getElementById("demo3").innerHTML = "answer is :" + result;

}

function NumberAndSquare() {
    let number = parseFloat(prompt('Enter the starting square number : '));
    let size = parseFloat(prompt('Enter the ending square number : '));

    for (i = number; i <= size; i++) {
        document.write("<table border='1' width='70%'>");
        document.write('<tr>');
        //console.log("Number " + i + " Square of Number " + i * i);
        document.write("<td>" + i * i + "</td>");
        //document.getElementById("demo4").innerHTML = "SQUARE OF NUMBER IS  :" + i * i;
        document.write('</tr>');
        document.write("</table>");

    }
}

function buildit() {
    let number1 = parseInt(prompt("Please enter your number 1", ""));
    let number2 = parseInt(prompt("Please enter your number 2", ""));
    let tbody = document.querySelector('tbody');
    let result = '';
    let row = tbody.insertRow();
    row.insertCell().textContent = 'X';
    for (let y = number1; y <= number2; y++) {
        if (y === number1) {
            for (let x = number1; x <= number2; x++) {
                row.insertCell().textContent = x;
            }
        }
        row = tbody.insertRow();
        row.insertCell().textContent = y;
        for (let x = number1; x <= number2; x++) {
            row.insertCell().textContent = x * y;
        }
    }
}


