function myFunction() {
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;
    if(num1.length > 0 && num2.length > 0 ){
    alert("answer: "+num1%num2);}  
  }