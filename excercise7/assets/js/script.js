function myFunction() {
    let num1 = document.getElementById("height").value;
    let num2 = document.getElementById("birthdate").value;
    if(num1.length > 0 && num2.length > 0 ){
    let number = (((num1*2)+5)*50);
    let answer = (number - num2)+1766;
    alert("the result is: "+answer);
    }
  }