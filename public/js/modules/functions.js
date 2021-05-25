import { divInput } from "../main.js";

export function insert(num) {
    divInput.value += num
}

export function deletee() {
    divInput.value = ' '
}

export function equal() {
    divInput.value = eval(divInput.value)
}

export function remove() {
    divInput.value = divInput.value.slice(0, -1)
}