const quotes = [
    "Life is what happens when you're busy making other plans.",
    "Be yourself. Everyone else is already taken.",
    "To be or not to be.  That is question.",
    "Stay hungry, stay foolish.",
    "The only thing we have to fear is fear itself.",
    "I think, therefore I am.",
    "In the end, we only regret the chances we didn't take.",
    "That which does not kill us makes us stronger.",
    "Happiness depends upon ourselves.",
    "Do what you can with what you have.",
    "Float like a butterfly, sting like a bee!",
    "Not all those who wander are lost.",
    "The journey of a thousand miles begins with one step.",
    "I have a dream.",
    "Knowledge is power."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    const randomIdx = Math.floor(Math.random() * quotes.length)
    // sets text of paragraph element from HTML --> quoteElement.innerHTML = ''
    const quote = quotes[randomIdx]
    quoteElement.innerHTML = quote;
}