const sum = () => {
let arr = [];
alert('you will be asked to enter 3 seprate numbers')

for(let i = 0 ; i < 3; i++){
  let num1 = prompt("enter number", " ");
  let num = parseFloat(num1);
  arr.push(num);
}
let j = 0;
for(let i in arr){
  j = arr[i]+ j;
}
alert("the sum of these numbers is: "+j);

}
