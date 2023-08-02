//Steps1> inputs/imports/libraries...Initialize
//Steps2> functions/classes.....Event Listeners

//VARIABLE DECLARATIONS...........................................

/*select the HTML elements that represent the calculator, 
the screen, all buttons and equal, clear buttons which need to be functional.
*/

let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let equalB = document.querySelector(".btn-equal");
let clearB = document.querySelector(".btn-clear");

//FUNCTION DEFINITIONS................................................

//Event Listeners.........

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let value = e.target.dataset.num;
    screen.value += value;
  });
});

//equals button clicked , if empty asks please enter, else evaluate whats on the screen and call it result and then update the screen value with the result.
equalB.addEventListener("click", function (e) {
  if (screen.value === "") {
    screen.value = "Please enter";
  } else {
    let result = eval(screen.value);
    screen.value = result;
  }
});

//When clear button is clicked , the screen value will be set to an empty field. Meaning the input field is cleared of any text.
//If you click on the clear button then update the screen value with an empty string!
clearB.addEventListener("click", function (e) {
  screen.value = "";
});

//EXTRA INFO
/* 
'   buttons.forEach(function(button){: ' 
This line starts a loop that iterates over each button element in the buttons collection or array.

'  button.addEventListener('click', function(e){: '  

This line adds an event listener to each button for the 'click' event. It specifies that when a button is clicked, a function will be executed.
The addEventListener method is used to attach an event listener to an individual element, not to a collection of elements and thats why this 'button' is not 'buttons'

'let value = e.target.dataset.num;:  '
This line retrieves the value of the data-num attribute from the button that was clicked. The e.target represents the button element that triggered the event, and dataset.num retrieves the value of the data-num attribute from that button.

'screen.value += value;:'
 This line updates the value of the screen element. It appends the value obtained from the data-num attribute of the clicked button to the current value displayed on the screen.

 screen.value === ""  STRICTLY checks if the value of the screen variable (presumably an input element's value) is an empty string.

 */
