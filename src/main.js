var crockpotSection = document.querySelector('.suggestions');
var clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearSuggestions);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function testButton(form) {
  for (Count = 0; Count < 3; Count++) {
    if (form.food[Count].checked)
    break;
  }
  if (Count === 0) {
    show(sides)
  } else if (Count === 1) {
    show(mains)
  } else if (Count === 2) {
    show(desserts)
  } else {
    showMeal()
  }
}

function show(pass) {
  crockpotSection.innerHTML = `
    <h1 class="you-should">You should make:</h1>
    <p class="what-for">${pass[getRandomIndex(pass)]}</p>
    <button class="clear-button">Clear</button>
  `
}

function showMeal() {
  crockpotSection.innerHTML = `
    <h1 class="you-should">You should make:</h1>
    <p class="what-for">${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]}
    and ${desserts[getRandomIndex(desserts)]} for dessert!</p>
    <button class="clear-button">Clear</button>
  `
}

function clearSuggestions() {
  crockpotSection.innerHTML = `<img class="crockpot" src="./assets/cookpot.svg" alt="An image of a crockpot">`
}
