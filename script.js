const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const quoteBtn = document.getElementById('new-quote')

let data = []
function getText(){
    quote = data[Math.floor(Math.random() * data.length)]
    if (!quote.author){
        authorText.textContent = "Unknown"
    }
    else {
        authorText.textContent = quote.author
    }
    if (quote.text.length>120){
        quoteText.classList.add('changeFontSize')
    }
    else{
        quoteText.classList.remove('changeFontSize')
    }

    quoteText.textContent = quote.text  

}

async function getData(){
    const url  = 'https://type.fit/api/quotes'
    try{
        const response = await fetch(url)
        data = await response.json()
        getText()
    
    }catch(error){
        console.log(error)
    }
    
}
getData()
function TwitterLink(){
   const url = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
   window.open(url,'_blank')
}

quoteBtn.addEventListener('click',getText)
twitterBtn.addEventListener('click',TwitterLink)