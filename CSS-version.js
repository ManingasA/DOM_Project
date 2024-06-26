function subscribe() {
  const sub = document.querySelector('.jsSubscribe');
    if (sub.innerText === 'Subscribe') {
    sub.innerText = 'Subscribed';
    sub.classList.add('jsIsSubscribed');
    } 
    else {
      sub.innerText = 'Subscribe';
      sub.classList.remove('jsIsSubscribed');
    }
}

function calculate() {
  const cost = document.querySelector('.js-input');
  // this is how to get the text from the input element
  // inputElement.value
  let price = Number(cost.value);

  if (price < 40) {
    price = price + 10;
  }
  document.querySelector('.js-totalCost').innerHTML = `&dollar;${price}`;
}

function handleKeyEvent(event) {
  if (event.key === 'Enter') {
  calculate();
}
}

