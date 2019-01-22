const temperatureConversion = () => {
alert("Enter a number from the following options to operate:\n 0 End of the program\n 1 Celsius to Fahrenheit\n 2 Celcius to Kelvin\n 3 Fahrenheit to Celsius\n 4 Fahrenheit to Kelvin\n 5 Kelvin to Celsius\n 6 Kelvin to Fahrenheit");
let Response1 = prompt("Enter your command code", " ");
if(Response1 && Response1==!NaN){
let Response = parseFloat(Response1);
let tempPrePharse = prompt("Enter the temprature", "enter only the numeric value ");
if(tempPrePharse && tempPrePharse == !NaN){
let temp = parseFloat(tempPrePharse);
let newTemp = parseFloat(0);
let num = parseFloat(0);
let k = 273.15;
let f = 32;
let kf = 459.67;

switch (Response) {
  case 0:
  console.log('program ended');
  break;
  case 1:
  num = (temp * (9/5) + 32);
  newTemp = (Math.round(num * 100) / 100)
  alert('The temprature is '+newTemp+"℉ in Fahrenheit");
  break;
  case 2:
  num = (temp+parseFloat(k));
  newTemp = (Math.round(num * 100) / 100);
  alert('The temprature is '+newTemp+"K in Kelvin");
  break;
  case 3:
  num = ((temp - parseFloat(f))/(9/5));
  newTemp = (Math.round(num * 100) / 100);
  alert('The temprature is '+newTemp+"°C in Celsius");
  break;
  case 4:
  num = ((temp - parseFloat(f))*(5/9)+parseFloat(k));
  newTemp = (Math.round(num * 100) / 100);
  alert('The temprature is '+newTemp+"K in Kelvin");
  break;
  case 5:
  num = (temp - parseFloat(k));
  newTemp = (Math.round(num * 100) / 100);
  alert('The temprature is '+newTemp+"°C in Celsius");
  break;
  case 6:
  //[°F] = ([K] x 9/5) - 459,67
  num = ((temp*(9/5))-parseFloat(kf));
  newTemp = (Math.round(num * 100) / 100);
  alert('The temprature is '+newTemp+"℉ in Fahrenheit");
  break;
  default:
  console.log('not regognised command');
}
}
}
    }