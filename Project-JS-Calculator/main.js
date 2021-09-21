//-------------Number shown in the screen----------------//

function calculate(num) {
    document.getElementById("result").value += num

}

//-------------Function Clean All-clear all element inside the result----------------------------//

function clr() {
    document.getElementById("result").value = "";

}

//---------------Function Delete-delete one number each time----------------------------//

function del() {
    document.getElementById("result").value = result.value.slice(0, -1);


}

//-------------------------Add operation + Result-----------------------------//
var operator1;
var operator2;
var operation;

function init() {
    add.onclick = function(e) {
        operator1 = result.value;
        operation = "+";
        delet();
    }

    subtract.onclick = function(e) {
        operator1 = result.value;
        operation = "-";
        delet();
    }
    multiply.onclick = function(e) {
        operator1 = result.value;
        operation = "*";
        delet();
    }
    divide.onclick = function(e) {
        operator1 = result.value;
        operation = "/";
        delet();
    }
    raise.onclick = function(e) {
        operator1 = result.value;
        operation = "**";
        delet();
    }
    remainder.onclick = function(e) {
        operator1 = result.value;
        operation = "%";
        delet();
    }

    equal.onclick = function(e) {
        operator2 = result.value;
        compute();
    }

}

function delet() {
    document.getElementById("result").value = "";
}

function compute() {
    let res = 0;
    switch (operation) { //validate the variable(operation)
        case "+":
            res = parseFloat(operator1) + parseFloat(operator2);
            break;
        case "-":
            res = parseFloat(operator1) - parseFloat(operator2);
            break;
        case "*":
            res = parseFloat(operator1) * parseFloat(operator2);
            break;
        case "/":
            res = parseFloat(operator1) / parseFloat(operator2);
            break;
        case "%":
            res = parseFloat(operator1) % parseFloat(operator2);
            break;
        case "**":
            res = parseFloat(operator1) ** parseFloat(operator2);
            break;

        default:
            "NaN"
            break;
    }
    document.getElementById("result").value = res;
}