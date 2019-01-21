function myFunction() {
    let num1 = document.getElementById("age").value;
    if(num1.length > 0){
    if(num1 > 18 ){
      alert("U bent meerderjarig ");
    } else{
      alert("U bent minderjarig");
    }
    }
    else{
      alert("Vul je leeftijd in");
    }
  }