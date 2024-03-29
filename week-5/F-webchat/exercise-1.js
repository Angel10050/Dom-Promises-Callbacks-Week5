/*
let menssageList = document.querySelector('#message-list')

Let's build a webchat to communicate with each other!

The requirements of a basic webchat are:
- The user can write a message in an input and send it after clicking on the submit button.
- After clicking on the submit button, the input should be empty.
- The user can read the existing messages in the message list.
- The message list is refreshed automatically every few seconds so 
the user can keep reading the incoming messages without refreshing the page.

  //.then(value => {
        return value.json()
    }).then(oldMenssages => oldMenssages.forEach(element => {
        menssageList.innerHTML += JSON.stringify(element.content + element.datetime)
    })
    )
========
Task 1
========

Your task is to build the webchat frontend. 
Some code is already written in index.html, that you can open in your browser.
For the purpose of this exercise, you are provided a server which you can interact 
with to get and save messages. Some messages already exist on the server. 

Your first task is to display those messages in the page, 
in the HTML element with the id "message-list". Use the following API to get the messages:

HTTP Verb: GET
API: https://codeyourfuture.herokuapp.com/api/messages


===============
Expected result
===============

When you open index.html in your browser, it should display the existing messages on the page.

*/
// let listtUl = document.createElement('ul')

let menssageList = document.querySelector('#message-list')

let myInterval;

function newElement(elemento) {
    menssageList.innerHTML = '';
    elemento.forEach(element => {
        let listtUl = document.createElement('ul')
        listtUl.innerHTML += element.datetime + ' --> ' + element.content + ' '
        menssageList.appendChild(listtUl)
    })
}

function forMyInterval() {
    fetch('https://codeyourfuture.herokuapp.com/api/messages')
        .then(function (readyMessages) {
            return readyMessages.json()
        })
        .then(function (oldMenssages) {
            newElement(oldMenssages)
        }
        ).catch(function (theError) {
            console.error(theError)
        })
}

// Write your code here
let myOwnInterval = document.querySelector('#submit')

myOwnInterval.addEventListener('click', intervalStart)

function intervalStart() {
    myInterval = setInterval(forMyInterval, 50)
}
myOwnInterval.addEventListener('mouseleave', intervalStop)


function intervalStop() {
    clearInterval(myInterval)

}
