function regexChecker() {
    let fName = document.getElementById('firstName').value;
    let lName = document.getElementById('lastName').value;
    let firstRegex =  "^[A-Z]+[a-zA-Z]*$";
    let lastRegex =  "^[A-Z]+[a-zA-Z]*$";
    if (fName.match(firstRegex)) {
      alert("Yay! Your inputs were all correct!");
      console.log(true);
    }
    else {
      alert("Oh no! Thats an invalid format!");
      console.log(false);
    }
    if (lName.match(lastRegex)) {
        alert("Yay! Your inputs were all correct!");
        console.log(true);
      }
      else {
        alert("Oh no! Thats an invalid format!");
        console.log(false);
      }
  }