let tab = [-2, 1, 4];

let subtract = (n) => {
let y = document.getElementById('number').value;
let x = parseFloat(y);
if(y.length > 0){
  let answer = (x-n);
  if(answer >= 0){
    return "positive"
  }
  else{
    return "negative"
  }
}
else{
  return
}
}

let display = () => {
  let val1 = subtract(10);
  if (val1 === undefined || val1 === null) {
    alert("please enter a value");}
    else{
  for( i in tab){
   val1 = subtract(tab[i]);
    console.log('this number is '+val1);}
  }

}