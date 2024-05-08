

class TagGenrator{
    constructor(tag, attName, attValue, parent, text, value){
        this.element = document.createElement(tag)
        
        if(attName&&attValue){
            this.element.setAttribute(attName,attValue)
        }
        if(parent){
            parent.append(this.element)
        }
        if(text){
            this.element.innerText = text
        }
        if(value){
            this.element.value = value
        }
    }

    getElement(){
        return this.element
    }
}


const container = new TagGenrator("div", "id", "mainContainer", document.body).getElement();
const input = new TagGenrator("input", "class", "input", mainContainer).getElement();
const calculatorContainer = new TagGenrator("div", "id", "calculator", mainContainer, null, null,).getElement();
const cancelBtn = new TagGenrator("button", "class", "cancelBtn", calculator, "AC").getElement();
const delBtn = new TagGenrator("button", "class", "delBtn", calculator, "DEL").getElement();
const modularBtn = new TagGenrator("button", "class", "modularBtn", calculator, "%", "%").getElement();
const devideBtn = new TagGenrator("button", "class", "devideBtn", calculator, "/", "/").getElement();
const seventBtn = new TagGenrator("button", "class", "seventBtn btn", calculator, "7", "7").getElement();
const eightBtn = new TagGenrator("button", "class", "eightBtn btn", calculator, "8", "8").getElement();
const nineBtn = new TagGenrator("button", "class", "nineBtn btn", calculator, "9", "9").getElement();
const multiBtn = new TagGenrator("button", "class", "multiBtn", calculator, "*", "*").getElement();
const fourBtn = new TagGenrator("button", "class", "fourBtn btn", calculator, "4", "4").getElement();
const fiveBtn = new TagGenrator("button", "class", "fiveBtn btn", calculator, "5", "5").getElement();
const sixBtn = new TagGenrator("button", "class", "sixBtn btn", calculator, "6", "6").getElement();
const subBtn = new TagGenrator("button", "class", "subBtn", calculator, "-", "-").getElement();
const oneBtn = new TagGenrator("button", "class", "oneBtn btn", calculator, "1", "1").getElement();
const twoBtn = new TagGenrator("button", "class", "twoBtn btn", calculator, "2", "2").getElement();
const threeBtn = new TagGenrator("button", "class", "threeBtn btn", calculator, "3", "3").getElement();
const plusBtn = new TagGenrator("button", "class", "plusBtn btn", calculator, "+", "+").getElement();
const zeroBtn = new TagGenrator("button", "class", "zeroBtn btn", calculator, "0", "0").getElement();
const dZeroBtn = new TagGenrator("button", "class", "dZeroBtn btn", calculator, "00", "00").getElement();
const doutBtn = new TagGenrator("button", "class", "doutBtn btn", calculator, ".", ".").getElement();
const equalBtn = new TagGenrator("button", "class", "equalBtn", calculator, "=").getElement();



calculatorContainer.addEventListener("click", eventFn)
function eventFn(e) {
    e.preventDefault();
    e.stopPropagation();


    let currentValue = e.target.value;

    if (e.target.tagName != "BUTTON") {
        return
    }
    console.log(e)

    if (Object.is(Number(currentValue), NaN) === false) {
        input.value += e.target.value
    }


    if (e.target.classList[0] == "cancelBtn") {
        input.value = ""
    }
    let str = input.value;
    let index = str.length - 1;


    if (e.target.classList[0] == "delBtn") {
        input.value = str.substring(0, str.length - 1);
    }
    else if (Object.is(Number(str[index]), NaN) === true) {
        return;
    }


    if (e.target.classList[0] === "equalBtn") {
        if (input.value == "") {
            input.value = "0";
        }
        input.value = eval(input.value);
    }

    if (Object.is(Number(currentValue), NaN) === true) {
        input.value += e.target.value
    }

}