/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let buttonChangeBe = document.querySelector('.buttons #bgrChangeBtn')
let body = document.querySelector('body')

buttonChangeBe.addEventListener('click', changeColor)
function changeColor() {
    body.style.background = '#D9FF9A';
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertButtom = document.querySelector('#alertBtn')

alertButtom.addEventListener('click', showAlert)
function showAlert() {
    alert('Thanks for visiting Bikes for Refugees!')
}


/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let addTextBtn = document.querySelector('#addTextBtn')
let BtnBox = document.querySelector('.jumbotron')
let pElement = document.createElement('p')

addTextBtn.addEventListener('click', newText)
function newText() {
    BtnBox.appendChild(pElement)
    pElement.innerHTML = 'Read more below.'
}



/*
Task 4
======
When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let largeBtn = document.querySelector('#largerLinksBtn')
let linksTagA = document.querySelectorAll('.article-title a')

largeBtn.addEventListener('click', biggerLinks)
function biggerLinks() {
    [].forEach.call(linksTagA, (e) => {
        e.style.fontSize = '2em'
    })
}


/*let largeBtn = document.querySelector('#largerLinksBtn')

largeBtn.addEventListener('click', biggerLinks)

function biggerLinks() {
    let linksTagA = document.querySelectorAll('.article-title--sidebar')
    let i;
    for (i = 0; i < linksTagA.length; i++) {
        linksTagA[i].style.fontSize = '2em'
    }
}/*/