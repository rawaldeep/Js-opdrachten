const testWhile = () => {
  let something = prompt("Enter a string", "enter something containing the letter p");
  if(something){
  let a =something.split('');
  let i = 0;
  let checkr = false;

   while( i < a.length){
     if(a[i] == 'p'){
       checkr = true;
     }
     i++
   }
if(checkr === true){
  let b = a.join('');
  alert('your string was:\n"'+b+'"\nand it has the letter p in it');
}
else{
  alert('please enter something which has the letter p in it');
  testWhile();
}
    }
  }
