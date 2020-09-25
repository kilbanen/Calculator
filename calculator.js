function insert(button){
  let oldExpression = document.getElementsByClassName('display')[0].innerHTML;
  let newExpression = oldExpression.concat(button.innerHTML);
  document.getElementsByClassName("display")[0].innerHTML = newExpression;
}

function cancel(){
  document.getElementsByClassName("display")[0].innerHTML = "0";
}
