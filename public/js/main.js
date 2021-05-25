import { insert, deletee, equal, remove } from "./modules/functions.js";

let grandeDiv = document.createElement('div');
grandeDiv.id = 'calculatrice';

export let divInput = document.createElement('input');
divInput.id = 'resInput';
divInput.setAttribute('type', 'text');


let divBtn = document.createElement('div');
divBtn.id = 'boutons';

let btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12, btn13, btn14, btn15, btn16, btn17, btn18, btn19, btn20;
let tabBtn = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12, btn13, btn14, btn15, btn16, btn17, btn18, btn19, btn20];
let valueBtn = ['7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '*', '0', '.', '=', '/', 'CE', 'DEL', '(', ')'];

tabBtn.forEach((e, i) => {
    e = document.createElement('button')
    divBtn.appendChild(e)
    e.innerText = valueBtn[i]
    e.addEventListener('click', () => {
        if (e.innerText == "0") {
            insert(0)
        } else if (e.innerText == "1") {
            insert(1)
        } else if (e.innerText == "2") {
            insert(2)
        } else if (e.innerText == "3") {
            insert(3)
        } else if (e.innerText == "4") {
            insert(4)
        } else if (e.innerText == "5") {
            insert(5)
        } else if (e.innerText == "6") {
            insert(6)
        } else if (e.innerText == "7") {
            insert(7)
        } else if (e.innerText == "8") {
            insert(8)
        } else if (e.innerText == "9") {
            insert(9)
        } else if (e.innerText == "+") {
            insert("+")
        } else if (e.innerText == "-") {
            insert("-")
        } else if (e.innerText == "*") {
            insert("*")
        } else if (e.innerText == "/") {
            insert("/")
        } else if (e.innerText == "%") {
            insert("%")
        } else if (e.innerText == "(") {
            insert("(")
        } else if (e.innerText == ")") {
            insert(")")
        } else if (e.innerText == "CE") {
            deletee()
        } else if (e.innerText == "DEL") {
            remove()
        } else if (e.innerText == ".") {
            insert(".")
        } else if (e.innerText == "=") { equal() }
    });
});

window.addEventListener('keydown', (event) => {
    if (event.key == '1') {
        insert(1)
    } else if (event.key == '2') {
        insert(2)
    } else if (event.key == '3') {
        insert(3)
    } else if (event.key == '4') {
        insert(4)
    } else if (event.key == '5') {
        insert(5)
    } else if (event.key == '6') {
        insert(6)
    } else if (event.key == '7') {
        insert(7)
    } else if (event.key == '8') {
        insert(8)
    } else if (event.key == '9') {
        insert(9)
    } else if (event.key == '0') {
        insert(0)
    } else if (event.key == '+') {
        insert("+")
    } else if (event.key == '-') {
        insert("-")
    } else if (event.key == '*') {
        insert("*")
    } else if (event.key == '/') {
        insert("/")
    } else if (event.key == '%') {
        insert("%")
    } else if (event.key == '(') {
        insert("%")
    } else if (event.key == ')') {
        insert("%")
    } else if (event.key == 'Escape') {
        deletee()
    } else if (event.key == 'Backspace') {
        remove()
    } else if (event.key == 'Enter') {
        equal()
    } else if (event.key == '.') { insert(".") }
})

grandeDiv.appendChild(divInput);
grandeDiv.appendChild(divBtn);
document.body.appendChild(grandeDiv);