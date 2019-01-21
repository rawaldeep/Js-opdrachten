function myFunction() {
    var person = prompt("Please enter your name", "Enter your name here");
    if(person.length === 0){
        alert("sorry, you have not entered your name");
        myFunction();
    }
    else if (person != null && person != "Enter your name here") {
        alert(
        "Hello " + person + "! How are you today?");
    }
    else if( person == "Enter your name here"){
        alert("sorry, you have not entered your name");
        myFunction();
    }
    
  }
  myFunction();