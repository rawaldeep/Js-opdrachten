let a = 3;
let b = 2;

let tripple = (n) => {
let x = document.getElementById('number').value;
if(x.length > 0){
  return(x*n);
}
else{
  return
}
}

let display = () => {
let val1 = tripple(a);
let val2 = tripple(b);
if (val1 === undefined || val1 === null) {
alert("please enter a value");}
else{
alert('number 1: '+val1+'\nnumber 2: '+val2);}
}