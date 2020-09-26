let displayIsCleared = true;
let operandStack = [];
let operatorStack = [];
let operatorPrecedence = {
  "+":1,
  "-":1,
  "x":2,
  "\xF7":2
};

function insert(button){
  let oldExpression = displayIsCleared ? "" : document.getElementsByClassName('display')[0].innerHTML;
  let newExpression = oldExpression.concat(button.innerHTML);
  document.getElementsByClassName("display")[0].innerHTML = newExpression;
  displayIsCleared = false;
}

function cancel(){
  document.getElementsByClassName("display")[0].innerHTML = "0";
  displayIsCleared = true;
}

function process(){
  let numberB = operandStack.pop();
  let numberA = operandStack.pop();
  let operator = operatorStack.pop();
  let result = 0.0;
  switch(operator){
    case "+":
      result = numberA + numberB;
      break;
    case "-":
      result = numberA - numberB;
      break;
    case "x":
      result = numberA * numberB;
      break;
    case "\xF7":
      result = numberA / numberB;
      break;
  }
  operandStack.push(result);
}

function evaluateExpression(){
  let symbols = document.getElementsByClassName("display")[0].innerHTML.split(" ");
  console.log(symbols);
  for(symbol of symbols){
    switch(symbol){
      case "+":
      case "-":
      case "x":
      case "\xF7":
        if(operatorStack.length === 0){
          operatorStack.push(symbol)
        }
        else{
          if(operatorPrecedence[symbol] > operatorPrecedence[operatorStack[operatorStack.length - 1]]){
            operatorStack.push(symbol);
          }
          else{
            while(operatorPrecedence[symbol] <= operatorPrecedence[operatorStack[operatorStack.length - 1]]){
              process();
            }
            operatorStack.push(symbol);
          }
        }
        break;
      default:
        operandStack.push(parseFloat(symbol));
    }
  }
  while(operatorStack.length !== 0){
    process();
  }
  document.getElementsByClassName("display")[0].innerHTML = operandStack.pop();
}
