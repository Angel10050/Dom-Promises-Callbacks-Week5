/*
  Promises
  ---------------------------------
  Open index.html in your browser
*/

/*
  EXERCISE 1
  =======

  Insert the result of promise1 into the #exercise1 element. Hint: .then()

  EXPECTED RESULT: The #exercise1 element has textContent = "A Promising
  Promise"
*/
let pElEtag = document.querySelector('#exercise1')
function exercise1() {
  var promise1 = resolvedPromise()
  promise1.then(function (value) {
    pElEtag.innerHTML = value
  })
}


// function resolvedPromise() {
//   return Promise.resolve('A Promising Promise')   // ESTO ES LO MISMO QUE AL FINAL DE LA HOJA
// }


/*
  EXERCISE 2
  =======

  Insert the result of promise2 into the #exercise2 element. Hint: .catch()

  EXPECTED RESULT: The #exercise2 element has textContent = "A Unpromising
  Promise"
*/
let pElEtag2 = document.querySelector('#exercise2')
function exercise2() {
  var promise2 = rejectedPromise()
  promise2.catch(function (sValue) {
    pElEtag2.innerHTML = sValue
  })

}

/*
  EXERCISE 3
  =======

  Insert the result of promise3 into the #exercise3 element. Notice how it
  takes longer than the others to finish

  EXPECTED RESULT: The #exercise3 element has textContent = "A Longer Promise"
*/
let exer3 = document.querySelector('#exercise3')
function exercise3() {
  var promise3 = delayedPromise()
  promise3.then(function (MyThrValue) {
    exer3.innerHTML = MyThrValue
  })
}

function delayedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('A Longer Promise')
    }, 2000)
  })
}
/*
  EXERCISE 4
  =======

  Take the result of promise4 and concatenate your name onto the end of it.
  Then return your concatenated string as a promise. Finally insert the result
  of your promise and insert it into the #exercise4 element

  EXPECTED RESULT: The #exercise4 element has textContent = "A Promise from:
  YOUR NAME"
*/
let exer4 = document.querySelector('#exercise4')
function exercise4() {
  var promise4 = concatPromise()
  promise4.then(function (fourthVal) {
    return fourthVal + 'Angel Velez'
  }).then(function (finalResult) {
    exer4.innerHTML = finalResult;
  })
}
function concatPromise() {
  return Promise.resolve('A Promise from: ')
}
/*
  EXERCISE 5 (Stretch Goal)
  =======
  Start this exercise if you have completed all of the other exercises and
  you understand them

  Create a new Promise that resolves with the string "Hello Promises!".
  Take the result of your promise and insert the it into the #exercise5
  element

  EXPECTED RESULT: The #exercise5 element has textContent = "Hello Promises!"
*/
let exerc5 = document.querySelector('#exercise5')
function exercise5() {
  myPromise().then(function (fiveValue) {
    exerc5.innerHTML = fiveValue;
  })
}
function myPromise() {
  return Promise.resolve('Hello Promises!')
}

/*
  EXERCISE 6 (Stretch Goal)
  =======
  Start this exercise if you have completed all of the other exercises and
  you understand them

  Create a new Promise that rejects with the string "Something went wrong!".
  Take the result of your promise and insert the it into the #exercise6
  element

  EXPECTED RESULT: The #exercise6 element has textContent = "Something went
  wrong!"
*/
let exerciseSix = document.querySelector('#exercise6')
function exercise6() {
  myPromiseRej().catch(result =>
    exerciseSix.innerHTML = result
  )
}
function myPromiseRej() {
  return Promise.reject('Something went wrong!')
}
// 
// -------------------------------------
// 
// DON'T EDIT THE FUNCTIONS BELOW!
// THEY ARE PROVIDED FOR YOU
//
// -------------------------------------
//
function resolvedPromise() {
  return Promise.resolve('A Promising Promise')
}

function rejectedPromise() {
  return Promise.reject('A Unpromising Promise')
}

function delayedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('A Longer Promise')
    }, 2000)
  })
}

function concatPromise() {
  return Promise.resolve('A Promise from: ')
}

exercise1()
exercise2()
exercise3()
exercise4()
exercise5()
exercise6()
