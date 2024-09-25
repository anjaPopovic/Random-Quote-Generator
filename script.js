document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loadQuote").addEventListener("click", function () {
        showRandomQuote();
    });
});

var quotes = [
    {
    quote: "Do the best you can until you know better. Then when you know better, do better.",
    source: "Maya Angelou"
    },
    {
    quote: "But we cannot simply sit and stare at our wounds forever.",
    source: "Haruki Murakami"
    },
    {
    quote: "My destiny depends on me and not on the heavens.",
    source: "Chinese proverb"
    },
    {
    quote: "Have fun even if it's not the same kind of fun everyone else is having.",
    source: "C.S.Lewis"  
    },
    {
    quote: "He who delights in solitude is either a wild beast or a god.",
    source: "Friedrich Nietzche"
    },
    {
    quote: "I have learned all kinds of things from my many mistakes. The one thing I never learn is to stop making them.",
    source: "Joe Abercrombie"
    },
    {
    quote: "The world only exits in your eyes. You can make it as big or as small as you want.",
    source: "F. Scott Fitzgerald"
    },
    {
    quote: "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.",
    source: "Jose Luis Borges"
    },{
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    source: "Aristotle"
    }, 
    {quote: "If you desire to make a difference in the world, you must be different from the world.",
    source: "Elain S. Dalton"
    },
    {
    quote: "The key to success is to start before you are ready.",
    source: "Marie Forleo"
    },
    {
    quote: "The mind is beautiful because of the paradox. It uses itself to understand itself.",
    source: "Adam Elenbaas"
    },
    {
    quote: "We cannot solve our problems with the same thinking we used when we created them.",
    source: "Albert Einstein"
    },
 ];

//function to get a random quote from an array of quotes
/*function getRandomQuote () {
    var randomNum = Math.floor(Math.random() * (quotes.length));
    var randomQuote = quotes[randomNum];
    return randomQuote;*/

//}

function getRandomQuote () {
    var lastRandomNum = -1; //variable for tracking last random number
    var randomNum;

    //generate new random number who is not equal to last random number
    do{
        randomNum = Math.floor(Math.random() * (quotes.length));
    } while (randomNum === lastRandomNum);

    lastRandomNum = randomNum;

    var randomQuote = quotes[randomNum];
    return randomQuote;
}


function getRandomColor () {
    var red = Math.floor(Math.random() * 255);
	var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);
    var yellow = Math.floor(Math.random() * 255)
	var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ',' + yellow + ')';
	return randomColor;
}

function showRandomQuote() {
    var randomQuote = getRandomQuote();
    var quoteElement = document.querySelector(".quote");
    var sourceElement = document.querySelector(".source");

    quoteElement.textContent = randomQuote.quote;
    sourceElement.textContent = randomQuote.source;

    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;   
}
