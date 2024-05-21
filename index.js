function welcomeUser() {
    let city = document.getElementById("city").value;
    let resultElement = document.getElementById("result");
    
    if (city.toLowerCase() === "karachi") {
      resultElement.innerHTML = "Welcome to city of lights!";
    } else {
      resultElement.innerHTML = "Welcome to " + city + "!";
    }
  }
  function greetUser() {
    let gender = document.getElementById("gender").value;
    let resultElement = document.getElementById("result");
    
    if (gender.toLowerCase() === "male") {
      resultElement.innerHTML = "Good Morning Sir.";
    } else if (gender.toLowerCase() === "female") {
      resultElement.innerHTML = "Good Morning Ma'am.";
    } else {
      resultElement.innerHTML = "Please enter male or female.";
    }
  }
  function showMessage() {
    let color = document.getElementById("color").value;
    let resultElement = document.getElementById("result");
    
    if (color.toLowerCase() === "red") {
      resultElement.innerHTML = "Stop!";
    } else if (color.toLowerCase() === "yellow") {
      resultElement.innerHTML = "Get ready!";
    } else if (color.toLowerCase() === "green") {
      resultElement.innerHTML = "Go!";
    } else {
      resultElement.innerHTML = "Please enter red, yellow or green.";
    }
  }

  function checkFuel() {
    let fuel = document.getElementById("fuel").value;
    let resultElement = document.getElementById("result");
    
    if (fuel < 0.25) {
      resultElement.innerHTML = "Please refill the fuel in your car.";
    } else {
      resultElement.innerHTML = "You have sufficient fuel.";
    }
  }
  var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82; 
if (b++ === 83){ 
  alert("given condition for variable b is true"); 
}
var c = 12; 
if (c++ === 13){ 
  alert("condition 1 is true"); 
} 
if (c === 13){ 
  alert("condition 2 is true"); 
} 
if (++c < 14){ 
  alert("condition 3 is true"); 
} 
if(c === 14){ 
  alert("condition 4 is true"); 
}var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
  alert("The cost equals"); 
}
if (true){ 
    alert("True"); 
  } 
  if (false){ 
    alert("False") 
  }

  f.

if("car" < "cat")
  alert("car is smaller than cat"); 

function calculatePercentage() {
    let marks1 = document.getElementById("marks1").value;
    let marks2 = document.getElementById("marks2").value;
    let marks3 = document.getElementById("marks3").value;
    let totalMarks = document.getElementById("totalMarks").value;
    let resultElement = document.getElementById("result");
    
    let totalObtainedMarks = parseInt(marks1) + parseInt(marks2) + parseInt(marks3);
    let percentage = (totalObtainedMarks / totalMarks) * 100;}
    
    if (percentage >= 90) {
      grade = "A";
    } else if (percentage >= 80) {
      grade = "B";
    } else if (percentage >= 70) {
      grade = "C";
    } else if (percentage >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }



    function checkGuess() {
        let guess = document.getElementById("guess").value;
        let resultElement = document.getElementById("result");
        
        if (guess == secretNumber) {
          resultElement.innerHTML = "Bingo! Correct answer.";
        } else if (guess + 1 == secretNumber) {
          resultElement.innerHTML = "Close enough to the correct answer.";
        } else {
          resultElement.innerHTML = "Try again!";
        }
      }
      
      function checkDivisibility() {
        let number = document.getElementById("number").value;
        let resultElement = document.getElementById("result");
        
        if (number % 3 === 0) {
          resultElement.innerHTML = "The given number is divisible by 3.";
        } else {
          resultElement.innerHTML = "The given number is not divisible by 3.";
        }
      }

      function checkEvenOdd() {
        let number = document.getElementById("number").value;
        let resultElement = document.getElementById("result");
        
        if (number % 2 === 0) {
          resultElement.innerHTML = "The given number is even.";
        } else {
          resultElement.innerHTML = "The given number is odd.";
        }
      }

      function checkTemperature() {
        let temperature = document.getElementById("temperature").value;
        let resultElement = document.getElementById("result");
        
        if (temperature > 40) {
          resultElement.innerHTML = "It is too hot outside.";
        } else if (temperature > 30) {
          resultElement.innerHTML = "The Weather today is Normal.";
        } else if (temperature > 20) {
          resultElement.innerHTML = "Today's Weather is cool.";
        } else if (temperature > 10) {
          resultElement.innerHTML = "OMG! Today's weather is so Cool.";
        } else {
          resultElement.innerHTML = "Please enter a valid temperature.";
        }
      }


      function calculate() {
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;
        let operation = document.getElementById("operation").value;
        let resultElement = document.getElementById("result");
        
        if (operation === "+") {
          resultElement.innerHTML = "Result: " + (parseInt(num1) + parseInt(num2));
        } else if (operation === "-") {
          resultElement.innerHTML = "Result: " + (parseInt(num1) - parseInt(num2));
        } else if (operation === "*") {
          resultElement.innerHTML = "Result: " + (parseInt(num1) * parseInt(num2));
        } else if (operation === "/") {
          resultElement.innerHTML = "Result: " + (parseInt(num1) / parseInt(num2));
        } else if (operation === "%") {
          resultElement.innerHTML = "Result: " + (parseInt(num1) % parseInt(num2));
        }
      }
      