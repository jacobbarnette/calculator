/* add function */
function addValues(a, b) {
    let addedValues = a + b;
    console.log(addedValues);
}

/* subtract function */
function subtractValues(a, b) {
    let subtractedValues = a - b;
    console.log(subtractedValues);
}

/* mulitply function */
function multiplyValues(a, b) {
    let mulitpliedValues = a * b;
    console.log(mulitpliedValues);
}

/* division function */
function divideValues(a, b){
    let dividedValues = a / b;
    console.log(dividedValues);
}

function operate(operator, a, b){
    operator = operator.toLowerCase();
   if(operator === 'addition') {
       addValues(a, b);
   } else if(operator === 'subtration') {
       subtractValues(a, b);
   } else if(operator === 'multiplication'){
       multiplyValues(a, b);
   } else if(operator === 'division'){
       divideValues(a, b);
   }
   
}
addValues(5, 10);
subtractValues(5, 10);
multiplyValues(5, 10);
divideValues(5, 10);
operate('addition', 10, 15);