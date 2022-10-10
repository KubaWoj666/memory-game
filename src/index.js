// card options

const cardArray = [
    {
        name: 'fries',
        img: 'src/img/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'src/img/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'src/img/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'src/img/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'src/img/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'src/img/hotdog.png'
    },
    {
        name: 'fries',
        img: 'src/img/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'src/img/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'src/img/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'src/img/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'src/img/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'src/img/hotdog.png'
    },
]   




// matematyczny trik Marh.random zwraca liczļe w przedziale 0-1 nie za bardzo rozumiem trzeba zgłebić temat w kazdym razie miesza listę 
cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray)



const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')

let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

function createBord() {
    for (let i=0; i < cardArray.length; i++){
        const card = document.createElement("img")
        card.setAttribute('src', 'src/img/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}


function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }

}

function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const otpionOneId = cardsChosenIds[0]
    const optionTwoId  = cardsChosenIds[1]

    if (otpionOneId == optionTwoId){
        alert('you click the same image')
        cards[otpionOneId].setAttribute('src', 'src/img/blank.png')
        cards[optionTwoId].setAttribute('src', 'src/img/blank.png')
    } else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Yoy have found match!')
        cards[otpionOneId].setAttribute('src', 'src/img/white.png')
        cards[optionTwoId].setAttribute('src', 'src/img/white.png')
        cards[otpionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }else {
        cards[otpionOneId].setAttribute('src', 'src/img/blank.png')
        cards[optionTwoId].setAttribute('src', 'src/img/blank.png')
        alert('Sorry, try again!')

    }
    cardsChosen = []
    cardsChosenIds = []

    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length /2) {
        resultDisplay.textContent = " Congratulations you hawe won!"
    }

    console.log(cardsChosen)
    console.log(cardsWon)

}
createBord()