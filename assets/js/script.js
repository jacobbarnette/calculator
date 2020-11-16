let a = '';
let b = ''
let btn = document.querySelectorAll('.btn');
let backspace = document.getElementById('backspace');
let clear = document.getElementById('clear');
let count = 0;
let display = document.getElementById('display');
let operator = '';

/* clear display */
clear.addEventListener('click', restoreCalc);
/* backspace */
backspace.addEventListener('click', removeLastValue);

/* add function */
function addValues(a, b) {
    let addedValues =   Number(a) + Number(b);
    if(display.textContent.length > 8) {
        alert('Sorry, that wont fit on the screen');
    } else if (display.textContent.length < 8) {
        display.textContent = addedValues;
        console.log(addedValues);
        restoreCalc();
    }
   
}

/* subtract function */
function subtractValues(a, b) {
    let subtractedValues = Number(a) - Number(b);
    if(display.textContent.length > 8) {
        alert('Sorry, that wont fit on the screen');
    } else if(display.textContent.length< 8) {
        console.log(subtractedValues)
        display.textContent = subtractedValues;
        restoreCalc();
    }
}

/* mulitply function */
function multiplyValues(a, b) {
    let mulitpliedValues = Number(a) * Number(b);
    if(display.textContent.length > 8) {
        alert('Sorry, that wont fit on the screen');
    } else if(display.textContent.length < 8) {
        console.log(mulitpliedValues);
        display.textContent = mulitpliedValues;
        restoreCalc();
    }
}

/* division function */
function divideValues(a, b){
    let dividedValues = Number(a) / Number(b);
    if(a === '0' || b === '0') {
        alert('You cant do that');
    } else if (display.textContent.length> 8) {
        alert('Sorry, that wont fit on the screen');
    } else if (display.textContent.length < 8) {
        display.textContent = dividedValues;
        restoreCalc();
    }
    }
       
       

/* equal function */
function operate(operator, a, b){
   if(operator === '+') {
       addValues(a, b);
   } else if(operator === '-') {
       subtractValues(a, b);
   } else if(operator === 'x'){
       multiplyValues(a, b);
   } else if(operator === '/'){
       divideValues(a, b);
   }
   
}

function addEvent() {
    for(let i =0; i < btn.length; i++) {
        btn[i].addEventListener('click', function() {
        if(display.textContent.length >= 8) {
            alert('Sorry, You have ran out of room. Please delete some numbers, nobody likes big numbers')
        } else if (display.textContent.length < 8) {
            if(count === 0 && !btn[i].classList.contains('operator')){
                if(!btn[i].classList.contains('clear')) {
                 a += btn[i].value;
                 display.textContent = a;
                 console.log(a); 
                 } else if(btn[i].classList.contains('clear')){
                     let clear = 'clear';
                     restoreCalc(clear);
                 }
            } else if (btn[i].classList.contains('operator') && !btn[i].classList.contains('equals')) {
                 count = 1;
                 operator = btn[i].value;
                 console.log(operator);
                 
                 console.log(count)
            } else if (count === 1 && !btn[i].classList.contains('equals')) {  
                a = display.textContent;
                 display.textContent = '';
                 display.textContent += btn[i].value;
                 b += btn[i].value;
                 count = 2;
             
            } else if(count === 2  && !btn[i].classList.contains('equals')) {
                 display.textContent += btn[i].value;
                 b += btn[i].value;
                 console.log('i think it gets stuck hereh bb');
            } else if(count === 2 && btn[i].value === '=') {
                console.log(operator);
                console.log(a);
                console.log(b);
                operate(operator, a, b)
            }
        }
    }
        )};
}


function restoreCalc(clear) {
   if(clear === 'clear') {
    display.textContent = '';
    count = 0;
    a = '';
    b = '';
}
    count = 0;
    a = '';
    b = '';
}

function removeLastValue() {
   let backspaceValue = display.textContent;
    backspaceValue.slice(-1);
    display.textContent = backspaceValue.slice(0, -1);
    a = display.textContent;
}

addEvent();
