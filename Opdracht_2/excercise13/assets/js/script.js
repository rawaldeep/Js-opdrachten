const calcBMI = () => {
let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;
if(weight && height){
let BMI = (Math.round((weight/(height*height)) * 100) / 100);
alert("Jouw BMI is: "+BMI);
if(BMI < 16.5){
  alert('Minder dan 16,5: ondervoeding of hongersnood');
}
else if(BMI > 16.5 && BMI < 18.5 ){
alert('16,5 <= BMI <18,5 : dunheid')
}
else if(BMI >= 18.5 && BMI < 25 ){
  alert('18,5 <= BMI <= BMI < 25 : normale bouw')
  }
  else if(BMI >= 25 && BMI < 30 ){
    alert('25 <= BMI <30 : overgewicht')
    } 
    else if(BMI >= 30 && BMI < 35 ){
      alert('30 <= BMI <= BMI < 35 : matige overgewicht')
      } 
      else if(BMI >= 35 && BMI < 40 ){
        alert('35 <= BMI < 40 : ernstige overgewicht')
        } 
        else if(BMI >= 40 ){
          alert('meer dan 40: morbide obesitas')
          }  
  else{
  alert('cannot calculate BMI');
}
}
else{
  alert("please enter your details")
}

}