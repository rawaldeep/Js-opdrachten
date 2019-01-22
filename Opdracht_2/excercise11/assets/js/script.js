let arr = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const calcAverage = () => {
    let newVal  = prompt("Enter a number to add to the list", "enter your value here");
    if (!isNaN(newVal) && newVal){ 
    if(newVal >= 0){
     let fval =  parseFloat(newVal);
     console.log("adding");
    arr.push(fval);}
    else{
      console.log("cannot add negetive");
      console.log("calculating");
      let totalLength = arr.length;
      if(totalLength > 0){
      let total = arr.reduce(reducer);
      console.log('average till now: '+total/totalLength+' and number of entries : '+totalLength);}
      else{
        console.log('no entries here')
      }
    }
  }
    else{
      alert("please enter a number")
      valAdd();
    }
  }