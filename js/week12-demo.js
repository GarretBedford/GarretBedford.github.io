async function getCatQuote() {
  console.log("cat quote button clicked");
  try {
    const response = await fetch(endpointCat);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    console.log(json.fact);
    displayQuote(json.fact);
  } catch(err) {
    console.log(err);
    alert('Failed');
  }
}

async function getDogQuote() {
  console.log("dog quote button clicked");
  try {
    const response = await fetch(endpointDog)
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    console.log(json.fact);
    displayQuote(json.fact);
  } catch(err) {
    console.log(err);
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
  console.log('Quote Loaded')
}

const endpointCat = 'https://some-random-api.ml/animal/cat';
const endpointDog = 'https://some-random-api.ml/animal/dog';

const quoteCatButton = document.querySelector('#js-cat-quote');
const quoteDogButton = document.querySelector('#js-dog-quote');

quoteCatButton.addEventListener('click', getCatQuote);
quoteDogButton.addEventListener('click', getDogQuote);
