let tab = [-2, 1, 4];

let add = (n) => {
let y = document.getElementById('number').value;
let x = parseFloat(y);
if(y.length > 0){
  return(x+n);
}
else{
  return
}
}

let display = () => {
  let val1 = add(10);
  if (val1 === undefined || val1 === null) {
    alert("please enter a value");}
    else{
  for( i in tab){
   val1 = add(tab[i]);
    console.log('number '+(parseInt(i)+parseInt(1))+': '+val1);}
  }

}