let displayIsCleared = true;

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
