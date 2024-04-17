const mainContainer = tagGenrator("div","id","maincontainer",document.body,null,null,"click");
const input = tagGenrator("input","class","input",mainContainer);
const calculator = tagGenrator("div","class","calculator",mainContainer);
const acBtn = tagGenrator("button","class","cancelBtn",calculator,"AC");
const delBtn = tagGenrator("button","class","delBtn",calculator,"DEL");
const modularBtn = tagGenrator("button","class","modularBtn",calculator,"%","%");
const divideBtn = tagGenrator("button","class","divideBtn",calculator,"/","/");
const seventBtn = tagGenrator("button","class","sevenBtn",calculator,"7","7");
const eightBtn = tagGenrator("button","class","eightBtn",calculator,"8","8");
const nineBtn = tagGenrator("button","class","nineBtn",calculator,"9","9");
const multiBtn = tagGenrator("button","class","multiBtn",calculator,"*","*");
const fourBtn = tagGenrator("button","class","fourBtn",calculator,"4","4");
const fiveBtn = tagGenrator("button","class","fiveBtn",calculator,"5","5");
const sixBtn = tagGenrator("button","class","sixBtn",calculator,"6","6");
const subBtn = tagGenrator("button","class","subBtn",calculator,"-","-");
const oneBtn = tagGenrator("button","class","oneBtn",calculator,"1","1");
const twoBtn = tagGenrator("button","class","twoBtn",calculator,"2","2");
const threeBtn = tagGenrator("button","class","threeBtn",calculator,"3","3");
const plusBtn = tagGenrator("button","class","plusBtn",calculator,"+","+");
const zeroBtn = tagGenrator("button","class","zeroBtn",calculator,"0","0");
const dZeroBtn = tagGenrator("button","class","dZeroBtn",calculator,"00","00");
const doutBtn = tagGenrator("button","class","doutBtn",calculator,".",".");
const equalBtn = tagGenrator("button","class","equalBtn",calculator,"=");



function tagGenrator(tag,attName,attType,parent,text,value,event){
    let element = document.createElement(tag);
    
    if(!!attName&&attType){
        element.setAttribute(attName,attType)
    }
    if(!!parent){
        parent.append(element)
    }
    if(!!text){
        element.innerText = text
    }
    if(!!value){
        element.value = value
    }
    if(!!event){
        element.addEventListener(event,eventFn)

        function eventFn(e){
            e.preventDefault();
            e.stopPropagation();
 
            
            let currentValue = e.target.value;
            
            if(e.target.tagName != "BUTTON"){
                return
            }
            console.dir(e.target)
            console.log(e.target)

            
            if(Object.is(Number(currentValue),NaN)===false){
                input.value += e.target.value
            }
            

            if(e.target.classList[0]== "cancelBtn"){
                input.value = ""
            }
            let str = input.value;
            let index = str.length-1;


            if(e.target.classList[0] == "delBtn"){
                input.value = str.substring(0, str.length - 1);
            }
            else if(Object.is(Number(str[index]),NaN)===true){
                return;
            }
            

            if(e.target.classList[0] === "equalBtn"){
                if(input.value == ""){
                    input.value = "0";
                }
                input.value = eval(input.value);
            }

            if(Object.is(Number(currentValue),NaN)===true){
                input.value += e.target.value
            }
            
        }

    }

    return element
}