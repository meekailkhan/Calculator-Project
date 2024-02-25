const container = tagGenrator("div","id","mainContainer",document.body);
const input = tagGenrator ("input","class","input",mainContainer)
const calculatorContainer = tagGenrator("div","id","calculator",mainContainer,null,null,"click");
const cancelBtn = tagGenrator("button","class","cancelBtn",calculator,"AC");
const delBtn = tagGenrator("button","class","delBtn",calculator,"DEL");
const modularBtn = tagGenrator("button","class","modularBtn",calculator,"%","%");
const devideBtn = tagGenrator("button","class","devideBtn",calculator,"/","/");
const seventBtn = tagGenrator("button","class","seventBtn",calculator,"7","7");
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
const doutBtn = tagGenrator("button","class","doutBtn",calculator,".",".")
const equalBtn = tagGenrator("button","class","equalBtn",calculator,"=","=")

// input.innerText = "10"

// calculator.addEventListener("click",function event(e){
//     e.preventDefault();
//     // console.log(e);
//     console.log(e.target)

//     if(e.target.value === "9"){
//         // input.value = "9"
//     }
// })




function tagGenrator(tag,attName,attValue,parent,text,value,event){
    let elemetn = document.createElement(tag);

    if(!!attName&&attValue){
        elemetn.setAttribute(attName,attValue);
    }
    if(!!parent){
        parent.append(elemetn);
    }
    if(!!text){
        elemetn.innerText = text
    }
    if(!!value){
        elemetn.value = value;
    }
    
    if(!!event){
        elemetn.addEventListener(event,function(e){
            e.preventDefault();
            

            // if(e.tagName !== )   
            console.log(e)
            if(e.target.classList[0]== "cancelBtn"){
                input.value = ""
            }
            if(e.target.classList[0] == "modularBtn"){
                    input.value += modularBtn.value
            }
            if(e.target.classList[0] == "devideBtn" ){
                input.value += devideBtn.value
            }
            if(e.target.classList[0] == "seventBtn"){
                input.value += seventBtn.value
            }
            if(e.target.classList[0] == "eightBtn"){
                input.value += eightBtn.value
            }
            if(e.target.classList[0] == "nineBtn"){
                input.value += nineBtn.value
            }
            if(e.target.classList[0] == "multiBtn"){
                input.value += multiBtn.value
            }
            if(e.target.classList[0] == "fourBtn"){
                input.value += fourBtn.value
            }
            if(e.target.classList[0] == "fiveBtn"){
                input.value += fiveBtn.value
            }
            if(e.target.classList[0] == "sixBtn"){
                input.value += sixBtn.value
            }
            if(e.target.classList[0] == "subBtn"){
                input.value += subBtn.value
            }
            if(e.target.classList[0] == "oneBtn"){
                input.value += oneBtn.value
            }
            if(e.target.classList[0] == "twoBtn"){
                input.value += twoBtn.value
            }
            if(e.target.classList[0] == "threeBtn"){
                input.value += threeBtn.value
            }
            if(e.target.classList[0] == "plusBtn"){
                input.value += plusBtn.value
            }
            if(e.target.classList[0] == "zeroBtn"){
                input.value += zeroBtn.value
            }
            if(e.target.classList[0] == "dZeroBtn"){
                input.value += dZeroBtn.value
            }
            if(e.target.classList[0] == "doutBtn"){
                input.value += doutBtn.value
            }
            if(e.target.classList[0] == "equalBtn"){
                if(input.value == ""){
                    input.value = "0"
                }
                if(Object.is(input.value,NaN)){
                    input.value = "0"
                }
                input.value = eval(input.value)
            }
            
        })
    }

    return elemetn;
}


console.log(window)



