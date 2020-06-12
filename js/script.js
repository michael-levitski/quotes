/******************************************
project 2 - Quote Show
******************************************/


/*** 
 * `quotes` array 
***/
const quotes = [
    {
        quote: 'You miss one hundred percent of the shots you don\'t take',
        source: 'Wayne Gretzky',
        citation: 'The Hockey News',
        year: 1983
    },
    {
        quote: 'Keep your friends close, and your enemies closer',
        source: 'Michael Corleone',
        citation: 'The Godfather, Part II',
        year: 1974
    },
    {
        quote: 'Do or do not, there is no try',
        source: 'Yoda',
        citation: 'Star Wars: Episode VI – Return of the Jedi',
        year: 1983
    },
    {
        quote: 'When life gives you lemons, make lemonade',
        source: 'Dale Carnegie',
        citation: 'How to Stop Worrying and Start Living',
        year: 1948       
    },
    {
        quote: 'Everybody has a plan until they get punched in the mouth',
        source: 'Mike Tyson',
        citation: 'The Los Angeles Times',
        year: 1987
    }
]

// to prevent repeating quotes
let currentIndex = -1

/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {

    //generate int between 0 and 4
    const newIndex = Math.floor(Math.random() * 5)

    // if index is the same as the last one displayed,
    // try to get a different quote
    if(newIndex === currentIndex) {
        return getRandomQuote()
    }

    // if index is different, set the currentIndex
    // and return the quote object
    currentIndex = newIndex
    return quotes[newIndex]
}

/***
 * `printQuote` function
***/
const printQuote = () => {
    const quote = getRandomQuote()

    //set the text by looping through the keys 
    for (const key in quote) {
        document.querySelector('.' + key).textContent = quote[key]
    }
}

// load the initial quote
addEventListener('load', printQuote)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false)
