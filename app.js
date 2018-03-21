const returnQuote = (function() {

const randomQuote = document.querySelector('.js-get-quote-btn');

randomQuote.addEventListener('click', (e) => {
e.preventDefault();

getRandomQuote()
  .then((data) => {
    return showRandomQuote(data), showRandomAuthor(data);
  })   
  .catch((error) => {
    if(error.status === 404) {
      console.log('This is a 404 error');
    }
  });

});

const getRandomQuote = async () => {
try {
  const res = await fetch('https://talaikis.com/api/quotes/random/');
  const data = await res.json();
  
  if(res.ok) {
    return data;  
  } 
} //end try

catch(error) {
  if(error.status === 404) {
    console.log('This is a 404 error');
  }
}// end catch

};

const showRandomQuote = (data) => { 
const showQuote = document.querySelector('.js-show-quote');
showQuote.innerHTML = data.quote;
};

const showRandomAuthor = (data) => {
const showAuthor = document.querySelector('.js-show-author');
showAuthor.innerHTML = data.author;
};

})(); //end returnQuote

twitterShareQuote = (function() {

  const tweetQuote = document.querySelector('.js-share-tweet');
  const showQuote = document.querySelector('.js-show-quote');
  const showAuthor = document.querySelector('.js-show-author');
  
  
  tweetQuote.addEventListener('click', (e) => {
    e.preventDefault();
    sendTweet(showQuote.innerHTML, showAuthor.innerHTML);
  });

  sendTweet = (quote, author) => {
    const encodedQuote = encodeURI(`https://twitter.com/intent/tweet/?text=${quote} 
-${author}`);

    tweetQuote.href = encodedQuote;
    window.open(tweetQuote.href);
  };

})(); 

// fetch('https://talaikis.com/api/quotes/random/')
//       .then((res) => {

//         console.log(res);

//         if(res.ok) {
//           return res.json();
//         } else {
//           return Promise.reject({
//             status: res.status,
//             statusText: res.statusText
//           });
//         }

//       })
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         if(error.status === 404) {
//           console.log('This is a 404 error');
//         }
//       }) 
//    