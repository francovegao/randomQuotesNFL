/******************************************
*****************************************/

var quotes = quotes;

/*** 
 * `quotes` array 
***/
//read the quotes and store it in Array
const quotesArray=Array.from(quotes);

/***
 * `getRandomQuote` function
***/
//Create set to store random numbers and check if they repeat
const numbers = new Set();
let randomQuote="";

function getRandomQuote(){

    //generate whole random number between 0 and 15
let x = Math.floor((Math.random() * quotesArray.length));

//save the random number to set to prevent repeat numbers
while(true){
    if(!numbers.has(x)){
        numbers.add(x)
        //get the quote at random number position
        randomQuote = {quote:quotesArray[x].quote,
            author:quotesArray[x].source,
            location:quotesArray[x].citation,
            year:quotesArray[x].year};
        break;
    }
    else{
        x = Math.floor((Math.random() * quotesArray.length));
        if(numbers.size>=quotesArray.length){
            break;
        }
    }
}
    return randomQuote;
}

/***
 * `printQuote` function
***/
function printQuote(){
const currentQuote=getRandomQuote(); 

// Get the HTML elements
const quoteTag = document.querySelector('.quote');
const authorTag = document.querySelector('.source');
const locationTag = document.querySelector('.citation');
const yearTag = document.querySelector('.year');

//Creating functions for UI , creating the content of the page from javascript
const insertAuthorLocYear = info => (`${info.author}<span class="citation">${info.location}</span><span class="year">${info.year}</span>`);
const insertAuthorLocation = info => (`${info.author}<span class="citation">${info.location}</span>`);
const insertAuthorYear = info => (`${info.author}<span class="year">${info.year}</span>`);

// Add data to the page
//Check if the elements exist in the data (year and location)
quoteTag.innerHTML=currentQuote.quote;
if(currentQuote.location==undefined && currentQuote.year==undefined){
    authorTag.innerHTML=currentQuote.author;
}else if(currentQuote.location==undefined && currentQuote.year!=undefined){ 
    authorTag.innerHTML=insertAuthorYear(currentQuote);
}else if(currentQuote.location!=undefined && currentQuote.year==undefined){ 
    authorTag.innerHTML=insertAuthorLocation(currentQuote);
}else{
    authorTag.innerHTML=insertAuthorLocYear(currentQuote);
}

}

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.
***/
//Reads the click of the button and executes the print quote function
document.getElementById('load-quote').addEventListener('click', printQuote);