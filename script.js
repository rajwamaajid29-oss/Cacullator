//Cacullator Program

const display = document.getElementById("display");

function appendToDisplay(input){
 display.value += input;
}

function clearDisplay(){
    display.value = "";
}
function caclulate(){
    display.value = eval(display.value);
}
function backspace(){
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

