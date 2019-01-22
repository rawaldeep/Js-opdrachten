const makeChoice = () => {
    let choices = prompt("Make your choice", "Choose between 1 , 2 and 3");
    let choice = parseInt(choices);
      switch(choice) {
        case 1:
        alert('Thank you');
          break;
        case 2:
        alert('Hello');
          break;
        case 3:
        alert('Good Bye');
          break;
        default:
        alert("Excuse me, what do you want?");
        makeChoice();
      }  
    }
