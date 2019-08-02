/*
  Callbacks
  ---------------------------------
  Open index.html in your browser
*/

/*
  EXERCISE 1
  =======

  Write a function that inserts your name into the #exercise1 element when
  the button is clicked

  EXPECTED RESULT: The #exercise1 element has textContent = "YOUR NAME" when
  the button is clicked
*/
let btnOne = document.querySelector('#button1')
let pOne = document.querySelector('#exercise1')
btnOne.addEventListener('click', exercise1)

function exercise1() {
  pOne.innerHTML = 'Angel Velez'
}


// Es una funciona que llama otra funcion
/*
  EXERCISE 2
  =======

  A function is provided for you (functionThatCallsBack) that will call the
  first parameter as a callback. The callback receives a result as the first
  parameter

  Finish writing the callback function to insert the result into the #exercise2
  element

  EXPECTED RESULT: The #exercise2 element has textContent = "Hello from the
  function caller"
*/

functionThatCallsBack(exercise2)

let pTwo = document.querySelector('#exercise2')

function exercise2(result) {
  pTwo.innerHTML = result
}


function functionThatCallsBack(callback) {
  callback('Hello from the function caller')
}

/*
  EXERCISE 3
  =======

  The exercise3 function will be called for you automatically. It is called
  with a callback function as the first parameter. Call this callback function
 with the parameter "Hello from the callback" and it will
  insert it into the #exercise3 element (hint: use `()`) 

  EXPECTED RESULT: The #exercise3 element has textContent = "Hello from the
  callback"
 Can you explain why we get this result? Write down your explanation in a
  comment below (Hint: look below to see where exercise3 is called)
*/



function exercise3(callback) {
  callback("Hello from the callback")
}

exercise3((text) => {
  document.querySelector('#exercise3').innerText = text
})

// 
// -------------------------------------
// 
// DON'T EDIT THE FUNCTIONS BELOW!
// THEY ARE PROVIDED FOR YOU
//
// -------------------------------------
//
function functionThatCallsBack(callback) {
  callback('Hello from the function caller')
}

exercise3((text) => {
  document.querySelector('#exercise3').innerText = text
})
