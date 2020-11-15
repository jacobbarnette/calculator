let display = document.getElementById('display');
let btn = document.querySelectorAll('.btn');
let operator = '';
let clear = document.getElementById('clear');
let a = display.textContent;
let b = ''
let count = 0;

/* clear display */
clear.addEventListener('click', () => display.textContent = '');

/* add function */
function addValues(a, b) {
    let addedValues =   Number(a) + Number(b);
    display.textContent = addedValues;
    restoreCalc();
}

/* subtract function */
function subtractValues(a, b) {
    let subtractedValues = Number(a) - Number(b);
    display.textContent = subtractedValues;
    restoreCalc();
}

/* mulitply function */
function multiplyValues(a, b) {
    let mulitpliedValues = a * b;
    display.textContent = mulitpliedValues;
    restoreCalc();
}

/* division function */
function divideValues(a, b){
    let dividedValues = a / b;
    display.textContent = dividedValues;
    restoreCalc();
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
           if(count === 0 && !btn[i].classList.contains('operator')){
                a += btn[i].value;
              display.textContent = a;
              console.log(a); 
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
                operate(operator, a, b);
           } else if(count === 2  && !btn[i].classList.contains('equals')) {
                display.textContent += btn[i].value;
                b += btn[i].value;
           } else if(count === 2 && btn[i].value === '=') {
               operate(operator, a, b)
           }
           
        });
       
    }
    console.log(a);
    
}

function restoreCalc() {
    count = 0;
    a = '';
    b = '';
    display.textContent;
}

addEvent()
