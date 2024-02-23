const container = tagGenrator("div","id","mainContainer",document.body);
const calculatorContainer = tagGenrator("div","id","calculator",mainContainer);
const input = tagGenrator ("input","class","input",calculator)
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






function tagGenrator(tag,attName,attValue,parent,text,value,event,clas){
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
}






