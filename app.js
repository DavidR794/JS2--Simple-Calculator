//Steps1> inputs/imports/libraries...Initialize
//Steps2> functions/classes.....Event Listeners

//Intialise......
/*select the HTML elements that represent the calculator, 
the screen, all buttons and equal, clear buttons.
*/

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equalB = document.querySelector('.btn-equal'); 
    let clearB = document.querySelector('.btn-clear');
  
//Event Listeners.....

/* All buttons looped with forEach() method
Event listener waits for button to be clicked
The clicked buttons data-num attribute is set to the value. e.g. 5=data-num 5
The value of the button is added to the screen element's value attribute, which displays the value of the button on the calculator screen.
*/
    buttons.forEach(function(button){
      button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        screen.value += value;
      })
    });


    //equals button clicked , if empty asks please enter, else evaluate whats on the screen and call it result and then update the screen value with the result.
    equalB.addEventListener('click', function(e){
        if(screen.value === ''){
          screen.value = "Please enter";
        } else {
          let result = eval(screen.value);
          screen.value = result;
        }
      });

      
    clearB.addEventListener('click', function(e){
    
            screen.value = "";
        });


