function result() {
  let score = 0;
  if (document.querySelector('#correct1').checked) {
    score++;
  } if (document.querySelector('#correct2').checked) {
    score++;
  } if (document.querySelector('#correct3').checked) {
    score++;
  }

  alert("Ton score est de " + score);
}
result()

let myCity = "Paris";
myCity = "Berlin";
console.log(myCity);




















































//function resultat() {
   // let firstvalue = parseInt(prompt("firstvalue"));

    //let calculator = prompt("operator");

    //let secondvalue = parseInt(prompt("secondvalue"));

    //switch (calculator) {
       // case "+":
         //   console.log(firstvalue + secondvalue);
           // break;
        //case "-":
            //console.log(firstvalue - secondvalue);
            //break;
        //case "*":
            //console.log(firstvalue * secondvalue);
            //break;
        //case "/":
          //  console.log(firstvalue / secondvalue);
        //default:
          //  console.error("invalid");
            //break;
    //}
//}
//resultat()

// if (operator === "+") {
//     console.log(parseInt(firstValue) + parseInt(secondValue))
// } else if (operator === "-") {
//     console.log(parseInt(firstValue) - parseInt(secondValue))
// } else if (operator === "*") {
//     console.log(parseInt(firstValue) * parseInt(secondValue))
// } else if (operator === "/") {
//     console.log(parseInt(firstValue) / parseInt(secondValue))
// } else {
//     console.error("Invalid operator")
// }